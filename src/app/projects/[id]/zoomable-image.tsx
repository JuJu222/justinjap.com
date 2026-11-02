'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

// A screenshot that opens full size in a lightbox when clicked.
export default function ZoomableImage({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          'group relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className='object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]'
        />
      </DialogTrigger>
      <DialogContent className='max-w-5xl border-none bg-transparent p-0 shadow-none'>
        <DialogTitle className='sr-only'>{alt}</DialogTitle>
        <div className='relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 shadow-[0_40px_120px_-30px_rgb(0_0_0/0.9)]'>
          <Image src={src} alt={alt} fill sizes='(min-width: 1024px) 1024px, 100vw' className='object-contain' />
        </div>
        <DialogClose className='mx-auto flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 backdrop-blur transition-colors hover:text-white'>
          <X className='size-4' />
          <span className='sr-only'>Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
