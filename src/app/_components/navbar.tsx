import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-t-[1rem] border-primary flex justify-center">
      <div className="container flex h-14 items-center max-w-4xl">
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/resume">Resume</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
