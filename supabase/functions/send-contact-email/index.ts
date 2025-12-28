
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("=== send-contact-email function started ===");
  console.log("Request method:", req.method);
  console.log("Request headers:", Object.fromEntries(req.headers.entries()));
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if Resend API key is available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Resend API key found, length:", resendApiKey.length);

    const requestBody = await req.text();
    console.log("Raw request body:", requestBody);

    const { name, email, company, phone, service, message }: ContactEmailRequest = JSON.parse(requestBody);
    
    console.log("Parsed form data:", { 
      name, 
      email, 
      company: company || "N/A", 
      phone: phone || "N/A", 
      service: service || "N/A",
      messageLength: message?.length 
    });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Nome, email e mensagem são obrigatórios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Prepare the email content
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Nova mensagem de contato recebida
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong style="color: #374151;">Nome:</strong> ${name}</p>
          <p><strong style="color: #374151;">Email:</strong> 
            <a href="mailto:${email}" style="color: #1e40af;">${email}</a>
          </p>
    `;

    if (company) {
      emailContent += `<p><strong style="color: #374151;">Empresa:</strong> ${company}</p>`;
    }

    if (phone) {
      emailContent += `<p><strong style="color: #374151;">Telefone:</strong> 
        <a href="tel:${phone}" style="color: #1e40af;">${phone}</a>
      </p>`;
    }

    if (service) {
      emailContent += `<p><strong style="color: #374151;">Serviço de interesse:</strong> ${service}</p>`;
    }

    emailContent += `
          <div style="margin-top: 20px;">
            <strong style="color: #374151;">Mensagem:</strong>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          <em>Esta mensagem foi enviada através do formulário de contato do site Visão Business Tech.</em>
        </p>
      </div>
    `;

    console.log("Attempting to send email via Resend...");
    
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Formulário de Contato <noreply@resend.dev>",
      to: ["visaobusinesstech@gmail.com"],
      subject: `🚀 Nova mensagem de contato - ${name}`,
      html: emailContent,
      reply_to: email,
    });

    console.log("Resend API response:", emailResponse);

    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return new Response(
        JSON.stringify({ 
          error: "Falha ao enviar email", 
          details: emailResponse.error 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully! Email ID:", emailResponse.data?.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: emailResponse.data?.id,
        message: "Email enviado com sucesso!"
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("=== ERROR in send-contact-email function ===");
    console.error("Error type:", error.constructor.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: "Erro interno do servidor", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
