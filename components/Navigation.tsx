import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navigation = (): JSX.Element => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className=' flex flex-col items-center  sm:flex-row'>
      <Link href='/'>
        <a
          className={` font-semibold ${
            pathname === '/'
              ? 'bg-gradient-to-r from-orange-400  to-red-700 bg-clip-text fill-transparent  font-extrabold text-stone-900 text-transparent'
              : 'text-gray-900 dark:text-white '
          } py-4 px-6  `}
        >
          Home
        </a>
      </Link>
      <Link href='/blog'>
        <a
          className={`  group relative px-6 py-3 font-bold text-gray-900 dark:text-white 
          `}
        >
          <span
            className={`
             absolute inset-0 h-full w-full
              -translate-x-2 -translate-y-2 transform bg-gradient-to-br from-red-300 to-amber-500 transition duration-300 ease-out dark:from-orange-400  dark:to-red-700 
                          
            ${
              pathname === '/blog'
                ? 'translate-x-0 translate-y-0 opacity-50'
                : 'opacity-100'
            } 

                       
         `}
          ></span>
          <span className='absolute inset-0 h-full w-full border-4 border-black dark:border-white'></span>
          <span className='relative'>Blog</span>
        </a>
      </Link>

      <Link href='/projects'>
        <a
          className={` font-semibold  ${
            pathname === '/projects'
              ? 'bg-gradient-to-r from-orange-400  to-red-700 bg-clip-text fill-transparent font-extrabold text-stone-900 text-transparent'
              : 'text-gray-900 dark:text-white'
          } px-6 py-4`}
        >
          Projects
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
