'use client';

import { FileUser } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import Circle from '@/components/animations/circle';
import LinkedinIcon from '@/public/icons/linkedin.svg';
import GithubIcon from '@/public/icons/github.svg';

function hero() {
  return (
    <div className='h-dvh flex flex-col items-center justify-center'>
      <div className='min-h-[160px] w-full mt-6' />
      <div className='flex items-center gap-8 md:gap-20 justify-center flex-col md:flex-row'>
        <div className='flex flex-col gap-2'>
          <FadeIn>
            <h1 className='text-3xl md:text-4xl font-bold text-foreground-gradient'>Hello, my name is</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className='text-5xl md:text-6xl font-bold text-primary-gradient'>Justin Jap</h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p>Full Stack Developer @ Unit Network.</p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className='text-base md:text-lg text-gray-500 mt-1'>
              I&apos;m a software engineer who loves to build things that help people.
            </p>
          </FadeIn>
          <FadeIn delay={0.8} className='flex gap-4 md:gap-6 mt-1'>
            <Link
              href='https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/Resume Justin Jap - Eng.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex font-medium items-center text-primary gap-2 p-0 h-fit text-sm hover:bg-transparent border-b-2 pb-1 hover:border-primary border-transparent rounded-none transition [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0'
            >
              <FileUser />
              Resume
            </Link>
            <Link
              href='https://www.linkedin.com/in/justinjap'
              target='_blank'
              rel='noopener noreferrer'
              className='flex font-medium items-center text-primary gap-2 p-0 h-fit text-sm hover:bg-transparent border-b-2 pb-1 hover:border-primary border-transparent rounded-none transition [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
            >
              <Image src={LinkedinIcon} alt='linkedin' width={18} height={18} />
              LinkedIn
            </Link>
            <Link
              href='https://github.com/JuJu222'
              target='_blank'
              rel='noopener noreferrer'
              className='flex font-medium items-center text-primary gap-2 p-0 h-fit text-sm hover:bg-transparent border-b-2 pb-1 hover:border-primary border-transparent rounded-none transition [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
            >
              <Image src={GithubIcon} alt='github' width={20} height={20} />
              GitHub
            </Link>
          </FadeIn>
        </div>
        <FadeIn delay={1} direction='right' className='relative w-full h-60 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg order-first md:order-last'>
          <Image src='/images/hero.jpg' alt='hero' fill className='object-cover object-top' />
        </FadeIn>
      </div>
      <FadeIn delay={1} direction='down' className='grid grid-cols-7 gap-2 mt-6'>
        <Circle delay={0} animate={false} />
        <Circle delay={0.5} />
        <Circle delay={0.25} />
        <Circle delay={0} />
        <Circle delay={0.25} />
        <Circle delay={0.5} />
        <Circle delay={0} animate={false} />
        <Circle delay={0} animate={false} />
        <Circle delay={0.75} />
        <Circle delay={0.5} />
        <Circle delay={0.25} />
        <Circle delay={0.5} />
        <Circle delay={0.75} />
        <Circle delay={0} animate={false} />
        <Circle delay={0} animate={false} />
        <Circle delay={1} />
        <Circle delay={0.75} />
        <Circle delay={0.5} />
        <Circle delay={0.75} />
        <Circle delay={1} />
        <Circle delay={0} animate={false} />
        <Circle delay={0} animate={false} />
        <Circle delay={1.25} />
        <Circle delay={1} />
        <Circle delay={0.75} />
        <Circle delay={1} />
        <Circle delay={1.25} />
        <Circle delay={0} animate={false} />
        <Circle delay={0} animate={false} />
        <Circle delay={1.5} />
        <Circle delay={1.25} />
        <Circle delay={1} />
        <Circle delay={1.25} />
        <Circle delay={1.5} />
        <Circle delay={0} animate={false} />
        <Circle delay={0} animate={false} />
        <Circle delay={1.75} />
        <Circle delay={1.5} />
        <Circle delay={1.25} />
        <Circle delay={1.5} />
        <Circle delay={1.75} />
        <Circle delay={0} animate={false} />
      </FadeIn>
    </div>
  );
}

export default hero;