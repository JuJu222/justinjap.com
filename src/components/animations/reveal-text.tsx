'use client';

import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { MotionConfig, motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;
const hidden = { opacity: 0, y: 12, filter: 'blur(8px)' };
const shown = { opacity: 1, y: 0, filter: 'blur(0px)' };

type Layout = {
  width: number;
  height: number;
  words: { line: number; x: number; y: number }[];
};

// Linear-style text reveal: words are grouped into the lines the browser
// actually wrapped them onto, and each line rises in a beat after the last.
export default function RevealText({
  text,
  as: Tag = 'p',
  gradient = false,
  delay = 0,
  stagger = 0.1,
  onMount = false,
  className,
}: {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  // Apply `text-gradient` across the whole block. Each word gets a slice of
  // one shared gradient, because background-clip: text on the parent doesn't
  // paint children that are being transformed.
  gradient?: boolean;
  delay?: number;
  // Seconds between lines.
  stagger?: number;
  // Animate on page load instead of when scrolled into view (for heroes).
  onMount?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement & HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const [layout, setLayout] = useState<Layout | null>(null);
  const words = text.split(' ');

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      let line = -1;
      let lineTop = -Infinity;
      const spans = Array.from(el.querySelectorAll<HTMLElement>('[data-word]'));
      setLayout({
        width: el.clientWidth,
        // Reach the bottom of the lowest word, descender padding included, so
        // the gradient doesn't tile and paint a bright strip under descenders.
        height: Math.max(el.clientHeight, ...spans.map((s) => s.offsetTop + s.offsetHeight)),
        words: spans.map((s) => {
          if (s.offsetTop > lineTop + 2) {
            line++;
            lineTop = s.offsetTop;
          }
          return { line, x: s.offsetLeft, y: s.offsetTop };
        }),
      });
    };
    measure();
    // Re-measure on resize so the gradient slices stay lined up.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  const play = Boolean(layout) && (onMount || inView);

  return (
    <MotionConfig reducedMotion='user'>
      <Tag ref={ref} className={cn('relative', className)}>
        {words.map((word, i) => {
          const pos = layout?.words[i];
          return (
            <Fragment key={i}>
              {i > 0 && ' '}
              <motion.span
                data-word
                className={cn(
                  'inline-block',
                  // Extra room below so descenders aren't clipped by the
                  // tight title line-height when the gradient is clipped to text.
                  gradient && 'text-gradient -mb-[0.15em] pb-[0.15em]'
                )}
                style={
                  gradient && layout && pos
                    ? {
                        backgroundSize: `${layout.width}px ${layout.height}px`,
                        backgroundPosition: `${-pos.x}px ${-pos.y}px`,
                      }
                    : undefined
                }
                initial={hidden}
                animate={play ? shown : hidden}
                transition={{
                  duration: 0.9,
                  ease,
                  delay: delay + (pos?.line ?? 0) * stagger,
                }}
              >
                {word}
              </motion.span>
            </Fragment>
          );
        })}
      </Tag>
    </MotionConfig>
  );
}
