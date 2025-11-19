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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-t-[1rem] border-primary flex justify-center px-6 md:px-8'>
      <div className='container flex h-14 items-center justify-between max-w-6xl'>
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
              <Image src={LinkedinIcon} alt='linkedin' width={18} height={18} />
            </Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link
              href='https://github.com/JuJu222'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              <Image src={GithubIcon} alt='github' width={20} height={20} />
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
                      <Image src={LinkedinIcon} alt='linkedin' width={18} height={18} />
                    </Link>
                  </Button>
                  <Button variant='ghost' asChild onClick={() => setOpen(false)}>
                    <Link
                      href='https://github.com/JuJu222'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center'
                    >
                      <Image src={GithubIcon} alt='github' width={20} height={20} />
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
    </nav>
  );
}
