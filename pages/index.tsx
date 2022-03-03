// import Link from 'next/link';
import Link from 'next/link';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Home = (): JSX.Element => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Layout size='max-w-5xl'>
      <motion.div variants={container} initial='hidden' animate='visible'>
        <motion.div variants={item}>
          <h1 className='hoverAnimation font-mono text-6xl'>Hi there!</h1>

          <h1 className='hoverAnimation font-mono text-5xl'>
            My name is Yoav Hevroni
          </h1>
          <h1 className='hoverAnimation font-mono text-3xl'>
            I’m a Front-End Developer.
          </h1>
        </motion.div>
        <p className='hoverAnimation mt-20 font-mono'>
          i'm Very comfortable working with JavaScript, HTML and CSS.
        </p>
        <p className='hoverAnimation font-mono'>
          Building and maintaining web applications and dashboards using React
          or NextJS.
        </p>
        <p className='hoverAnimation font-mono'>
          Looking to grow as a front-end developer in a company
        </p>
        <p className='hoverAnimation font-mono'>
          that puts UI/UX at the top of the list.
        </p>
        <p className='hoverAnimation font-mono'>
          - My Stack is Mostly MongoDB with Mongoose, Node with Express, React
          with Next and GraphQL with Apollo Client.
        </p>

        <p className='hoverAnimation font-mono'>
          {' '}
          - B.Sc. in Mathematics and Computer Science.
        </p>

        <h2 className='hoverAnimation my-10 font-mono'>
          Here's how you can contact me!
        </h2>
      </motion.div>
      <div className=' mb-20 flex flex-col items-center justify-center space-y-2  sm:flex-row sm:items-start sm:justify-start sm:space-x-2 sm:space-y-0'>
        <Link href='https://www.linkedin.com/in/yoavhevroni/'>
          <a
            target='_blank'
            className='group relative inline-flex  items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
          >
            <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-slate-300 opacity-[3%] dark:bg-white'></span>
            <span className='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-indigo-400 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8 dark:bg-lime-300'></span>
            <span className='relative w-full  text-center text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
              linkedin
            </span>
            <span className='absolute inset-0 rounded-full border-2 border-black dark:border-white'></span>
          </a>
        </Link>

        <Link href='https://github.com/yoavv2'>
          <a
            target='_blank'
            className='group relative inline-flex   flex-shrink items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
          >
            <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gray-300 opacity-[3%] dark:bg-white'></span>
            <span className='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-emerald-400 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8 dark:bg-cyan-300'></span>
            <span className='relative w-full  text-center text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
              github
            </span>
            <span className='absolute inset-0 rounded-full border-2 border-black dark:border-white'></span>
          </a>
        </Link>

        <Link href='mailto:yoavhevroni1@gmail.com'>
          <a
            target='_blank'
            className='group relative  inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
          >
            <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gray-300 opacity-[3%] dark:bg-white'></span>
            <span className='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-yellow-400 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8 dark:bg-orange-300'></span>
            <span className='relative w-full text-center text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
              email
            </span>
            <span className='absolute inset-0 rounded-full border-2 border-black dark:border-white'></span>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
