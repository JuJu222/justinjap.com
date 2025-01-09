import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-white dark:bg-black mt-20 w-screen'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-center text-sm text-gray-500 dark:text-gray-400'>
          © 2025{' '}
          <Link href='/' className='hover:underline'>
            Justin Jap
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
