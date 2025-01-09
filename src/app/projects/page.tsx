'use client';

import React from 'react';
import ProjectCard from '@/app/_components/project-card';
import FadeIn from '@/components/animations/fade-in';
import { projects } from '@/lib/constants';

export default function ProjectsPage() {
  const workProjects = projects.filter(project => project.type === 'work');
  const personalProjects = projects.filter(project => project.type === 'personal');

  return (
    <div className='flex flex-col items-center min-h-screen py-28 md:py-32 px-6 md:px-8'>
      <FadeIn delay={0.3} className='w-full max-w-6xl' enableInView>
        <div className='space-y-16'>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold text-primary-gradient'>My Projects</h1>
            <p className='text-gray-500 text-sm md:text-base mt-2'>Projects founded and built by me.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
              {personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold text-primary-gradient'>Work Projects</h1>
            <p className='text-gray-500 text-sm md:text-base mt-2'>Projects I&apos;ve worked on professionally.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
              {workProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
