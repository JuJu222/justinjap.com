import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ExperienceEntry } from '@/lib/experiences';

export default function ExperienceCard({ experience }: { experience: ExperienceEntry }) {
  return (
    <article className='panel rounded-2xl p-6 sm:p-8'>
      <div className='flex flex-wrap items-start justify-between gap-x-6 gap-y-3'>
        <div className='flex items-start gap-4'>
          <span className='relative mt-0.5 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-foreground/[0.04]'>
            {experience.logo ? (
              <Image src={experience.logo} alt={`${experience.company} logo`} fill sizes='48px' className='object-cover' />
            ) : (
              <span aria-hidden='true' className='font-mono text-sm font-semibold text-subtle'>
                {experience.company[0]}
              </span>
            )}
          </span>
          <div>
            <p className='text-xs text-faint'>
              {experience.dateRange} · {experience.duration}
            </p>
            <h3 className='mt-2 text-[19px] font-medium tracking-[-0.015em]'>{experience.role}</h3>
            <p className='mt-1 text-sm text-muted-foreground'>
              {experience.company} · {experience.location}
            </p>
          </div>
        </div>
        <Badge>{experience.contract}</Badge>
      </div>

      <p className='mt-6 text-[15px] leading-relaxed text-pretty text-subtle'>{experience.summary}</p>
      {experience.overview && (
        <p className='mt-3 text-sm leading-relaxed text-pretty text-muted-foreground'>{experience.overview}</p>
      )}

      <ul className='mt-6 space-y-3 border-t border-border pt-6'>
        {experience.highlights.map((highlight) => (
          <li key={highlight} className='flex gap-3 text-sm leading-relaxed text-muted-foreground'>
            <span aria-hidden='true' className='mt-2 size-1 shrink-0 rounded-full bg-faint' />
            {highlight}
          </li>
        ))}
      </ul>

      <div className='mt-6 flex flex-wrap gap-1.5'>
        {experience.skills.map((skill) => (
          <Badge key={skill} variant='outline'>
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
}
