import Link from 'next/link';
import { site } from '@/lib/site';

const columns = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Experience', href: '/experiences' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { label: 'Resume', href: site.resume, external: true },
      { label: 'LinkedIn', href: site.linkedin, external: true },
      { label: 'GitHub', href: site.github, external: true },
    ],
  },
];

function Footer() {
  return (
    <footer className='border-t border-border'>
      <div className='mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[2fr_repeat(2,1fr)]'>
        <div>
          <Link href='/' className='text-[15px] font-[560] tracking-[-0.01em]'>
            {site.name}
          </Link>
          <p className='mt-4 max-w-64 text-[13px] leading-relaxed text-faint'>{site.description}</p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className='text-[13px] font-medium text-foreground'>{c.title}</p>
            <ul className='mt-4 space-y-3'>
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    {...('external' in l && { target: '_blank', rel: 'noopener noreferrer' })}
                    className='text-[13px] text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='border-t border-border'>
        <div className='mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-faint sm:flex-row sm:justify-between sm:px-6'>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            {site.role} @ {site.company}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
