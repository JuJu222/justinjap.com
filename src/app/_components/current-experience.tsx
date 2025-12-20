'use client';

import FadeIn from '@/components/animations/fade-in';
import { experiences } from '@/lib/experiences';
import ExperienceCard from './experience-card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

function CurrentExperience() {
  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-24 md:mt-36' enableInView>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-gradient'>Where I’m At</h2>
          <p className='text-muted-foreground text-sm md:text-base mt-2'>
            My current role and what I&apos;m working on.
          </p>
        </div>
        <div>
          <Link href='/experiences'>
            <Button variant='outline' className='text-sm md:text-md [&_svg]:size-4 md:[&_svg]:size-5 py-4 md:py-6'>
              <ExternalLink />
              View All Experiences
            </Button>
          </Link>
        </div>
      </div>
      <div className='mt-4'>
        <ExperienceCard experience={experiences[0]} index={0} />
      </div>
    </FadeIn>
  );
}

export default CurrentExperience;
