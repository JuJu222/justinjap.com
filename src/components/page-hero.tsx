import Reveal from '@/components/animations/reveal';
import RevealText from '@/components/animations/reveal-text';
import { Eyebrow } from '@/components/section-heading';

// Top-of-page intro for the inner pages: grid backdrop, eyebrow, title, blurb.
export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className='relative overflow-hidden'>
      <div aria-hidden='true' className='bg-grid pointer-events-none absolute inset-x-0 top-0 h-[480px]' />
      <div className='relative mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-20'>
        <Reveal onMount>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <RevealText as='h1' text={title} gradient onMount delay={0.08} className='title-1 mt-4 max-w-3xl text-balance' />
        <RevealText
          text={description}
          onMount
          delay={0.3}
          stagger={0.06}
          className='mt-6 max-w-xl text-[17px] leading-relaxed text-pretty text-muted-foreground'
        />
      </div>
    </section>
  );
}
