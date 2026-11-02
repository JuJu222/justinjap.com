import type { Metadata } from 'next';
import { experiences } from '@/lib/experiences';
import Reveal from '@/components/animations/reveal';
import PageHero from '@/components/page-hero';
import { cn } from '@/lib/utils';
import ExperienceCard from '../_components/experience-card';

export const metadata: Metadata = {
  title: 'Experience | justinjap.com',
  description: 'Every role and story that shaped my journey as a software engineer.',
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow='Experience'
        title='My journey so far.'
        description='The teams and ventures where I’ve built, managed, and shipped software. Each stop sharpened my craft and taught me how to take ideas from vision to live product.'
      />
      <section className='border-t border-border bg-surface/40'>
        <ol className='mx-auto max-w-6xl space-y-6 px-4 py-20 sm:px-6 sm:py-28'>
          {experiences.map((experience) => {
            const current = experience.dateRange.includes('Present');
            return (
              // A rail down the left with a dot per role; the current role's dot pulses.
              <Reveal
                as='li'
                key={experience.id}
                className='relative pl-8 before:absolute before:top-3 before:-bottom-6 before:left-[5px] before:w-px before:bg-border last:before:hidden sm:pl-10'
              >
                <span aria-hidden='true' className='absolute top-2 left-0 flex size-[11px]'>
                  {current && <span className='absolute inline-flex size-full animate-ping rounded-full bg-brand/60' />}
                  <span
                    className={cn(
                      'relative size-[11px] rounded-full',
                      current ? 'bg-brand-bright' : 'border border-border bg-surface-2'
                    )}
                  />
                </span>
                <ExperienceCard experience={experience} />
              </Reveal>
            );
          })}
        </ol>
      </section>
    </>
  );
}
