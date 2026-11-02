import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/reveal';
import SectionHeading from '@/components/section-heading';
import { buttonVariants } from '@/components/ui/button';
import { projects } from '@/lib/constants';
import ProjectCard from './project-card';

const featuredProjectIds = ['1', '2', '3'];

function FeaturedProjects() {
  const featuredProjects = featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project !== undefined);

  return (
    <section className='border-t border-border bg-surface/40'>
      <div className='mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32'>
        <SectionHeading
          eyebrow='Projects'
          title='Things I’ve built and shipped.'
          description='Some of my works that I’m proud of, from personal products to client launches.'
        />
        <ul className='mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </ul>
        <Reveal delay={0.16} className='mt-10 flex justify-center'>
          <Link href='/projects' className={buttonVariants({ variant: 'outline', size: 'lg' })}>
            View all projects
            <ArrowRight className='text-muted-foreground' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FeaturedProjects;
