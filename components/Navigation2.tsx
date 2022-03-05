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
      <ul className=' flex space-x-2 ' aria-label='navigation'>
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
          <ThemeSwitch />
        </motion.li>
        <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
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
            <a className='relative p-5' aria-label='home'>
              <Home />
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
            <a className='p-5' aria-label='blog'>
              <Blog />
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
            <a className='p-5' aria-label='projects'>
              <Projects />
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
            <a className='p-5' target='_blank' aria-label='mail'>
              <Mail />
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
            <a className='p-5' target='_blank' aria-label='github'>
              <Github />
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
            <a className='p-5' target='_blank' aria-label='linkedin'>
              <LinkedIn />
            </a>
          </Link>
        </motion.li>
      </ul>
    </>
  );
}

export default Navigation2;
