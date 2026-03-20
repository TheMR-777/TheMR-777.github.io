import { useDelayedVisibility } from "./useDelayedVisibility";

/**
 * Thin hover-oriented wrapper over the generic delayed visibility primitive.
 * Keeps call sites ergonomic while avoiding duplicate timeout logic.
 */
export function useDelayedHover(delay = 500) {
  const { isVisible, showWithDelay, hide } = useDelayedVisibility(delay);

  return {
    isVisible,
    onMouseEnter: showWithDelay,
    onMouseLeave: hide,
  };
}
