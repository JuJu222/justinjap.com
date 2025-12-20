'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      aria-label={
        mounted ? (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme') : 'Toggle theme'
      }
      className={className}
    >
      {mounted ? (
        theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />
      ) : (
        <span className='sr-only'>Toggle theme</span>
      )}
    </Button>
  );
}
