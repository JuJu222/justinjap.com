'use client';

import FadeIn from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

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
        <div className='relative flex justify-between'>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10 animate-ping2s'></div>
            <div className='w-4 h-4 bg-primary rounded-full z-10 absolute'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-1/2 left-1/2'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Present</p>
              <p className='mt-1 text-sm md:text-base'>Full Stack Developer</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Unit Network</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Oct 2024</p>
              <p className='text-muted-foreground text-xs md:text-sm'>(end position - 3 mo)</p>
              <p className='mt-1 text-sm md:text-base'>Frontend Developer</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Unit Network</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Aug 2024</p>
              <p className='text-muted-foreground text-xs md:text-sm'>(start position)</p>
              <p className='mt-1 text-sm md:text-base'>Frontend Developer</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Unit Network</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Jul 2024</p>
              <p className='mt-1 text-sm md:text-base'>
                Graduated with a BSc CS <br />
                (GPA 3.98)
              </p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Ciputra University</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Dec 2023</p>
              <p className='text-muted-foreground text-xs md:text-sm'>(end position - 10 mo)</p>
              <p className='mt-1 text-sm md:text-base'>iOS Developer Intern</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Apple Developer Academy</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Nov 2023</p>
              <p className='mt-1 text-sm md:text-base'>
                1st Place Mobile App <br />
                Competition
              </p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>LO Kreatif 2023</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>May 2023</p>
              <p className='mt-1 text-sm md:text-base'>
                Swift Student Challenge <br />
                Winner
              </p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Apple WWDC 2023</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Mar 2023</p>
              <p className='text-muted-foreground text-xs md:text-sm'>(start position)</p>
              <p className='mt-1 text-sm md:text-base'>iOS Developer Intern</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Apple Developer Academy</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Mar 2022</p>
              <p className='text-muted-foreground text-xs md:text-sm'>(end position - 5 mo)</p>
              <p className='mt-1 text-sm md:text-base'>Freelance Full Stack Dev</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Citra Berkat School</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Oct 2021</p>
              <p className='text-muted-foreground text-xs md:text-sm'>(start position)</p>
              <p className='mt-1 text-sm md:text-base'>Freelance Full Stack Dev</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Citra Berkat School</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>Aug 2020</p>
              <p className='mt-1 text-sm md:text-base'>Started CS Degree</p>
              <p className='text-muted-foreground text-xs md:text-sm mt-1'>Ciputra University</p>
            </div>
          </div>
          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
            <div className='absolute top-[7px] h-0.5 bg-gray-200 w-1/2 right-1/2'></div>
            <div className='w-48 md:w-64 text-center'>
              <p className='font-semibold mt-2 text-sm md:text-base'>May 2020</p>
              <p className='mt-1 text-sm md:text-base'>
                Created my first <br />
                &quot;Hello World&quot;
              </p>
            </div>
          </div>
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
