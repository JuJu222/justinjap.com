import FadeIn from '@/components/animations/fade-in';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GlowingEffect } from '@/components/glowing-effect';
import { ExperienceEntry } from '@/lib/experiences';
import React from 'react';

export default function ExperienceCard({ experience, index }: { experience: ExperienceEntry; index: number }) {
  return (
    <FadeIn key={experience.id} delay={0.1 * (index % 3)} className='w-full' enableInView>
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
        <Card className='border border-border/60 bg-background/70 shadow-sm transition hover:shadow-lg dark:hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)] dark:drop-shadow-[0_4px_16px_rgba(255,255,255,0.05)] relative h-full overflow-hidden rounded-xl'>
          <CardHeader className='p-6 pb-2'>
            <div className='flex items-center justify-between text-sm text-muted-foreground'>
              <span>{experience.dateRange}</span>
              <span>{experience.duration}</span>
            </div>
            <CardTitle className='mt-3 text-2xl font-bold text-primary-gradient'>{experience.role}</CardTitle>
            <CardDescription className='text-sm text-muted-foreground'>
              {experience.company} · {experience.location}
            </CardDescription>
            <div className='mt-4'>
              <span className='rounded-full border border-primary/30 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-primary'>
                {experience.contract}
              </span>
            </div>
          </CardHeader>
          <CardContent className='space-y-4 pt-2'>
            <p className='text-sm text-muted-foreground'>{experience.summary}</p>
            {experience.overview && <p className='text-sm text-muted-foreground'>{experience.overview}</p>}
            <ul className='list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300'>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {/* {experience.projects && (
              <div className='space-y-2'>
                <p className='text-xs uppercase tracking-[0.35em] text-muted-foreground'>Spotlight</p>
                <div className='grid gap-3 md:grid-cols-2'>
                  {experience.projects.map((project) => (
                    <div key={project.title} className='rounded-2xl border border-border/40 bg-secondary/60 p-3'>
                      <p className='text-sm font-semibold text-foreground'>{project.title}</p>
                      <p className='text-xs text-muted-foreground'>{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
            <div className='flex flex-wrap gap-2'>
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className='rounded-full border border-muted-foreground/50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-muted-foreground'
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  );
}
