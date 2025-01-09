import FadeIn from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from './project-card';

function FeaturedProjects() {
  const featuredProjectIds = ['2', '1', '3'];
  const featuredProjects = featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <FadeIn delay={0.3} className='w-full max-w-6xl mt-12' enableInView>
      <h2 className='text-3xl md:text-4xl font-bold text-primary-gradient'>Featured Projects</h2>
      <p className='text-gray-500 text-sm md:text-base mt-2'>Some of my works that I&apos;m proud of.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {featuredProjects.map((project) => {
          if (!project) return null;
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className='flex justify-center mt-6 md:mt-8'>
        <Link href='/projects'>
          <Button variant='outline' className='text-sm md:text-md [&_svg]:size-4 md:[&_svg]:size-5 py-4 md:py-6'>
            <ExternalLink />
            View All Projects
          </Button>
        </Link>
      </div>
    </FadeIn>
  );
}

export default FeaturedProjects;
