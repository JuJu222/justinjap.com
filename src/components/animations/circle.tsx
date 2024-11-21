import { motion } from 'framer-motion';
import React from 'react';

function Circle({ delay, repeatDelay, animate = true }: { delay: number, repeatDelay: number, animate?: boolean }) {
  return (
    <div className='size-6 border border-gray-100 rounded-full relative'>
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
                duration: 1,
                times: [0, 0.2, 0.6, 1],
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 2,
                delay: delay,
              }
            : {}
        }
      ></motion.div>
    </div>
  );
}

export default Circle;