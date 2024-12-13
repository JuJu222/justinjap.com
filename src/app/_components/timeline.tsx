'use client';

import FadeIn from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    if (!ref.current) return;
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-40' enableInView>
      <h2 className='text-4xl font-bold text-primary-gradient'>My Timeline</h2>
      <p className='text-gray-500 text-base'>My professional journey in software development.</p>
      <div className='relative container mx-auto mt-8 overflow-x-auto pt-4 no-scrollbar scroll-smooth' ref={ref}>
        <div className='relative flex justify-between'>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10 animate-ping2s'></div>
            <div className='w-4 h-4 bg-primary rounded-full z-10 absolute'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-1/2 left-1/2'></div>
            <div className='w-64 text-center'>
              <p className='font-semibold'>Present</p>
              <p>Continuing the journey...</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-64 text-center'>
              <p className='font-semibold'>2024</p>
              <p>Building side projects</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-64 text-center'>
              <p className='font-semibold'>2023</p>
              <p>Frontend Developer at Unit Network</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-64 text-center'>
              <p className='font-semibold'>2023</p>
              <p>Software Engineer at Shopee</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-64 text-center'>
              <p className='font-semibold'>2022</p>
              <p>Graduated from University</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-64 text-center'>
              <p className='font-semibold'>2022</p>
              <p>Founded Walletize</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-1/2 right-1/2'></div>
            <div className='w-64 text-center'>
              <p className='font-semibold'>2021</p>
              <p>Started my coding journey</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-40 mt-4'>
        <Button onClick={() => scroll(-400)} variant='ghost' size='icon' className='h-20 w-20 [&_svg]:size-20'>
          <ChevronLeft className='text-primary' />
        </Button>
        <Button onClick={() => scroll(400)} variant='ghost' size='icon' className='h-20 w-20 [&_svg]:size-20'>
          <ChevronRight className='text-primary' />
        </Button>
      </div>
    </FadeIn>
  );
}

export default Timeline;