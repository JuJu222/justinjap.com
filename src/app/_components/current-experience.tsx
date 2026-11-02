import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/reveal';
import SectionHeading from '@/components/section-heading';
import { buttonVariants } from '@/components/ui/button';
import { experiences } from '@/lib/experiences';
import ExperienceCard from './experience-card';

function CurrentExperience() {
  return (
    <section className='border-t border-border bg-surface/40'>
      <div className='mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32'>
        <SectionHeading
          eyebrow='Experience'
          title='Where I’m at.'
          description='My current role and what I’m working on day to day.'
        />
        <Reveal className='mt-14'>
          <ExperienceCard experience={experiences[0]} />
        </Reveal>
        <Reveal delay={0.16} className='mt-10 flex justify-center'>
          <Link href='/experiences' className={buttonVariants({ variant: 'outline', size: 'lg' })}>
            View all experience
            <ArrowRight className='text-muted-foreground' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default CurrentExperience;
