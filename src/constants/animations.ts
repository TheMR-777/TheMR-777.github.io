/**
 * Shared Framer Motion viewport configuration for scroll-triggered animations.
 * Tweak `margin` to control how early/late the animation fires relative to the viewport edge.
 * Negative values (e.g. "-20px") trigger slightly before the element fully enters the viewport.
 */
export const SCROLL_ANIMATION_VP = {
  once: true,
  margin: "20px",
} as const satisfies import("framer-motion").UseInViewOptions;
