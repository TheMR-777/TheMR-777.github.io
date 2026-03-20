import { useEffect } from "react";

/**
 * Locks body scrolling while overlays/sheets are open.
 * Cleanup is guaranteed even if the component unmounts abruptly.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
