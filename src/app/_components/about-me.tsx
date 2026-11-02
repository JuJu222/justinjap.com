import Image from 'next/image';
import Reveal from '@/components/animations/reveal';
import RevealText from '@/components/animations/reveal-text';
import { Eyebrow } from '@/components/section-heading';
import { aboutMeData } from '@/lib/data';

function AboutMe() {
  return (
    <section className='border-t border-border'>
      <div className='mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-16'>
        <Reveal
          y={40}
          className='panel relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none'
        >
          <Image
            src={aboutMeData.image}
            alt='Justin Jap'
            fill
            sizes='(min-width: 1024px) 400px, 384px'
            className='object-cover'
          />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>About me</Eyebrow>
          </Reveal>
          <RevealText
            as='h2'
            text='Building things that make a difference.'
            gradient
            delay={0.08}
            className='title-2 mt-4 text-balance'
          />
          <div className='mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-pretty text-muted-foreground'>
            {aboutMeData.paragraphs.map((paragraph, i) => (
              <Reveal key={i} as='p' delay={0.2 + i * 0.08}>
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
