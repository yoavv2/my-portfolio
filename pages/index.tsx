// import Link from 'next/link';
import Link from 'next/link';
// import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { useRive, useStateMachineInput } from 'rive-react';

import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

const url = 'https://site-yoavv2.vercel.app/';
const title = 'Yoav Hevroni';
const description = 'Yoav Hevroni Portfolio';
const image = 'https://site-yoavv2.vercel.app/static/images/yoav-profile.jpg';

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
  const STATE_MACHINE_NAME = 'Animation1';
  const { rive, RiveComponent } = useRive({
    src: 'rive/marty.riv',
    // animations: "Correct",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });
  // useStateMachineInput(rive, STATE_MACHINE_NAME);

  const clickOnMarty = (): void => {
    rive.play('Animation2');
    setTimeout(() => {
      console.log('hello');
      rive.play('Animation1');
    }, 5000);
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          // images: [image],
          site_name: 'Yoav Hevroni Portfolio',
        }}
      />
      {/* top-52 */}
      <RiveComponent
        // onClick={() => onLoad('Animation2')}
        onClick={() => clickOnMarty()}
        className='absolute top-8 right-14 h-32 w-28 lg:h-96 lg:w-96 2xl:left-36'
      />
      <motion.div variants={container} initial='hidden' animate='visible'>
        <motion.div variants={item}>
          <h1 className=' font-mono text-6xl'>Hi there!</h1>

          <h2 className=' mb-6 font-mono text-5xl'>My name is Yoav Hevroni</h2>
          <h3 className='  font-mono text-3xl'>I’m a Full-stack Developer.</h3>
        </motion.div>
        <p className=' mt-20 font-mono'>
          I’m very comfortable working with JavaScript, HTML and CSS.
          <br />
          Building and maintaining web applications and dashboards using React
          or NextJS.
          <br />
          <br />
          Looking to grow as a front-end developer in a company
          <br />
          that puts UI/UX at the top of the list.
          <br />
          <br />- My Stack is Mostly React with Next, MongoDB with Mongoose,
          Node with Express and
          <br />
          {` `} Im Experienced with Typescript, GraphQL with Apollo, firebase.
          <br />- B.Sc. in Mathematics and Computer Science.
        </p>

        <h2 className=' my-10 font-mono'>Here's how you can contact me!</h2>
      </motion.div>

      <div
        // className=' mb-20 flex flex-col items-center justify-center space-y-2  border-2 sm:flex-row sm:items-start sm:justify-start sm:space-x-2 sm:space-y-0'
        className='mb-20 flex  space-x-2 text-sm sm:text-base'
      >
        <Link href='https://www.linkedin.com/in/yoavhevroni/'>
          <a
            target='_blank'
            aria-label='linkedin'
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
            aria-label='github'
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
            aria-label='mail'
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
    </>
  );
};

export default Home;
