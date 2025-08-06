import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-effect rounded-lg",
        hover && "glow-button cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
