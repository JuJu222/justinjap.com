import React from 'react';
import FadeIn from '@/components/animations/fade-in';
import Image from 'next/image';

function AboutMe() {
  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-24 md:mt-36' enableInView>
      <div className='flex flex-col md:flex-row gap-8 lg:gap-16'>
        <div className='w-full md:w-1/3'>
          <div className='relative md:aspect-square rounded-2xl overflow-hidden h-60 md:h-auto'>
            <Image
              src='https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/me.jpg'
              alt='Profile picture'
              fill
              className='object-cover'
            />
          </div>
        </div>
        <div className='w-full md:w-2/3 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-gradient'>About Me</h2>
          <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
            Hi there! I&apos;m a passionate software developer with a love for creating solutions to complex
            problems. Currently, I work as a Full Stack Developer at Unit Network. I graduated in 2024 with a Bachelor of Science in Computer Science (Informatics), achieving a GPA
            of 3.98 and being awarded Best Academic Student for attaining the highest GPA in my batch.
          </p>
          <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
            I have a deep love for developing applications, especially web apps. While I have also delved into mobile
            app development through the Apple Developer Academy and explored AI, my main focus is on full-stack
            development. I enjoy building projects that can make a tangible difference in people&apos;s lives.
          </p>
          <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
            When I&apos;m not coding, you can find me exploring new technologies. I&apos;m a firm believer in continuous learning and always excited to discover new ways to solve problems by technology.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default AboutMe;
