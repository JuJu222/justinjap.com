import FadeUp from '@/components/animations/fade-up';

export default function Home() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col gap-2'>
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
          <p className='text-lg text-gray-500'>I&apos;m a software engineer who loves to build things that help people.</p>
        </FadeUp>
      </div>
    </div>
  );
}
