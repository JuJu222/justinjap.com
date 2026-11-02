import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/animations/reveal';
import SectionHeading from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Project, getProjectSummary, projects } from '@/lib/constants';
import ProjectCard from './project-card';

// One showcase project up top, then a row of cards.
const featuredProjectId = '6';
const otherProjectIds = ['1', '2', '3'];

function FeaturedProject({ project }: { project: Project }) {
  const host = project.url && new URL(project.url).host.replace(/^www\./, '');

  return (
    <Reveal className='mt-14'>
      <article className='panel relative grid items-center gap-10 overflow-hidden rounded-2xl p-6 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
          style={{ background: 'radial-gradient(50% 60% at 75% 50%, var(--glow), transparent 70%)' }}
        />

        <div className='relative'>
          <div className='flex items-center gap-2'>
            <Badge>Featured</Badge>
            <span className='text-[13px] text-muted-foreground'>
              {project.type === 'work' ? 'Work project' : 'Personal project'}
            </span>
          </div>
          <h3 className='title-2 text-gradient mt-6 pb-1'>{project.title}</h3>
          <p className='mt-4 line-clamp-4 text-[15px] leading-relaxed text-pretty text-muted-foreground'>
            {getProjectSummary(project)}
          </p>
          <div className='mt-6 flex flex-wrap gap-1.5'>
            {project.techStack.map((tech) => (
              <Badge key={tech.name} variant='outline'>
                {tech.name}
              </Badge>
            ))}
          </div>
          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <Link href={`/projects/${project.id}`} className={buttonVariants({ size: 'lg' })}>
              Read more
              <ArrowRight />
            </Link>
            {project.url && (
              <Link
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                Visit {host}
                <ArrowUpRight className='text-muted-foreground' />
              </Link>
            )}
          </div>
        </div>

        {/* Tilted on large screens, flattening on hover. */}
        <Link href={`/projects/${project.id}`} className='relative block' aria-label={`Read more about ${project.title}`}>
          <Image
            src={project.mainImage}
            alt={`${project.title} screenshot`}
            width={1867}
            height={1035}
            sizes='(min-width: 1152px) 600px, (min-width: 1024px) 55vw, 100vw'
            className='h-auto w-full rounded-xl border border-border shadow-[0_40px_120px_-30px_rgb(0_0_0/0.6)] transition-transform duration-700 lg:[transform:perspective(1600px)_rotateY(-8deg)_rotateX(4deg)] lg:hover:[transform:perspective(1600px)]'
          />
        </Link>
      </article>
    </Reveal>
  );
}

function FeaturedProjects() {
  const featuredProject = projects.find((project) => project.id === featuredProjectId);
  const otherProjects = otherProjectIds
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
        {featuredProject && <FeaturedProject project={featuredProject} />}
        <ul className='mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {otherProjects.map((project, i) => (
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
