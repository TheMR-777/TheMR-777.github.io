import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import { useDelayedVisibility } from '../hooks/useDelayedVisibility';

interface TooltipProps {
  children: React.ReactNode;
  content: {
    title: string;
    description: string;
    meta?: string;
  };
  action?: {
    label: string;
    onClick: () => void;
  };
  delay?: number;
  hideDelay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  action,
  delay = 500,
  hideDelay = 200,
}) => {
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const triggerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { isVisible, showWithDelay, showNow, hide, toggle } = useDelayedVisibility(delay, hideDelay);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    setPosition(spaceAbove > spaceBelow ? 'top' : 'bottom');
  }, []);

  const showTooltip = useCallback(() => {
    updatePosition();
    showWithDelay();
  }, [showWithDelay, updatePosition]);

  const hideTooltip = useCallback(() => {
    hide();
  }, [hide]);

  const handleTap = () => {
    if (isMobile) {
      updatePosition();
      toggle();
    }
  };

  // Close on outside tap (mobile)
  useEffect(() => {
    if (!isMobile || !isVisible) return;

    const handleOutsideTap = (e: TouchEvent | MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        hide();
      }
    };

    document.addEventListener('touchstart', handleOutsideTap);
    document.addEventListener('mousedown', handleOutsideTap);

    return () => {
      document.removeEventListener('touchstart', handleOutsideTap);
      document.removeEventListener('mousedown', handleOutsideTap);
    };
  }, [isMobile, isVisible, hide]);

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={!isMobile ? showTooltip : undefined}
      onMouseLeave={!isMobile ? hideTooltip : undefined}
      onFocus={!isMobile ? showTooltip : undefined}
      onBlur={!isMobile ? hideTooltip : undefined}
      onClick={handleTap}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Mobile: Fixed overlay tooltip above bottom nav */}
            {isMobile ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="fixed z-[60] bottom-20 left-4 right-4 mx-auto max-w-[320px] p-4 bg-mica-alt border border-stroke rounded-xl shadow-xl"
              >
                <div>
                  {content.meta && (
                    <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                      {content.meta}
                    </span>
                  )}
                  <h4 className="text-sm font-medium text-text-primary mt-0.5 mb-1.5">
                    {content.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {content.description}
                  </p>
                  {action && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        hideTooltip();
                        action.onClick();
                      }}
                      className="mt-3 flex items-center gap-1 text-xs text-accent hover:text-accent-light transition-colors group focus:outline-none"
                    >
                      {action.label}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Desktop: Absolute positioned tooltip with arrow */
              <motion.div
                initial={{ opacity: 0, y: position === 'top' ? 4 : -4, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: position === 'top' ? 4 : -4, scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  absolute z-50 w-64 p-4
                  bg-mica-alt border border-stroke rounded-lg shadow-lg
                  ${position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
                  left-1/2 -translate-x-1/2
                `}
                onMouseEnter={showNow}
                onMouseLeave={hideTooltip}
              >
                {/* Arrow */}
                <div
                  className={`
                    absolute left-1/2 -translate-x-1/2 w-2 h-2
                    bg-mica-alt border-stroke rotate-45
                    ${position === 'top'
                      ? 'bottom-[-5px] border-r border-b'
                      : 'top-[-5px] border-l border-t'
                    }
                  `}
                />
                {/* Content */}
                <div className="relative">
                  {content.meta && (
                    <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                      {content.meta}
                    </span>
                  )}
                  <h4 className="text-sm font-medium text-text-primary mt-0.5 mb-1.5">
                    {content.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {content.description}
                  </p>
                  {action && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        hideTooltip();
                        action.onClick();
                      }}
                      className="mt-3 flex items-center gap-1 text-xs text-accent hover:text-accent-light transition-colors group focus:outline-none"
                    >
                      {action.label}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
