import { cn } from "@/lib/utils";
import * as React from "react";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-white/10",
        className
      )}
      {...props}
    >
      <LogoCard
        className=""
        logo={{
          src: "https://seeklogo.com/images/V/v4-company-logo-79BF62412A-seeklogo.com.png",
          alt: "V4 Company",
        }}
      />
      <LogoCard
        className=""
        logo={{
          src: "https://seeklogo.com/images/M/magalu-logo-07CEB2A02B-seeklogo.com.png",
          alt: "Magazine Luiza",
        }}
      />
      <LogoCard
        className=""
        logo={{
          src: "https://seeklogo.com/images/W/wizard-by-pearson-logo-9B9B34C0B2-seeklogo.com.png",
          alt: "Wizard",
        }}
      />
      <LogoCard
        className=""
        logo={{
          src: "https://seeklogo.com/images/K/kiwify-logo-9B35F48504-seeklogo.com.png",
          alt: "Kiwify",
        }}
      />

    </div>
  );

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
