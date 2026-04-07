export const STYLE_TOKENS = {
  a: { name: 'accent', classes: 'text-accent font-medium' },
  b: { name: 'bold', classes: 'font-semibold' },
  i: { name: 'italic', classes: 'italic' },
  u: { name: 'underline', classes: 'underline decoration-accent/40 underline-offset-2' },
  m: { name: 'muted', classes: 'text-text-tertiary' },
  c: { name: 'code', classes: 'font-mono text-[0.85em] bg-layer-active px-1 py-0.5 rounded border border-stroke' },
  s: { name: 'strikethrough', classes: 'line-through text-text-tertiary' },
} as const;

export type StyleToken = keyof typeof STYLE_TOKENS;

export interface TextSegment {
  type: 'text' | 'styled';
  content: string;
  tokens?: StyleToken[];
}

const TOKEN_REGEX = /\{(\w+)\}([\s\S]*?)\{\/\1\}/g;

export function parseRichText(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const regex = new RegExp(TOKEN_REGEX.source, 'g');

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: text.slice(lastIndex, match.index),
      });
    }

    const rawToken = match[1];
    const content = match[2];
    const tokens = rawToken.split('+').filter((t): t is StyleToken => t in STYLE_TOKENS);

    if (tokens.length > 0) {
      segments.push({
        type: 'styled',
        content,
        tokens,
      });
    } else {
      segments.push({
        type: 'text',
        content: match[0],
      });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({
      type: 'text',
      content: text.slice(lastIndex),
    });
  }

  return segments;
}

export function getClassesForTokens(tokens: StyleToken[]): string {
  return tokens
    .map((token) => STYLE_TOKENS[token].classes)
    .join(' ');
}
