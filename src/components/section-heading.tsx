import Reveal from '@/components/animations/reveal';
import RevealText from '@/components/animations/reveal-text';
import { cn } from '@/lib/utils';

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('flex items-center gap-2 text-[13px] font-medium text-muted-foreground', className)}>
      <span className='size-1.5 rounded-full bg-brand-bright' />
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 md:items-end md:gap-12', className)}>
      <div>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <RevealText as='h2' text={title} gradient delay={0.08} className='title-2 mt-4 text-balance' />
      </div>
      {description && (
        <RevealText
          text={description}
          delay={0.2}
          stagger={0.06}
          className='max-w-md text-[15px] leading-relaxed text-pretty text-muted-foreground md:justify-self-end'
        />
      )}
    </div>
  );
}
