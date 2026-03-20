import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDelayedVisibility } from '../hooks/useDelayedVisibility';

interface SkillTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode | null;
  delay?: number;
}

export const SkillTooltip: React.FC<SkillTooltipProps> = ({
  children,
  content,
  delay = 500,
}) => {
  const { isVisible, showWithDelay, hide } = useDelayedVisibility(delay);

  const showTooltip = () => {
    if (!content) return;
    showWithDelay();
  };

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hide}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="absolute left-0 bottom-full mb-2 z-50 pointer-events-none"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillTooltip;
