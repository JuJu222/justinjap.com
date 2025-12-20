'use client';

import FadeIn from '@/components/animations/fade-in';
import { experiences } from '@/lib/experiences';
import ExperienceCard from './experience-card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

function CurrentExperience() {
  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-24 md:mt-36' enableInView>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-gradient'>Where I’m at now</h2>
          <p className='text-muted-foreground text-sm md:text-base mt-2'>
            What I&apos;m usually busy with.
          </p>
        </div>
        <div>
          <Button
          variant='outline'
          className='text-sm md:text-md [&_svg]:size-4 md:[&_svg]:size-5 py-4 md:py-6'>
            <ExternalLink />
            View All Projects
          </Button>
        </div>
      </div>
      <div className='mt-4'>
        <ExperienceCard experience={experiences[0]} index={0} />
      </div>
    </FadeIn>
  );
}

export default CurrentExperience;
