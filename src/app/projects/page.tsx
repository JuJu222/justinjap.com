import PageHero from '@/components/page-hero';
import SectionHeading from '@/components/section-heading';
import ProjectCard from '@/app/_components/project-card';
import { projects } from '@/lib/constants';

const groups = [
  {
    eyebrow: 'Personal',
    title: 'Founded and built by me.',
    description: 'Products I started on my own, from the first idea to running them in production.',
    type: 'personal',
  },
  {
    eyebrow: 'Work',
    title: 'Shipped on the job.',
    description: 'Projects I’ve worked on professionally with designers and engineers on the team.',
    type: 'work',
  },
] as const;

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow='Projects'
        title='Things I’ve built.'
        description='A list of my professional works and personal projects.'
      />
      {groups.map((group) => (
        <section key={group.type} className='border-t border-border even:bg-surface/40'>
          <div className='mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28'>
            <SectionHeading eyebrow={group.eyebrow} title={group.title} description={group.description} />
            <ul className='mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {projects
                .filter((project) => project.type === group.type)
                .map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
