import { cn } from "../utils/cn";

type TagTone = "accent" | "default" | "muted";

interface TagListProps {
  items: string[];
  tone?: TagTone;
  className?: string;
  itemClassName?: string;
  children?: React.ReactNode;
}

const toneClasses: Record<TagTone, string> = {
  accent: "bg-accent-subtle text-accent font-medium",
  default: "bg-layer border border-stroke text-text-primary",
  muted: "bg-layer-active border border-stroke text-text-tertiary",
};

/**
 * Compact reusable tag renderer for technologies, partners, and metadata chips.
 */
export function TagList({ items, tone = "accent", className, itemClassName, children }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <span
          key={item}
          className={cn("px-3 py-1.5 text-xs rounded-lg", toneClasses[tone], itemClassName)}
        >
          {item}
        </span>
      ))}
      {children}
    </div>
  );
}
