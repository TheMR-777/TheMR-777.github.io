import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, type LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  description?: string;
  meta?: string;
  tags?: string[];
  onClick?: () => void;
  href?: string;
  compact?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  meta,
  tags,
  onClick,
  href,
  compact = false,
}) => {
  const isInteractive = onClick || href;
  const content = (
    <motion.div
      whileHover={isInteractive ? { y: -1 } : undefined}
      transition={{ duration: 0.15 }}
      className={`
        group relative p-${compact ? '4' : '5'} rounded-xl 
        bg-layer border border-stroke 
        ${isInteractive 
          ? 'cursor-pointer hover:bg-layer-hover hover:border-stroke-hover' 
          : ''
        }
        transition-colors duration-200
      `}
      onClick={onClick}
    >
      {/* Top Row */}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center">
            <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          {meta && (
            <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
              {meta}
            </span>
          )}
          <h3 className={`${compact ? 'text-sm' : 'text-[15px]'} font-medium text-text-primary truncate`}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-text-secondary mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {/* Action indicator */}
        {isInteractive && (
          <div className="flex-shrink-0 text-text-disabled group-hover:text-text-tertiary transition-colors">
            {href ? (
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
            ) : (
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
            )}
          </div>
        )}
      </div>
      {/* Description */}
      {description && (
        <p className={`text-xs text-text-secondary leading-relaxed mt-3 ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
          {description}
        </p>
      )}
      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] rounded-md bg-layer-active border border-stroke text-text-tertiary"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] rounded-md text-text-disabled">
              +{tags.length - 4}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default InfoCard;
