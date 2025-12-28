import * as React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import whatsappImg from "@/fotos/integração/Whatsapp.png";
import metaImg from "@/fotos/integração/meta.png";
import microsoftImg from "@/fotos/integração/microsft.png";
import openaiImg from "@/fotos/integração/openia.png";
import webhookImg from "@/fotos/integração/webhooks.png";

type IntegracoesOficiaisProps = React.ComponentProps<"div"> & {
  className?: string;
};

const imagens = [
  { src: whatsappImg, alt: "WhatsApp" },
  { src: openaiImg, alt: "OpenAI" },
  { src: metaImg, alt: "Meta" },
  { src: microsoftImg, alt: "Microsoft" },
  { src: webhookImg, alt: "Webhook" },
];

export default function IntegracoesOficiais({
  className,
  ...props
}: IntegracoesOficiaisProps) {
  const sizeFor = (alt: string) => {
    if (alt === "OpenAI") return { w: 160, h: 44 };
    if (alt === "Outlook" || alt === "Excel" || alt === "Webhook" || alt === "Microsoft")
      return { w: 320, h: 88 };
    return { w: 220, h: 64 };
  };

  return (
    <div {...props} className={cn("w-full", className)}>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black text-center">
        Integrações Oficiais
      </h2>
      <div className={cn("flex justify-center overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black,transparent)]")}>
        <InfiniteSlider gap={56} reverse speed={8} speedOnHover={6}>
          {imagens.map(({ src, alt }) => {
            const s = sizeFor(alt);
            return (
            <img
              src={src}
              alt={alt}
              className="pointer-events-none select-none object-contain"
              style={{ width: `${s.w}px`, height: `${s.h}px` }}
              draggable={false}
            />
            );
          })}
        </InfiniteSlider>
      </div>
    </div>
  );
}
