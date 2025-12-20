import type { Metadata } from 'next';
import { experiences } from '@/lib/experiences';
import FadeIn from '@/components/animations/fade-in';
import ExperienceCard from '../_components/experience-card';

export const metadata: Metadata = {
  title: 'Experience | justinjap.com',
  description: 'Every role and story that shaped my journey as a software engineer.',
};

export default function ExperiencesPage() {
  return (
    <div className='flex flex-col items-center min-h-screen py-28 md:py-32 px-6 md:px-8'>
      <FadeIn delay={0.3} className='w-full max-w-6xl' enableInView>
        <div className='space-y-10'>
          <div className='space-y-3'>
            <p className='text-xs uppercase tracking-[0.35em] text-muted-foreground'>Experience</p>
            <h1 className='text-3xl md:text-4xl font-bold text-primary-gradient'>My Journey So Far</h1>
            <p className='text-muted-foreground text-sm md:text-base max-w-3xl'>
              These are the teams and ventures where I&apos;ve built, managed, and shipped software at
              scale. Each stop sharpened my craft and taught me how to shepherd ideas from vision to live product.
            </p>
          </div>

          <div className='space-y-8'>
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
