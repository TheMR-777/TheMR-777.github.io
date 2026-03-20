import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  action?: {
    label: string;
    onClick: () => void;
    icon?: LucideIcon;
  };
  className?: string;
}

/**
 * Shared compact section header used across list-heavy views.
 */
export function SectionHeader({ title, subtitle, icon: Icon, action, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-5 ${className}`.trim()}>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className="w-6 h-6 rounded-md bg-accent-subtle flex items-center justify-center">
              <Icon className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
            </div>
          )}
          <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
        </div>
        {subtitle && <p className={`text-xs text-text-tertiary mt-1 ${Icon ? "ml-8" : ""}`.trim()}>{subtitle}</p>}
      </div>

      {action && (
        <button
          onClick={action.onClick}
          className="flex items-center gap-1 text-xs text-text-tertiary hover:text-accent transition-colors"
        >
          {action.label}
          {action.icon && <action.icon className="w-3 h-3" strokeWidth={1.5} />}
        </button>
      )}
    </div>
  );
}
