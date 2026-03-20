import { useEffect } from "react";
import type { RefObject } from "react";

interface UseSectionTargetScrollOptions {
  containerRef: RefObject<HTMLElement | null>;
  activeTabKey: string;
  targetSection: string | null;
  clearTarget: () => void;
  delayMs?: number;
  offsetPx?: number;
}

/**
 * Handles delayed in-container section scrolling after tab/view transitions.
 */
export function useSectionTargetScroll({
  containerRef,
  activeTabKey,
  targetSection,
  clearTarget,
  delayMs = 350,
  offsetPx = 32,
}: UseSectionTargetScrollOptions) {
  useEffect(() => {
    if (!targetSection) {
      return undefined;
    }

    const timer = setTimeout(() => {
      const target = document.getElementById(targetSection);
      const container = containerRef.current;

      if (target && container) {
        const targetTop = target.getBoundingClientRect().top;
        const containerTop = container.getBoundingClientRect().top;
        const nextOffset = targetTop - containerTop + container.scrollTop - offsetPx;
        container.scrollTo({ top: nextOffset, behavior: "smooth" });
      }

      clearTarget();
    }, delayMs);

    return () => clearTimeout(timer);
  }, [activeTabKey, targetSection, containerRef, clearTarget, delayMs, offsetPx]);
}
