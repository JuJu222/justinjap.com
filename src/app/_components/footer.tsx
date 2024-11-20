import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-white dark:bg-black mt-20 w-screen'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <ul className='mb-6 flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
            <li>
              <a href='/legal/terms' className='me-4 hover:underline md:me-6'>
                Terms of Service
              </a>
            </li>
            <li>
              <a href='/legal/privacy' className='me-4 hover:underline md:me-6'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-center text-sm text-gray-500 dark:text-gray-400'>
          © 2024{' '}
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
