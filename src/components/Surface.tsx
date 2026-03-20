import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type SurfacePadding = "none" | "sm" | "md" | "lg";
type SurfaceTone = "default" | "subtle" | "mica";

interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: SurfacePadding;
  tone?: SurfaceTone;
}

const paddingClasses: Record<SurfacePadding, string> = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
};

const toneClasses: Record<SurfaceTone, string> = {
  default: "bg-layer border border-stroke",
  subtle: "bg-layer-active border border-stroke",
  mica: "bg-mica border border-stroke",
};

/**
 * Shared Fluent-style surface primitive for cards, blocks, and contained sections.
 * Keeps surface semantics consistent while letting views compose their own layout.
 */
export function Surface({
  interactive = false,
  padding = "lg",
  tone = "default",
  className,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        toneClasses[tone],
        paddingClasses[padding],
        interactive && "transition-colors hover:bg-layer-hover hover:border-stroke-hover",
        className,
      )}
      {...props}
    />
  );
}
