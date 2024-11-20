import React from 'react';
import ProjectCard from './project-card';
import FadeIn from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

function FeaturedProjects() {
  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-20' enableInView>
      <h2 className='text-4xl font-bold text-primary'>Featured Projects</h2>
      <p className='text-gray-500 text-base'>Some of my projects that I&apos;m proud of.</p>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className='flex justify-center mt-8'>
        <Link href='/projects'>
          <Button variant='outline' className='text-md [&_svg]:size-5 py-6'>
            <ExternalLink />
            View All Projects
          </Button>
        </Link>
      </div>
    </FadeIn>
  );
}

export default FeaturedProjects;
