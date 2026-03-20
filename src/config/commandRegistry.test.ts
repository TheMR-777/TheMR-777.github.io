import { describe, expect, it, vi } from "vitest";
import { Home } from "lucide-react";
import { accentColors } from "../contexts/ThemeContext";
import {
  buildCommands,
  filterCommands,
  groupCommands,
} from "./commandRegistry";

describe("commandRegistry", () => {
  it("builds command items and wires actions", () => {
    const onNavigate = vi.fn();
    const onClose = vi.fn();
    const setMode = vi.fn();
    const setAccent = vi.fn();
    const openExternal = vi.fn();

    const commands = buildCommands({
      mode: "dark",
      accent: accentColors[0],
      onNavigate,
      onClose,
      setMode,
      setAccent,
      openExternal,
    });

    const home = commands.find((c) => c.id === "nav-home");
    const dark = commands.find((c) => c.id === "theme-dark");
    const github = commands.find((c) => c.id === "link-github");

    expect(home).toBeDefined();
    expect(dark).toBeDefined();
    expect(github).toBeDefined();

    home?.action();
    expect(onNavigate).toHaveBeenCalledWith("home");
    expect(onClose).toHaveBeenCalled();

    dark?.action();
    expect(setMode).toHaveBeenCalledWith("dark");

    github?.action();
    expect(openExternal).toHaveBeenCalled();
  });

  it("filters by label, description, and keywords case-insensitively", () => {
    const noop = () => undefined;
    const commands = [
      { id: "1", label: "Projects", category: "navigation" as const, icon: Home, action: noop, keywords: ["showcase"] },
      { id: "2", label: "Dark Mode", category: "theme" as const, icon: Home, action: noop, description: "Switch theme" },
      { id: "3", label: "Email", category: "links" as const, icon: Home, action: noop, keywords: ["contact"] },
    ];

    expect(filterCommands(commands, "proj").map((c) => c.id)).toEqual(["1"]);
    expect(filterCommands(commands, "SWITCH").map((c) => c.id)).toEqual(["2"]);
    expect(filterCommands(commands, "contact").map((c) => c.id)).toEqual(["3"]);
  });

  it("groups in stable category order and omits empty groups", () => {
    const noop = () => undefined;
    const commands = [
      { id: "1", label: "Projects", category: "navigation" as const, icon: Home, action: noop },
      { id: "2", label: "Dark", category: "theme" as const, icon: Home, action: noop },
      { id: "3", label: "GitHub", category: "links" as const, icon: Home, action: noop },
    ];

    const grouped = groupCommands(commands);
    expect(grouped.map((g) => g.category)).toEqual(["navigation", "theme", "links"]);
    expect(grouped.map((g) => g.label)).toEqual(["Navigation", "Appearance", "Quick Links"]);
  });
});
