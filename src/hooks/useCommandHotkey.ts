import { useEffect } from "react";

interface UseCommandHotkeyOptions {
  enabled?: boolean;
  onToggle: () => void;
}

/**
 * Registers a global Cmd/Ctrl+K listener for command surfaces.
 */
export function useCommandHotkey({ enabled = true, onToggle }: UseCommandHotkeyOptions) {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onToggle();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onToggle]);
}
