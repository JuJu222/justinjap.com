import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/animations/reveal';
import RevealText from '@/components/animations/reveal-text';
import { Eyebrow } from '@/components/section-heading';
import { buttonVariants } from '@/components/ui/button';
import { projects } from '@/lib/constants';
import ZoomableImage from './zoomable-image';

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  return {
    title: project ? `${project.title} | justinjap.com` : 'Project | justinjap.com',
    description: project?.description || 'Full Stack Developer passionate about building impactful software solutions.',
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const host = project.url && new URL(project.url).host.replace(/^www\./, '');

  return (
    <>
      <section className='relative overflow-hidden'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 h-[640px]'
          style={{ background: 'radial-gradient(50% 50% at 50% 30%, var(--glow), transparent 70%)' }}
        />
        <div aria-hidden='true' className='bg-grid pointer-events-none absolute inset-x-0 top-0 h-[560px]' />

        <div className='relative mx-auto max-w-6xl px-4 pt-32 sm:px-6 sm:pt-40'>
          <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
            <Reveal onMount>
              <Link
                href='/projects'
                className='inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground'
              >
                <ArrowLeft className='size-3.5' />
                All projects
              </Link>
            </Reveal>
            <Reveal onMount delay={0.06} className='mt-8'>
              <Eyebrow>{project.type === 'work' ? 'Work project' : 'Personal project'}</Eyebrow>
            </Reveal>
            <RevealText
              as='h1'
              text={project.title}
              gradient
              onMount
              delay={0.12}
              className='title-1 mt-4 text-balance'
            />
            {project.url && (
              <Reveal onMount delay={0.3} className='mt-10'>
                <Link
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={buttonVariants({ size: 'lg' })}
                >
                  Visit {host}
                  <ArrowUpRight />
                </Link>
              </Reveal>
            )}
          </div>

          {/* Grey stage the screenshot sits on: background at the top, lit from below. */}
          <Reveal
            onMount
            delay={0.4}
            y={40}
            className='relative -mx-4 mt-16 overflow-hidden px-4 pb-14 sm:-mx-6 sm:rounded-b-[2rem] sm:px-6 lg:-mx-16 lg:px-16 xl:-mx-28 xl:px-28'
          >
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-0'
              style={{
                background:
                  'radial-gradient(75% 65% at 50% 100%, var(--stage), transparent 100%), linear-gradient(180deg, transparent 20%, var(--stage-soft) 45%, var(--stage) 100%)',
              }}
            />
            <ZoomableImage
              src={project.mainImage}
              alt={`${project.title} screenshot`}
              sizes='(min-width: 1152px) 1088px, 100vw'
              priority
              className='mx-auto aspect-video max-w-5xl rounded-xl border border-border shadow-[0_40px_120px_-30px_rgb(0_0_0/0.6)]'
            />
          </Reveal>
        </div>
      </section>

      <section className='border-t border-border bg-surface/40'>
        <div className='mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[3fr_2fr] lg:gap-16'>
          <div>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
            </Reveal>
            <Reveal as='p' delay={0.08} className='mt-6 text-[17px] leading-relaxed text-pretty text-subtle'>
              {project.description}
            </Reveal>
          </div>

          <Reveal delay={0.16} className='panel h-fit rounded-2xl p-6 sm:p-8'>
            <p className='text-[15px] font-medium'>Tech stack</p>
            <ul className='mt-4 divide-y divide-border'>
              {project.techStack.map((tech) => (
                <li key={tech.name} className='flex items-center gap-3 py-3 text-sm text-muted-foreground'>
                  <span className='inline-flex size-7 items-center justify-center rounded-md border border-border bg-foreground/[0.04]'>
                    <Image
                      src={tech.icon}
                      alt=''
                      width={14}
                      height={14}
                      className='size-3.5 object-contain opacity-80 brightness-0 dark:invert'
                    />
                  </span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {project.galleryImages.length > 0 && (
        <section className='border-t border-border'>
          <div className='mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28'>
            <Reveal>
              <Eyebrow>Gallery</Eyebrow>
            </Reveal>
            <ul className='mt-8 grid gap-4 sm:grid-cols-2'>
              {project.galleryImages.map((image, i) => (
                <Reveal as='li' key={image} delay={(i % 2) * 0.08}>
                  <ZoomableImage
                    src={image}
                    alt={`${project.title} gallery image ${i + 1}`}
                    sizes='(min-width: 1152px) 544px, (min-width: 640px) 50vw, 100vw'
                    className='panel aspect-video rounded-2xl'
                  />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
