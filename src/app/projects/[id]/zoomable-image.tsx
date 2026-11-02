'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

// Most project screenshots are 1867x1035. The width/height only reserve space
// before load; with h-auto the browser then uses the image's real aspect ratio,
// so taller screenshots (e.g. macOS windows) show uncropped.
const hint = { width: 1867, height: 1035 };

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
          // Grow the whole frame on hover, so the screenshot gets bigger without being cropped.
          'relative block w-full cursor-zoom-in overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
          className
        )}
      >
        <Image src={src} alt={alt} {...hint} sizes={sizes} priority={priority} className='h-auto w-full' />
      </DialogTrigger>
      <DialogContent className='max-w-5xl border-none bg-transparent p-0 shadow-none'>
        <DialogTitle className='sr-only'>{alt}</DialogTitle>
        <Image
          src={src}
          alt={alt}
          {...hint}
          sizes='(min-width: 1024px) 1024px, 100vw'
          className='mx-auto h-auto max-h-[80vh] w-auto rounded-xl border border-white/10 shadow-[0_40px_120px_-30px_rgb(0_0_0/0.9)]'
        />
        <DialogClose className='mx-auto flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 backdrop-blur transition-colors hover:text-white'>
          <X className='size-4' />
          <span className='sr-only'>Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
