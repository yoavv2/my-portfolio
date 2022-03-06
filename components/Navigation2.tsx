import Link from 'next/link';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ThemeSwitch from './ThemeSwitch';
import { Home, Blog, Projects, Github, LinkedIn, Mail } from './Icons';

function Navigation2() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ul className=' relative flex space-x-2 ' aria-label='navigation'>
        <motion.li
          className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{
            scale: 0.85,
            y: -10,
            boxShadow: '10px 10px 0 rgba(0, 0, 2, 0)',
          }}
        >
          <span className='p-5 '>
            <ThemeSwitch />
          </span>
        </motion.li>
        <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
        {/* <label className='absolute bottom-full flex cursor-pointer items-center'>
          {' '}
          Home{' '}
        </label> */}
        <motion.li
          className='relative flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{
            scale: 0.85,
            y: -10,
            boxShadow: '10px 10px 0 rgba(0, 0, 2, 0)',
          }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='/'>
            <a
              className='relative flex flex-col items-center justify-center p-5 text-center'
              aria-label='home'
            >
              <Home />
              <span className='text-[.5em]'>Home</span>
            </a>
          </Link>

          {pathname === '/' && (
            <motion.div
              className='absolute top-full right-0 left-0  h-1 rounded-full bg-gray-600 underline dark:bg-gray-100 '
              layoutId='underline'
            />
          )}
        </motion.li>

        <motion.li
          className='relative flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{
            scale: 0.85,
            y: -10,
            boxShadow: '10px 10px 0 rgba(0, 0, 2, 0)',
          }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='/blog'>
            <a
              className='relative flex flex-col items-center justify-center p-5 text-center'
              aria-label='blog'
            >
              <Blog />
              <span className='text-[.5em]'>Blog</span>
            </a>
          </Link>
          {pathname === '/blog' && (
            <motion.div
              className='absolute top-full right-0 left-0  h-1 rounded-full bg-gray-600 underline dark:bg-gray-100 '
              layoutId='underline'
            />
          )}
        </motion.li>

        <motion.li
          className='relative flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='/projects'>
            <a
              className='relative flex flex-col items-center justify-center p-5 text-center'
              aria-label='projects'
            >
              <Projects />
              <span className='text-[.5em]'>Projects</span>
            </a>
          </Link>
          {pathname === '/projects' && (
            <motion.div
              className='absolute top-full right-0 left-0  h-1 rounded-full bg-gray-600 underline dark:bg-gray-100 '
              layoutId='underline'
            />
          )}
        </motion.li>

        <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />

        <motion.li
          className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{
            scale: 0.85,
            y: -10,
            boxShadow: '10px 10px 0 rgba(0, 0, 2, 0)',
          }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='mailto:yoavhevroni1@gmail.com'>
            <a
              className='relative flex flex-col items-center justify-center p-5 text-center'
              target='_blank'
              aria-label='mail'
            >
              <Mail />
              <span className='text-[.5em]'>Mail</span>
            </a>
          </Link>
        </motion.li>
        <motion.li
          className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{
            scale: 0.85,
            y: -10,
            boxShadow: '10px 10px 0 rgba(0, 0, 2, 0)',
          }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='https://github.com/yoavv2'>
            <a
              className='relative flex flex-col items-center justify-center p-5 text-center'
              target='_blank'
              aria-label='github'
            >
              <Github />
              <span className='text-[.5em]'>Github</span>
            </a>
          </Link>
        </motion.li>
        <motion.li
          className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{
            scale: 0.85,
            y: -10,
            boxShadow: '10px 10px 0 rgba(0, 0, 2, 0)',
          }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='https://www.linkedin.com/in/yoavhevroni/'>
            <a
              className='relative flex flex-col items-center justify-center p-5 text-center'
              target='_blank'
              aria-label='linkedin'
            >
              <LinkedIn />
              <span className='text-[.5em]'>LinkedIn</span>
            </a>
          </Link>
        </motion.li>
      </ul>
    </>
  );
}

export default Navigation2;
