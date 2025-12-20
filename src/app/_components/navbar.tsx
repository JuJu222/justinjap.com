'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import LinkedinIcon from '@/public/icons/linkedin.svg';
import GithubIcon from '@/public/icons/github.svg';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import { GlowingEffect } from '@/components/glowing-effect';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-2 left-0 right-0 z-50 flex justify-center'>
      <div className='relative rounded-xl border border-gray-200 dark:border-gray-800 p-1'>
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className='rounded-xl bg-background/80 backdrop-blur-sm shadow-lg dark:drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)]'>
          <div className='container flex h-14 items-center justify-between max-w-6xl px-4 md:px-6'>
            <div className='hidden items-center gap-4 md:flex'>
              <Button variant='ghost' asChild>
                <Link href='/'>Home</Link>
              </Button>
              <Button variant='ghost' asChild>
                <Link href='/projects'>Projects</Link>
              </Button>
              <Button variant='ghost' asChild>
                <Link href='/experiences'>Experience</Link>
              </Button>
              <Button variant='ghost' asChild>
                <Link
                  href='https://www.linkedin.com/in/justinjap'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  <Image src={LinkedinIcon} alt='linkedin' width={18} height={18} className='dark:brightness-150' />
                </Link>
              </Button>
              <Button variant='ghost' asChild>
                <Link
                  href='https://github.com/JuJu222'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  <Image src={GithubIcon} alt='github' width={20} height={20} className='dark:brightness-150' />
                </Link>
              </Button>
              <ThemeToggle />
            </div>

            <div className='md:hidden'>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant='outline' size='icon'>
                    <Menu className='h-5 w-5' />
                  </Button>
                </SheetTrigger>
                <SheetContent side='left' className='w-[240px] sm:w-[300px] flex flex-col'>
                  <SheetTitle>justinjap.com</SheetTitle>
                  <div className='flex flex-col gap-4 mt-6'>
                    <Button variant='ghost' asChild onClick={() => setOpen(false)}>
                      <Link href='/'>Home</Link>
                    </Button>
                    <Button variant='ghost' asChild onClick={() => setOpen(false)}>
                      <Link href='/projects'>Projects</Link>
                    </Button>
                    <Button variant='ghost' asChild onClick={() => setOpen(false)}>
                      <Link href='/experiences'>Experience</Link>
                    </Button>
                    <Button variant='ghost' asChild onClick={() => setOpen(false)}>
                      <Link
                        href='https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/Resume Justin Jap - Eng.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Resume
                      </Link>
                    </Button>
                    <div className='flex gap-4 items-center justify-center'>
                      <Button variant='ghost' asChild onClick={() => setOpen(false)}>
                        <Link
                          href='https://www.linkedin.com/in/justinjap'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center'
                        >
                          <Image
                            src={LinkedinIcon}
                            alt='linkedin'
                            width={18}
                            height={18}
                            className='dark:brightness-150'
                          />
                        </Link>
                      </Button>
                      <Button variant='ghost' asChild onClick={() => setOpen(false)}>
                        <Link
                          href='https://github.com/JuJu222'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center'
                        >
                          <Image src={GithubIcon} alt='github' width={20} height={20} className='dark:brightness-150' />
                        </Link>
                      </Button>
                    </div>
                    <div className='flex justify-center mt-4'>
                      <ThemeToggle />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
