'use client';

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { useCallback, type PropsWithChildren } from 'react';

type Theme = 'light' | 'dark';

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, resolvedTheme, setTheme } = useNextTheme();
  const activeTheme = (resolvedTheme ?? theme) as Theme | undefined;

  const toggleTheme = useCallback(() => {
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }, [activeTheme, setTheme]);

  return {
    theme: activeTheme ?? 'light',
    toggleTheme,
  };
}
