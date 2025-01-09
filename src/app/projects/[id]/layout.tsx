import { Metadata } from 'next';
import { projects } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
  return {
    title: project ? `${project.title} | justinjap.com` : 'Project | justinjap.com',
    description: project?.description || 'Full Stack Developer passionate about building impactful software solutions.',
  };
}

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
