import type { Metadata } from 'next';
import { experiences } from '@/lib/experiences';
import FadeIn from '@/components/animations/fade-in';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Experience | justinjap.com',
  description: 'Every role and story that shaped my journey as a software engineer.',
};

export default function ExperiencesPage() {
  return (
    <div className='flex flex-col items-center min-h-screen py-28 md:py-32 px-6 md:px-8'>
      <FadeIn delay={0.3} className='w-full max-w-6xl' enableInView>
        <div className='space-y-10'>
          <div className='space-y-3'>
            <p className='text-xs uppercase tracking-[0.35em] text-muted-foreground'>Experience</p>
            <h1 className='text-3xl md:text-4xl font-bold text-primary-gradient'>Professional Lifeline</h1>
            <p className='text-gray-500 text-sm md:text-base max-w-3xl'>
              These are the teams, classrooms, and ventures where I&apos;ve built, taught, and shipped software at
              scale. Each stop sharpened my craft and taught me how to shepherd ideas from vision to live product.
            </p>
          </div>

          <div className='space-y-8'>
            {experiences.map((experience, index) => (
              <FadeIn key={experience.id} delay={0.1 * (index % 3)} className='w-full' enableInView>
                <Card className='border border-border/60 bg-background/70 shadow-sm transition hover:shadow-lg'>
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
                    <p className='text-sm text-gray-500'>{experience.summary}</p>
                    {experience.overview && (
                      <p className='text-sm text-gray-500'>{experience.overview}</p>
                    )}
                    <ul className='list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300'>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    {experience.projects && (
                      <div className='space-y-2'>
                        <p className='text-xs uppercase tracking-[0.35em] text-muted-foreground'>Spotlight</p>
                        <div className='grid gap-3 md:grid-cols-2'>
                          {experience.projects.map((project) => (
                            <div
                              key={project.title}
                              className='rounded-2xl border border-border/40 bg-secondary/60 p-3'
                            >
                              <p className='text-sm font-semibold text-foreground'>{project.title}</p>
                              <p className='text-xs text-muted-foreground'>{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
