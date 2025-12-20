"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { GlowingEffect } from '@/components/glowing-effect';
import { Project } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className='relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3'>
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <Card className='w-full hover:shadow-lg dark:hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)] dark:drop-shadow-[0_4px_16px_rgba(255,255,255,0.05)] transition-shadow duration-300 cursor-pointer border-0 relative h-full overflow-hidden rounded-xl'>
          <CardHeader className='p-0 pb-6'>
            <div className='relative w-full h-52 rounded-t-xl overflow-hidden border-b-8 border-primary'>
              <Image src={project.mainImage} alt='hero' fill className='object-cover object-top' />
            </div>
          </CardHeader>
          <CardContent className='space-y-3 p-6'>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className='line-clamp-3'>{project.description}</CardDescription>
            <div className='flex items-center gap-2'>
              {project.techStack.map((tech) => (
                <Tooltip key={tech.name} delayDuration={0}>
                  <TooltipTrigger>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={tech.size}
                      height={tech.size}
                      className='dark:brightness-150'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}

export default ProjectCard;
