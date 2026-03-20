import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../utils/cn";

interface DetailSectionProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

/**
 * Shared semantic section block for sheet/detail content.
 * Standardizes heading hierarchy so dense panels stay readable.
 */
export function DetailSection({
  title,
  icon: Icon,
  children,
  className,
  contentClassName,
}: DetailSectionProps) {
  return (
    <section className={className}>
      <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
        {Icon && <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />}
        {title}
      </h4>
      <div className={cn("space-y-0", contentClassName)}>{children}</div>
    </section>
  );
}
