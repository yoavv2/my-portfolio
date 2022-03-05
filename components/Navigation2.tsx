import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ThemeSwitch from './ThemeSwitch';
import { Home, Blog, Projects, Github, LinkedIn, Mail } from './Icons';

function Navigation2() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <nav className=' flex space-x-2 '>
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
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
          // whileClick={{ scale: 0.85 }}
        >
          <ThemeSwitch />
        </motion.div>
        <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
        <motion.div
          className=' relative flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
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
          {/* <label
            className='absolute  bottom-full left-0 right-0 '
            htmlFor='Home'
          >
            home
          </label> */}
          <Link href='/'>
            <a className='relative p-5'>
              <Home />
            </a>
          </Link>

          {/* <motion.span
            whileHover={{
              scale: 1.1,
              y: 20,

              boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
            }}
            className={`absolute top-full   h-1 w-1 rounded-full bg-white 
            ${pathname === '/' ? 'block' : 'hidden'}
            `}
          ></motion.span> */}
        </motion.div>

        <motion.div
          className='  flex h-12 w-12 items-center justify-center
            rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white '
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
            <a className='p-5'>
              <Blog />
            </a>
          </Link>
        </motion.div>

        <motion.div
          className='  flex h-12 w-12 items-center justify-center
            rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white '
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
            <a className='p-5'>
              <Projects />
            </a>
          </Link>
        </motion.div>
        <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
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
            <a className='p-5' target='_blank'>
              <Mail />
            </a>
          </Link>
        </motion.div>
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
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
            <a className='p-5' target='_blank'>
              <Github />
            </a>
          </Link>
        </motion.div>
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
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
            <a className='p-5' target='_blank'>
              <LinkedIn />
            </a>
          </Link>
        </motion.div>
      </nav>
    </>
  );
}

export default Navigation2;
