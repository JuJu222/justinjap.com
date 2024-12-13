import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';
import NextJsIcon from '@/public/icons/nextjs.svg';
import TailwindIcon from '@/public/icons/tailwind.svg';

function ProjectCard() {
  return (
    <Card className='w-full hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
      <CardHeader className='p-0 pb-6'>
        <div className='relative w-full h-52 rounded-t-xl overflow-hidden border-b-8 border-primary'>
          <Image src='/images/walletize.png' alt='hero' fill className='object-cover' />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
        <div className='flex items-center gap-2'>
          <Image src={TailwindIcon} alt='tailwind' width={20} height={20} />
          <Image src={NextJsIcon} alt='next' width={20} height={20} />
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
