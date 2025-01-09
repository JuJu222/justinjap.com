'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import { projects } from '@/lib/constants';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center min-h-screen py-28 md:py-32 px-4 md:px-8'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle className='hidden'>{project.title}</DialogTitle>
        <DialogContent className='max-w-4xl p-0 bg-transparent border-none'>
          {selectedImage && (
            <div className='relative w-full aspect-video shadow-lg'>
              <Image src={selectedImage} alt='Selected image' fill className='object-contain' />
            </div>
          )}
          <DialogClose asChild>
            <Button className='mt-4 shadow-lg'>Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <FadeIn delay={0.3} className='w-full max-w-6xl' enableInView>
        <div className='space-y-6 md:space-y-8'>
          <div
            className='relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden border-4 border-primary shadow-lg cursor-pointer hover:shadow-2xl transition duration-500'
            onClick={() => {
              setSelectedImage(project.mainImage);
              setOpen(true);
            }}
          >
            <Image src={project.mainImage} alt={project.title} fill className='object-cover object-top' />
          </div>

          <div className='space-y-3 md:space-y-4'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-primary-gradient'>{project.title}</h1>
              {project.url && (
                <div className='mt-1.5'>
                  <Link
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary-gradient border-b-2 pb-1 hover:border-primary border-transparent transition text-sm md:text-base break-all'
                  >
                    {project.url}
                  </Link>
                </div>
              )}
            </div>
            <p className='text-gray-500 text-base md:text-lg leading-relaxed'>{project.description}</p>
          </div>

          <div className='space-y-3 md:space-y-4'>
            <h2 className='text-xl md:text-2xl font-bold text-primary-gradient'>Tech Stack</h2>
            <div className='flex flex-wrap items-center gap-4'>
              {project.techStack.map((tech) => (
                <Tooltip key={tech.name} delayDuration={0}>
                  <TooltipTrigger>
                    <Image 
                      src={tech.icon} 
                      alt={tech.name} 
                      width={tech.size * 1.5} 
                      height={tech.size * 1.5}
                      className='md:w-[40px] md:h-[40px]' 
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className='space-y-3 md:space-y-4'>
            <h2 className='text-xl md:text-2xl font-bold text-primary-gradient'>Gallery</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'>
              {project.galleryImages.map((image, index) => (
                <div
                  key={index}
                  className='relative aspect-video rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500'
                  onClick={() => {
                    setSelectedImage(image);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className='object-cover object-top'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
