import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Shared delayed-visibility state manager for hover/focus driven overlays.
 */
export function useDelayedVisibility(delay = 500, hideDelay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelPending = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const showWithDelay = useCallback(() => {
    cancelPending();
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      timeoutRef.current = null;
    }, delay);
  }, [cancelPending, delay]);

  const hide = useCallback(() => {
    cancelPending();
    if (hideDelay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        timeoutRef.current = null;
      }, hideDelay);
    } else {
      setIsVisible(false);
    }
  }, [cancelPending, hideDelay]);

  const showNow = useCallback(() => {
    cancelPending();
    setIsVisible(true);
  }, [cancelPending]);

  const toggle = useCallback(() => {
    cancelPending();
    setIsVisible((prev) => !prev);
  }, [cancelPending]);

  useEffect(() => cancelPending, [cancelPending]);

  return {
    isVisible,
    setIsVisible,
    showWithDelay,
    showNow,
    hide,
    toggle,
    cancelPending,
  };
}
