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
              ? 'font-extrabold text-stone-900  dark:text-orange-300'
              : 'text-gray-900 dark:text-white'
          } py-4 pr-6 `}
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
            className={` ${
              pathname === '/blog'
                ? 'translate-y-0 -translate-x-0 transform opacity-50'
                : 'opacity-100'
            } 
                         absolute inset-0 h-full w-full -translate-x-2 
                        -translate-y-2 transform bg-red-300 transition duration-300 
                         ease-out dark:bg-orange-300 
                         
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
              ? 'font-extrabold text-stone-900  dark:text-orange-300'
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
