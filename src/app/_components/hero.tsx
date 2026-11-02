import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, FileUser } from 'lucide-react';
import Reveal from '@/components/animations/reveal';
import RevealText from '@/components/animations/reveal-text';
import { Eyebrow } from '@/components/section-heading';
import { buttonVariants } from '@/components/ui/button';
import { site } from '@/lib/site';

function Hero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Top glow + grid, Linear-style */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 -top-40 h-[640px]'
        style={{ background: 'radial-gradient(50% 50% at 50% 30%, var(--glow), transparent 70%)' }}
      />
      <div aria-hidden='true' className='bg-grid pointer-events-none absolute inset-x-0 top-0 h-[560px]' />

      <div className='relative mx-auto grid max-w-6xl gap-12 px-4 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-32 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16'>
        <div>
          <Reveal onMount>
            <Eyebrow>
              {site.role} @ {site.company}
            </Eyebrow>
          </Reveal>
          <RevealText
            as='h1'
            text={`Hi, I'm ${site.name}.`}
            gradient
            onMount
            delay={0.08}
            className='title-1 mt-4 text-balance'
          />
          <RevealText
            text="I'm a software engineer who loves to build things that help people."
            onMount
            delay={0.3}
            stagger={0.06}
            className='mt-6 max-w-lg text-[17px] leading-relaxed text-pretty text-muted-foreground'
          />
          <Reveal onMount delay={0.45} className='mt-10 flex flex-wrap items-center gap-3'>
            <Link href={site.resume} target='_blank' rel='noopener noreferrer' className={buttonVariants({ size: 'lg' })}>
              <FileUser />
              Resume
            </Link>
            <Link
              href={site.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              LinkedIn
              <ArrowUpRight className='text-muted-foreground' />
            </Link>
            <Link
              href={site.github}
              target='_blank'
              rel='noopener noreferrer'
              className={buttonVariants({ variant: 'ghost', size: 'lg' })}
            >
              GitHub
              <ArrowUpRight />
            </Link>
          </Reveal>
        </div>

        <Reveal
          onMount
          delay={0.4}
          y={40}
          className='panel relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none'
        >
          <Image
            src='/images/hero.jpg'
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes='(min-width: 1024px) 420px, 384px'
            className='object-cover object-top dark:brightness-90'
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
