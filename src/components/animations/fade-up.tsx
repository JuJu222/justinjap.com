'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  enableInView?: boolean;
}

export default function FadeUp({ children, delay = 0, className, enableInView = false }: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={enableInView ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }) : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0, 0, 0, 1] // Cubic bezier curve for ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
