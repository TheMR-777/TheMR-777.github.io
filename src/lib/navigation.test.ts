import { describe, expect, it } from "vitest";
import { resolveNavigationTarget } from "./navigation";

describe("resolveNavigationTarget", () => {
  it("normalizes tab-only navigation", () => {
    expect(resolveNavigationTarget("projects")).toEqual({ tab: "projects", section: null });
  });

  it("normalizes object navigation with section", () => {
    expect(resolveNavigationTarget({ tab: "skills", section: "skills-core" })).toEqual({
      tab: "skills",
      section: "skills-core",
    });
  });

  it("normalizes object navigation without section", () => {
    expect(resolveNavigationTarget({ tab: "home" })).toEqual({ tab: "home", section: null });
  });
});
