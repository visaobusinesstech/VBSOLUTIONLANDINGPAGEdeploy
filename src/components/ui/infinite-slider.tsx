import * as React from "react";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = React.PropsWithChildren<
  {
    gap?: number;
    reverse?: boolean;
    speed?: number;
    speedOnHover?: number;
    className?: string;
  } & React.ComponentProps<"div">
>;

export function InfiniteSlider({
  children,
  gap = 24,
  reverse = false,
  speed = 18,
  speedOnHover = 12,
  className,
  ...props
}: InfiniteSliderProps) {
  const [hovered, setHovered] = React.useState(false);
  const duration = hovered ? speedOnHover : speed;

  const trackStyle: React.CSSProperties = {
    gap: `${gap}px`,
    animationName: reverse ? "infinite-scroll-reverse" : "infinite-scroll",
    animationDuration: `${duration}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    willChange: "transform",
  };

  return (
    <div
      {...props}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes infinite-scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
      <div className="inline-flex whitespace-nowrap items-center" style={trackStyle}>
        {children}
        {children}
      </div>
    </div>
  );
}
