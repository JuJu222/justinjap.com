import Image from 'next/image';
import type { Project } from '@/lib/constants';
import { cn } from '@/lib/utils';

type Tech = Project['techStack'][number];

// A tech's single-colour icon, or its initial when it has none.
export function TechIcon({ tech, className }: { tech: Tech; className?: string }) {
  if (!tech.icon) {
    return (
      <span aria-hidden='true' className='font-mono text-[11px] font-semibold text-subtle'>
        {tech.name[0]}
      </span>
    );
  }
  return (
    <Image
      src={tech.icon}
      alt=''
      width={16}
      height={16}
      className={cn('object-contain opacity-80 brightness-0 dark:invert', className)}
    />
  );
}

// A row of tech icons. Each name stays in the HTML as real text, shown as a
// tooltip on hover, so search engines and screen readers still get it.
export default function TechStackIcons({ techStack, className }: { techStack: Tech[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {techStack.map((tech) => (
        <li
          key={tech.name}
          className='group/tech relative flex size-8 items-center justify-center rounded-lg border border-border bg-foreground/[0.04]'
        >
          <TechIcon tech={tech} className='size-4' />
          <span className='pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-0.5 text-xs text-popover-foreground opacity-0 transition duration-200 group-hover/tech:translate-y-0 group-hover/tech:opacity-100'>
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
