import React from 'react';
import FadeIn from '@/components/animations/fade-in';
import Image from 'next/image';
import { aboutMeData } from '@/lib/data';

function AboutMe() {
  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-24 md:mt-36' enableInView>
      <div className='flex flex-col md:flex-row gap-8 lg:gap-16'>
        <div className='w-full md:w-1/3'>
          <div className='relative md:aspect-square rounded-2xl overflow-hidden h-60 md:h-auto'>
            <Image src={aboutMeData.image} alt='Profile picture' fill className='object-cover' />
          </div>
        </div>
        <div className='w-full md:w-2/3 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-gradient'>About Me</h2>
          {aboutMeData.paragraphs.map((paragraph, index) => (
            <p key={index} className='text-sm md:text-base text-gray-500 leading-relaxed'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default AboutMe;
