import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Project } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className='w-full hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
        <CardHeader className='p-0 pb-6'>
          <div className='relative w-full h-52 rounded-t-xl overflow-hidden border-b-8 border-primary'>
            <Image src={project.mainImage} alt='hero' fill className='object-cover object-top' />
          </div>
        </CardHeader>
        <CardContent className='space-y-3'>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className='line-clamp-3'>{project.description}</CardDescription>
          <div className='flex items-center gap-2'>
            {project.techStack.map((tech) => (
              <Tooltip key={tech.name} delayDuration={0}>
                <TooltipTrigger>
                  <Image src={tech.icon} alt={tech.name} width={tech.size} height={tech.size} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </CardContent>
        {/* <CardFooter className='flex justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter> */}
      </Card>
    </Link>
  );
}

export default ProjectCard;
