import FadeUp from '@/components/animations/fade-in';
import ProjectCard from './_components/project-card';
import Footer from './_components/footer';
import Hero from './_components/hero';
import Timeline from './_components/timeline';
import FeaturedProjects from './_components/featured-projects';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-8'>
      <Hero />
      <FadeUp delay={0.3} className='w-full max-w-6xl' enableInView>
        <h2 className='text-4xl font-bold text-primary'>About Me</h2>
        <p className='text-gray-500 text-base'>Some of my projects that I&apos;m proud of.</p>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </FadeUp>
      <Timeline />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
