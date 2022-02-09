import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = (): JSX.Element => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav>
      <Link href='/'>
        <a
          className={` font-semibold ${
            pathname === '/'
              ? 'text-stone-900 dark:text-orange-300  font-extrabold'
              : 'text-gray-900 dark:text-white'
          } pr-6 py-4 `}
        >
          Home
        </a>
      </Link>
      <Link href='/blog'>
        <a
          className={`  relative px-6 py-3 font-bold text-gray-900 dark:text-white group 
          `}
        >
          <span
            className={` ${
              pathname === '/blog'
                ? 'opacity-50 transform -translate-y-0 -translate-x-0'
                : 'opacity-100'
            } 
                         absolute inset-0 w-full h-full transition 
                        duration-300 ease-out transform -translate-x-2 -translate-y-2 
                         bg-red-300 dark:bg-orange-300 
                         
         `}
          ></span>
          <span className='absolute inset-0 w-full h-full border-4 border-black dark:border-white'></span>
          <span className='relative'>Blog</span>
        </a>
      </Link>
      <Link href='/projects'>
        <a
          className={` font-semibold  ${
            pathname === '/projects'
              ? 'text-stone-900 dark:text-orange-300  font-extrabold'
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
