'use client';

import { FileUser } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import Circle from '@/components/animations/circle';

function hero() {
  return (
    <div className='h-dvh flex flex-col items-center justify-center'>
      <div className='h-[184px] w-full mt-6' />
      <div className='flex items-center gap-20 justify-center'>
        <div className='flex flex-col gap-2'>
          <FadeIn>
            <h1 className='text-4xl font-bold'>Hello, my name is</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className='text-6xl font-bold text-primary'>Justin Jap</h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p>Founder of Walletize, Front end developer at Unit Network</p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className='text-lg text-gray-500'>
              I&apos;m a software engineer who loves to build things that help people.
            </p>
          </FadeIn>
          <FadeIn delay={0.8} className='flex gap-4'>
            <Link
              href='/resume'
              className='flex font-medium items-center gap-2 p-0 h-fit text-sm hover:bg-transparent border-b-2 pb-1 hover:border-primary border-transparent rounded-none transition [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
            >
              <FileUser />
              Resume
            </Link>
            <Link
              href='/contact'
              className='flex font-medium items-center gap-2 p-0 h-fit text-sm hover:bg-transparent border-b-2 pb-1 hover:border-primary border-transparent rounded-none transition [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
            >
              <FileUser />
              Resume
            </Link>
          </FadeIn>
        </div>
        <FadeIn delay={1} direction='right' className='relative w-96 h-96 rounded-xl overflow-hidden shadow-lg'>
          <Image src='/images/hero.jpg' alt='hero' fill className='object-cover' />
        </FadeIn>
      </div>
      <FadeIn delay={1} direction='down' className='grid grid-cols-7 gap-2 mt-6'>
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={1} repeatDelay={5} />
        <Circle delay={0.5} repeatDelay={5} />
        <Circle delay={0} repeatDelay={5} />
        <Circle delay={0.5} repeatDelay={5} />
        <Circle delay={1} repeatDelay={5} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={1.5} repeatDelay={5} />
        <Circle delay={1} repeatDelay={5} />
        <Circle delay={0.5} repeatDelay={5} />
        <Circle delay={1} repeatDelay={5} />
        <Circle delay={1.5} repeatDelay={5} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={2} repeatDelay={5} />
        <Circle delay={1.5} repeatDelay={5} />
        <Circle delay={1} repeatDelay={5} />
        <Circle delay={1.5} repeatDelay={5} />
        <Circle delay={2} repeatDelay={5} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={2.5} repeatDelay={5} />
        <Circle delay={2} repeatDelay={5} />
        <Circle delay={1.5} repeatDelay={5} />
        <Circle delay={2} repeatDelay={5} />
        <Circle delay={2.5} repeatDelay={5} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={3} repeatDelay={5} />
        <Circle delay={2.5} repeatDelay={5} />
        <Circle delay={2} repeatDelay={5} />
        <Circle delay={2.5} repeatDelay={5} />
        <Circle delay={3} repeatDelay={5} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={0} repeatDelay={0} animate={false} />
        <Circle delay={3.5} repeatDelay={5} />
        <Circle delay={3} repeatDelay={5} />
        <Circle delay={2.5} repeatDelay={5} />
        <Circle delay={3} repeatDelay={5} />
        <Circle delay={3.5} repeatDelay={5} />
        <Circle delay={0} repeatDelay={0} animate={false} />
      </FadeIn>
    </div>
  );
}

export default hero;