import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/reveal';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/constants';

function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal as='li' delay={(index % 3) * 0.08} className='h-full'>
      <Link
        href={`/projects/${project.id}`}
        className='panel group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-foreground/15'
      >
        <div className='relative aspect-[16/10] overflow-hidden border-b border-border'>
          <Image
            src={project.mainImage}
            alt={`${project.title} screenshot`}
            fill
            sizes='(min-width: 1024px) 368px, (min-width: 768px) 50vw, 100vw'
            className='object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]'
          />
        </div>
        <div className='flex flex-1 flex-col p-6'>
          <p className='text-[17px] font-medium tracking-[-0.01em]'>{project.title}</p>
          <p className='mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground'>{project.description}</p>
          <div className='mt-5 flex flex-wrap gap-1.5'>
            {project.techStack.map((tech) => (
              <Badge key={tech.name} variant='outline'>
                {tech.name}
              </Badge>
            ))}
          </div>
          <p className='mt-auto inline-flex items-center gap-1 pt-6 text-[13px] text-muted-foreground transition-colors group-hover:text-foreground'>
            Read more
            <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

export default ProjectCard;
