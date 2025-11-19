'use client';

import FadeIn from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { timelineData } from '@/lib/data';

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    if (!ref.current) return;
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-24 md:mt-36' enableInView>
      <h2 className='text-3xl md:text-4xl font-bold text-primary-gradient'>My Timeline</h2>
      <p className='text-gray-500 text-sm md:text-base mt-2'>My professional journey in software development.</p>
      <div className='relative container mx-auto mt-8 overflow-x-auto pt-4 no-scrollbar scroll-smooth' ref={ref}>
        <div className='relative flex justify-between min-w-max px-4 md:px-0'>
          {timelineData.map((item, index) => (
            <div key={index} className='relative flex flex-col items-center w-48 md:w-64 shrink-0'>
              {/* Dot and Line */}
              <div className='relative flex items-center justify-center w-full h-4 mb-2'>
                {/* Line */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-200 
                    ${index === 0 ? 'w-1/2 left-1/2' : ''} 
                    ${index === timelineData.length - 1 ? 'w-1/2 right-1/2' : ''}
                    ${index > 0 && index < timelineData.length - 1 ? 'w-full' : ''}
                  `}
                />

                {/* Dot */}
                <div className={`w-4 h-4 bg-primary rounded-full z-10 ${item.isPresent ? 'animate-ping2s' : ''}`} />
                {item.isPresent && <div className='w-4 h-4 bg-primary rounded-full z-10 absolute' />}
              </div>

              {/* Content */}
              <div className='text-center'>
                <p className='font-semibold text-sm md:text-base'>{item.date}</p>
                {item.description && <p className='text-muted-foreground text-xs md:text-sm'>{item.description}</p>}
                <p className='mt-1 text-sm md:text-base whitespace-pre-line'>{item.title}</p>
                {item.subtitle && <p className='text-muted-foreground text-xs md:text-sm mt-1'>{item.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center gap-40 mt-4'>
        <Button
          onClick={() => scroll(-400)}
          variant='ghost'
          size='icon'
          className='h-16 w-16 [&_svg]:size-16 md:h-20 md:w-20 md:[&_svg]:size-20'
        >
          <ChevronLeft className='text-primary' />
        </Button>
        <Button
          onClick={() => scroll(400)}
          variant='ghost'
          size='icon'
          className='h-16 w-16 [&_svg]:size-16 md:h-20 md:w-20 md:[&_svg]:size-20'
        >
          <ChevronRight className='text-primary' />
        </Button>
      </div>
    </FadeIn>
  );
}

export default Timeline;
