import AboutMe from './_components/about-me';
import Awards from './_components/awards';
import FeaturedProjects from './_components/featured-projects';
import Hero from './_components/hero';
import CurrentExperience from './_components/current-experience';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-6 md:px-8'>
      <Hero />
      <FeaturedProjects />
      <AboutMe />
      <CurrentExperience />
      <Awards />
    </div>
  );
}
