import { Metadata } from 'next';
import { projects } from '@/lib/constants';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(async (p) => p.id === (await params).id);
  
  return {
    title: project ? `${project.title} | justinjap.com` : 'Project | justinjap.com',
    description: project?.description || 'Full Stack Developer passionate about building impactful software solutions.',
  };
}

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
