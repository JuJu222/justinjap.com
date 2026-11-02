'use client';

import { useEffect, useState } from 'react';
import { Briefcase, FileUser, Github, House, LayoutGrid, Linkedin, Moon, Sun } from 'lucide-react';
import { FloatingDock, type DockItem } from '@/components/ui/floating-dock';
import { useTheme } from '@/components/theme-provider';
import { site } from '@/lib/site';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dark = mounted && theme === 'dark';

  const items: DockItem[] = [
    { title: 'Home', href: '/', icon: <House /> },
    { title: 'Projects', href: '/projects', icon: <LayoutGrid /> },
    { title: 'Experience', href: '/experiences', icon: <Briefcase /> },
    { title: 'Resume', href: site.resume, external: true, icon: <FileUser /> },
    { title: 'LinkedIn', href: site.linkedin, external: true, icon: <Linkedin /> },
    { title: 'GitHub', href: site.github, external: true, icon: <Github /> },
    {
      title: dark ? 'Light mode' : 'Dark mode',
      onClick: toggleTheme,
      icon: dark ? <Sun /> : <Moon />,
    },
  ];

  return (
    // Fixed so it floats over the hero instead of reserving its own band;
    // only the dock itself takes clicks.
    <nav
      aria-label='Main'
      className='pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-end px-4 md:justify-center [&>*]:pointer-events-auto'
    >
      <FloatingDock items={items} />
    </nav>
  );
}
