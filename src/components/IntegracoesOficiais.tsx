import * as React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import whatsappImg from "@/fotos/integração/Whatsapp.png";
import metaImg from "@/fotos/integração/meta.png";
import microsoftImg from "@/fotos/integração/microsotf.png";
import openaiImg from "@/fotos/integração/openia.png";
import webhookImg from "@/fotos/integração/webhooks.png";
import n8nImg from "@/fotos/integração/n8n.png";
import typebotImg from "@/fotos/integração/typbot.png";

type IntegracoesOficiaisProps = React.ComponentProps<"div"> & {
  className?: string;
};

const imagens = [
  { src: metaImg, alt: "Meta" },
  { src: whatsappImg, alt: "WhatsApp" },
  { src: openaiImg, alt: "OpenAI" },
  { src: microsoftImg, alt: "Microsoft" },
  { src: n8nImg, alt: "n8n" },
  { src: typebotImg, alt: "Typebot" },
  { src: webhookImg, alt: "Webhook" },
];

export default function IntegracoesOficiais({
  className,
  ...props
}: IntegracoesOficiaisProps) {
  const size = { w: 200, h: 56 };

  return (
    <div {...props} className={cn("w-full", className)}>
      <h2 className="text-xl md:text-2xl font-normal mb-6 text-neutral-300 text-center">
        Integrações Oficiais
      </h2>
      <div className={cn("flex justify-center overflow-hidden py-6")}>
        <InfiniteSlider gap={44} padX={28} reverse speed={28} speedOnHover={24}>
          {imagens.map(({ src, alt }) => {
            return (
            <img
              src={src}
              alt={alt}
              className="pointer-events-none select-none object-contain flex-shrink-0 grayscale brightness-110 contrast-75 opacity-90"
              style={{ width: `${size.w}px`, height: `${size.h}px` }}
              draggable={false}
            />
            );
          })}
        </InfiniteSlider>
      </div>
    </div>
  );
}
