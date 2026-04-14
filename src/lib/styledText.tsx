import React, { useMemo, Fragment } from "react";

// --- Types & Interfaces ---

export type TextNode = string;
export type ElementNode = {
  type: string;
  param?: string;
  children: ASTNode[];
};
export type ASTNode = TextNode | ElementNode;

export type TagRenderer = {
  element: keyof React.JSX.IntrinsicElements;
  className?: string;
  render?: (node: ElementNode, children: React.ReactNode, key: React.Key) => React.ReactNode;
};

export type TagRegistry = Record<string, TagRenderer>;
export type StyledTextMode = "rich" | "plain" | "raw";

// --- Default Tag Registry ---

export const DEFAULT_TAG_REGISTRY: TagRegistry = {
  b: { element: "strong", className: "font-semibold" },
  i: { element: "em", className: "italic" },
  u: { element: "span", className: "underline underline-offset-2" },
  ac: { element: "span", className: "text-accent font-medium" },
  hi: { element: "span", className: "text-text-primary font-medium" },
  dim: { element: "span", className: "text-text-tertiary" },
  em: { element: "em", className: "text-accent italic" },
  dt: { element: "span", className: "discovery-text italic font-medium" },
  sm: { element: "small", className: "text-xs" },
  code: {
    element: "code",
    className: "font-mono text-accent bg-layer-active px-1 py-0.5 rounded text-[0.9em]",
  },

  // Parametric Tag: [op=0.6]...[/op]
  op: {
    element: "span",
    render: (node, children, key) => {
      const raw = node.param ? Number.parseFloat(node.param) : 1;
      const opacity = Number.isFinite(raw) ? Math.min(1, Math.max(0, raw)) : 1;
      return (
        <span key={key} style={{ opacity }}>
          {children}
        </span>
      );
    },
  },

  // Parametric Tag: [c=text-sm tracking-wide]...[/c]
  c: {
    element: "span",
    render: (node, children, key) => (
      <span key={key} className={node.param || ""}>
        {children}
      </span>
    ),
  },
};

// --- Parser (registry-aware) ---

export function parseStyledText(text: string, registry: TagRegistry = DEFAULT_TAG_REGISTRY): ASTNode[] {
  if (!text) return [];

  const stack: { node: ElementNode }[] = [{ node: { type: "root", children: [] } }];

  // [tag], [/tag], [tag=value]
  const regex = /\[(\/)?([a-zA-Z0-9_-]+)(?:=([^\]]+))?\]/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const textBefore = text.slice(lastIndex, match.index);
    if (textBefore) stack[stack.length - 1].node.children.push(textBefore);

    const isClosing = !!match[1];
    const tagName = match[2].toLowerCase();
    const param = match[3];

    // Unknown tag => keep literal token as text (prevents breaking things like "[1]")
    const isKnown = tagName === "root" || !!registry[tagName];
    if (!isKnown) {
      stack[stack.length - 1].node.children.push(match[0]);
      lastIndex = regex.lastIndex;
      continue;
    }

    if (isClosing) {
      if (stack.length > 1 && stack[stack.length - 1].node.type === tagName) {
        const completedNode = stack.pop()!.node;
        stack[stack.length - 1].node.children.push(completedNode);
      } else {
        // Unmatched closing tag => literal
        stack[stack.length - 1].node.children.push(match[0]);
      }
    } else {
      stack.push({ node: { type: tagName, param, children: [] } });
    }

    lastIndex = regex.lastIndex;
  }

  const textAfter = text.slice(lastIndex);
  if (textAfter) stack[stack.length - 1].node.children.push(textAfter);

  // Close any unclosed tags (keeps content)
  while (stack.length > 1) {
    const topNode = stack.pop()!.node;
    stack[stack.length - 1].node.children.push(topNode);
  }

  return stack[0].node.children;
}

// --- AST -> Plain text (strips recognized tags, preserves their children) ---

export function astToPlainText(nodes: ASTNode[]): string {
  let out = "";
  for (const node of nodes) {
    if (typeof node === "string") out += node;
    else out += astToPlainText(node.children);
  }
  return out;
}

// --- Renderer Engine (registry-aware) ---

function renderNodes(
  nodes: ASTNode[],
  registry: TagRegistry,
  path: string
): React.ReactNode[] {
  return nodes.map((node, index) => renderNode(node, registry, `${path}.${index}`));
}

function renderNode(node: ASTNode, registry: TagRegistry, key: string): React.ReactNode {
  if (typeof node === "string") return node;

  const tagDef = registry[node.type];
  const children = renderNodes(node.children, registry, key);

  if (!tagDef) {
    // Should be rare because parser only creates nodes for known tags,
    // but this makes it resilient to future changes.
    return <Fragment key={key}>{children}</Fragment>;
  }

  if (tagDef.render) return tagDef.render(node, children, key);

  const Element = tagDef.element as React.ElementType;
  return (
    <Element key={key} className={tagDef.className}>
      {children}
    </Element>
  );
}

// --- Component ---

export interface StyledTextProps {
  /** Raw string containing markup, e.g. "My [b]bold[/b] text" */
  text: string;

  /**
   * Rendering mode:
   * - "rich": render markup (default)
   * - "plain": strip known tags, keep inner text
   * - "raw": show original string as-is (tags visible)
   */
  mode?: StyledTextMode;

  /** Optional base class applied to the wrapper. */
  className?: string;

  /** Wrapper element if className is provided (or if you explicitly set `as`). */
  as?: React.ElementType;

  /** Custom/extended registry for tags (prefer memoizing this object in the parent). */
  registry?: TagRegistry;
}

export function StyledText({
  text,
  mode = "rich",
  className,
  as: Wrapper = "span",
  registry = DEFAULT_TAG_REGISTRY,
}: StyledTextProps) {
  // Fast path: if mode is raw, never parse.
  if (mode === "raw") {
    return className ? <Wrapper className={className}>{text}</Wrapper> : <>{text}</>;
  }

  // Minor fast path: if there's no '[' at all, parsing cannot help.
  const hasPotentialMarkup = typeof text === "string" && text.includes("[");
  if (!hasPotentialMarkup) {
    return className ? <Wrapper className={className}>{text}</Wrapper> : <>{text}</>;
  }

  const ast = useMemo(() => parseStyledText(text, registry), [text, registry]);

  if (mode === "plain") {
    const plain = useMemo(() => astToPlainText(ast), [ast]);
    return className ? <Wrapper className={className}>{plain}</Wrapper> : <>{plain}</>;
  }

  // mode === "rich"
  const rendered = useMemo(() => renderNodes(ast, registry, "root"), [ast, registry]);

  if (className || Wrapper !== "span") {
    return <Wrapper className={className}>{rendered}</Wrapper>;
  }
  return <>{rendered}</>;
}