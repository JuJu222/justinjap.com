import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | justinjap.com',
  description: 'A list of my professional works and personal projects.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
