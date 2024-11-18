import FadeUp from '@/components/animations/fade-up';
import ProjectCard from './_components/project-card';
import Footer from './_components/footer';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-8'>
      <div className='flex flex-col gap-2 h-dvh justify-center'>
        <FadeUp>
          <h1 className='text-4xl font-bold'>Hello, my name is</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h1 className='text-6xl font-bold text-primary'>Justin Jap</h1>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p>Founder of Walletize, Front end developer at Unit Network</p>
        </FadeUp>
        <FadeUp delay={0.6}>
          <p className='text-lg text-gray-500'>
            I&apos;m a software engineer who loves to build things that help people.
          </p>
        </FadeUp>
      </div>
      <FadeUp delay={0.3} className='w-full max-w-6xl' enableInView>
        <h2 className='text-4xl font-bold text-primary'>My Timeline</h2>
        <p className='text-gray-500 text-base'>My professional journey in software development.</p>
        <div className='relative container mx-auto mt-8 overflow-x-auto pt-4 no-scrollbar'>
          <div className='relative flex justify-between'>
            <div className='relative flex flex-col items-center'>
              <div className='w-4 h-4 bg-primary rounded-full z-10 animate-ping2s'></div>
              <div className='w-4 h-4 bg-primary rounded-full z-10 absolute'></div>
              <div className='absolute top-[7px] h-0.5 bg-gray-200 w-1/2 left-1/2'></div>
              <div className='w-64 text-center'>
                <p className='font-semibold'>Present</p>
                <p>Continuing the journey...</p>
              </div>
            </div>
            <div className='relative flex flex-col items-center'>
              <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
              <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
              <div className='w-64 text-center'>
                <p className='font-semibold'>2024</p>
                <p>Building side projects</p>
              </div>
            </div>
            <div className='relative flex flex-col items-center'>
              <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
              <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
              <div className='w-64 text-center'>
                <p className='font-semibold'>2023</p>
                <p>Frontend Developer at Unit Network</p>
              </div>
            </div>
            <div className='relative flex flex-col items-center'>
              <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
              <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
              <div className='w-64 text-center'>
                <p className='font-semibold'>2023</p>
                <p>Software Engineer at Shopee</p>
              </div>
            </div>
            <div className='relative flex flex-col items-center'>
              <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
              <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
              <div className='w-64 text-center'>
                <p className='font-semibold'>2022</p>
                <p>Graduated from University</p>
              </div>
            </div>
            <div className='relative flex flex-col items-center'>
              <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
              <div className='absolute top-[7px] h-0.5 bg-gray-200 w-full'></div>
              <div className='w-64 text-center'>
                <p className='font-semibold'>2022</p>
                <p>Founded Walletize</p>
              </div>
            </div>
            <div className='relative flex flex-col items-center'>
              <div className='w-4 h-4 bg-primary rounded-full z-10'></div>
              <div className='absolute top-[7px] h-0.5 bg-gray-200 w-1/2 right-1/2'></div>
              <div className='w-64 text-center'>
                <p className='font-semibold'>2021</p>
                <p>Started my coding journey</p>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
      <FadeUp delay={0.3} className='w-full max-w-6xl mt-20' enableInView>
        <h2 className='text-4xl font-bold text-primary'>Featured Projects</h2>
        <p className='text-gray-500 text-base'>Some of my projects that I&apos;m proud of.</p>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </FadeUp>
      <Footer />
    </div>
  );
}
