import Reveal from '@/components/animations/reveal';
import SectionHeading from '@/components/section-heading';
import { awardsData } from '@/lib/data';

function Awards() {
  return (
    <section className='border-t border-border'>
      <div className='mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32'>
        <SectionHeading
          eyebrow='Awards'
          title='Recognition along the way.'
          description='Achievements and recognitions I have received.'
        />
        <ul className='mt-14 divide-y divide-border border-y border-border'>
          {awardsData.map((award, i) => (
            <Reveal
              as='li'
              key={award.title}
              delay={i * 0.06}
              className='grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8'
            >
              <p className='text-[15px] font-medium'>{award.title}</p>
              <p className='text-sm text-muted-foreground'>
                {award.issuer} · <span className='font-mono text-[13px] text-faint'>{award.year}</span>
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Awards;
