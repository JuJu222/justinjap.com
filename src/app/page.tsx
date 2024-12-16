import FadeUp from '@/components/animations/fade-in';
import Footer from './_components/footer';
import Hero from './_components/hero';
import Timeline from './_components/timeline';
import FeaturedProjects from './_components/featured-projects';
import Awards from './_components/awards';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-8'>
      <Hero />
      <FadeUp delay={0.3} className='w-full max-w-6xl' enableInView>
        <h2 className='text-4xl font-bold text-primary-gradient'>About Me</h2>
        <div className='flex gap-8 mt-6'>
          <div className='w-1/3'>
            <div className='relative aspect-square rounded-2xl overflow-hidden'>
              <Image src='/images/profile.jpg' alt='Profile picture' fill className='object-cover' />
            </div>
          </div>
          <div className='w-2/3 space-y-4'>
            <p className='text-gray-500 leading-relaxed'>
              Hi there! I&apos;m a passionate software developer with a love for creating elegant solutions to complex
              problems. My journey in tech began during my high school years when I first discovered the magic of
              programming.
            </p>
            <p className='text-gray-500 leading-relaxed'>
              After completing my Computer Science degree, I&apos;ve had the opportunity to work on various exciting
              projects, from web applications to mobile apps. I specialize in full-stack development, with particular
              expertise in React, Node.js, and cloud technologies.
            </p>
            <p className='text-gray-500 leading-relaxed'>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring. I believe in continuous
              learning and pushing the boundaries of what&apos;s possible with technology.
            </p>
          </div>
        </div>
      </FadeUp>
      <Timeline />
      <FeaturedProjects />
      <Awards />
      <Footer />
    </div>
  );
}
