'use client';

import { MotionConfig, motion } from 'motion/react';

// Linear-style reveal: a short rise, fade and un-blur on a long ease-out.
const ease = [0.22, 1, 0.36, 1] as const;

const elements = {
  div: motion.div,
  li: motion.li,
  p: motion.p,
};

export default function Reveal({
  as = 'div',
  delay = 0,
  y = 16,
  onMount = false,
  className,
  children,
}: {
  as?: keyof typeof elements;
  delay?: number;
  // Distance to rise from, in px. Larger pieces (screenshots) read better with more.
  y?: number;
  // Animate on page load instead of when scrolled into view (for heroes).
  onMount?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const Element = elements[as];
  const shown = { opacity: 1, y: 0, filter: 'blur(0px)' };

  return (
    // "user" skips the rise for people who prefer reduced motion; the fade stays.
    <MotionConfig reducedMotion='user'>
      <Element
        className={className}
        initial={{ opacity: 0, y, filter: 'blur(8px)' }}
        {...(onMount
          ? { animate: shown }
          : {
              whileInView: shown,
              viewport: { once: true, margin: '0px 0px -10% 0px' },
            })}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </Element>
    </MotionConfig>
  );
}
