import React, { useMemo, Fragment } from "react";

// --- Types & Interfaces ---

export type TextNode = string;
export type ElementNode = {
  type: string;
  param?: string;
  children: ASTNode[];
};
export type ASTNode = TextNode | ElementNode;

type TagRenderer = {
  element: keyof React.JSX.IntrinsicElements;
  className?: string; // Predefined classes
  render?: (node: ElementNode, children: React.ReactNode, key: React.Key) => React.ReactNode;
};

// --- Tag Registry ---

const TAG_REGISTRY: Record<string, TagRenderer> = {
  b: { element: "strong", className: "font-semibold" },
  i: { element: "em", className: "italic" },
  u: { element: "span", className: "underline underline-offset-2" },
  ac: { element: "span", className: "text-accent font-medium" },
  hi: { element: "span", className: "text-text-primary font-medium" },
  dim: { element: "span", className: "text-text-tertiary" },
  em: { element: "em", className: "text-accent italic" },
  sm: { element: "small", className: "text-xs" },
  code: { element: "code", className: "font-mono text-accent bg-layer-active px-1 py-0.5 rounded text-[0.9em]" },
  
  // Parametric Tag: [op=0.6]...[/op]
  op: {
    element: "span",
    render: (node, children, key) => {
      const opacity = node.param ? parseFloat(node.param) : 1;
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

// --- Parser ---

export function parseStyledText(text: string): ASTNode[] {
  if (!text) return [];

  const stack: { node: ElementNode }[] = [{ node: { type: "root", children: [] } }];
  
  // Match tags like [tag], [/tag], [tag=value]
  // Captures: 1: isClosing, 2: tagName, 3: param (without =)
  const regex = /\[(\/)?([a-zA-Z0-9_-]+)(?:=([^\]]+))?\]/g;
  
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const textBefore = text.slice(lastIndex, match.index);
    if (textBefore) {
      stack[stack.length - 1].node.children.push(textBefore);
    }

    const isClosing = !!match[1];
    const tagName = match[2].toLowerCase();
    const param = match[3];

    // If tag is not recognized, treat it as plain text to avoid messing up legitimate text like "[1]"
    if (!TAG_REGISTRY[tagName] && tagName !== "root") {
      stack[stack.length - 1].node.children.push(match[0]);
      lastIndex = regex.lastIndex;
      continue;
    }

    if (isClosing) {
      // Find matching tag to close
      if (stack.length > 1 && stack[stack.length - 1].node.type === tagName) {
        const completedNode = stack.pop()!.node;
        stack[stack.length - 1].node.children.push(completedNode);
      } else {
        // Unmatched closing tag, treat as plain text
        stack[stack.length - 1].node.children.push(match[0]);
      }
    } else {
      // Open tag
      stack.push({
        node: { type: tagName, param, children: [] },
      });
    }

    lastIndex = regex.lastIndex;
  }

  const textAfter = text.slice(lastIndex);
  if (textAfter) {
    stack[stack.length - 1].node.children.push(textAfter);
  }

  // Close any unclosed tags
  while (stack.length > 1) {
    const topNode = stack.pop()!.node;
    stack[stack.length - 1].node.children.push(topNode);
  }

  return stack[0].node.children;
}

// --- Renderer Engine ---

function renderNode(node: ASTNode, index: number): React.ReactNode {
  if (typeof node === "string") {
    // We use a Fragment to easily map string nodes if needed, but returning string directly works too.
    return node;
  }

  const tagDef = TAG_REGISTRY[node.type];
  const children = node.children.map((child, i) => renderNode(child, i));
  const key = `node-${node.type}-${index}`;

  if (!tagDef) {
    // Fallback if somehow an invalid tag got parsed as a node (shouldn't happen with our check)
    return <Fragment key={key}>{children}</Fragment>;
  }

  if (tagDef.render) {
    return tagDef.render(node, children, key);
  }

  const Element = tagDef.element as React.ElementType;
  return (
    <Element key={key} className={tagDef.className}>
      {children}
    </Element>
  );
}

// --- Component ---

export interface StyledTextProps {
  /** The raw data string containing markup, e.g. "My [b]bold[/b] text" */
  text: string;
  /** Optional base class applied to the root wrapper. If true, wraps in a <span> or provided wrapper. */
  className?: string;
  /** Element type for the wrapper if className is provided. Defaults to inline React.Fragment otherwise. */
  as?: React.ElementType;
  /** Whether to apply the rich text formatting. Defaults to true. */
  enabled?: boolean;
}

export function StyledText({ text, className, as: Wrapper = "span", enabled = true }: StyledTextProps) {
  const hasMarkup = enabled && typeof text === "string" && text.includes("[");

  if (!enabled) {
    return className ? <Wrapper className={className}>{text}</Wrapper> : <>{text}</>;
  }

  // Zero-overhead fast path: if no markup, just return string inside wrapper
  if (!hasMarkup) {
    return className ? <Wrapper className={className}>{text}</Wrapper> : <>{text}</>;
  }

  const parsedTree = useMemo(() => parseStyledText(text), [text]);
  const rendered = parsedTree.map((node, i) => renderNode(node, i));

  if (className || Wrapper !== "span") {
    return <Wrapper className={className}>{rendered}</Wrapper>;
  }

  return <>{rendered}</>;
}
