import { motion } from 'framer-motion';
import React from 'react';

function Circle({ delay, animate = true }: { delay: number, animate?: boolean }) {
  return (
    <div className='size-5 rounded-full relative'>
      <motion.div
        className='absolute w-full h-full rounded-full'
        initial={animate ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        animate={
          animate
            ? {
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                boxShadow: [
                  '0 0 0 1px rgba(0,0,0,0.1)',
                  '0 2px 6px rgba(0,0,0,0.1)',
                  '0 2px 6px rgba(0,0,0,0.1)',
                  '0 0 0 1px rgba(0,0,0,0.1)',
                ],
              }
            : {}
        }
        transition={
          animate
            ? {
                duration: 0.5,
                times: [0, 0.2, 0.6, 1],
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1.5,
                delay: delay,
              }
            : {}
        }
      ></motion.div>
    </div>
  );
}

export default Circle;