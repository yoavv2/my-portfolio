import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { getColor } from '../utils/color.util';
import { useRive } from '@rive-app/react-canvas';

const url = 'https://yoavhevroni.click/';
const title = 'Yoav Hevroni';
const description = 'Yoav Hevroni Portfolio';
const image = 'https://yoavhevroni.click/static/images/yoav-profile.jpg';

const Home = (): JSX.Element => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
        // staggerDirection: -1,
        ease: 'easeOut',
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  const STATE_MACHINE_NAME = 'Animation1';
  const { rive, RiveComponent } = useRive({
    src: 'rive/marty.riv',
    // animations: "Correct",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const clickOnMarty = (): void => {
    rive.play('Animation2');
    setTimeout(() => {
      rive.pause('Animation2');
      rive.play('Animation1');
    }, 10000);
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
        onClick={() => clickOnMarty()}
        className='3xl:left-36 absolute right-0 top-28 h-32 w-28 cursor-pointer sm:h-60 sm:w-60 lg:top-14 lg:h-96 lg:w-96'
      />
      <motion.div variants={container} initial='hidden' animate='visible'>
        <motion.div variants={item}>
          <header>
            <h2 className='font-mono font-extrabold lg:text-5xl'>
              <span
                style={{
                  color: `${getColor()}`,
                }}
              >
                console
              </span>
              .
              <span
                style={{
                  color: `${getColor()}`,
                }}
              >
                log
              </span>
              (
              <span
                style={{
                  color: `${getColor()}`,
                }}
              >
                'Hello World'
              </span>
              );
              <br />
              My name is
            </h2>
            <h1 className='mb-6 font-mono text-4xl lg:text-7xl'>
              Yoav Hevroni
            </h1>
            <h3 className='font-mono text-3xl'>I’m a Full-stack Developer.</h3>
          </header>
        </motion.div>
        <p className='mt-20 font-mono text-xl lg:text-xl'>
          I love creating user-friendly websites and web apps that are both
          functional and visually appealing. I have a strong understanding of
          JavaScript, HTML, CSS, and the MERN stack (MongoDB, Express, React,
          Node.js). I'm especially skilled at using React.js to build
          interactive and user-friendly interfaces. I also have a keen eye for
          detail and a deep understanding of UI/UX principles, which allows me
          to create intuitive and visually appealing solutions that users love.
          <br />
          I'm a team player and I'm always learning new things. I'm also a big
          fan of agile methodologies. I thrive in fast-paced environments where
          I can continuously learn and adapt to emerging technologies and
          industry trends.
          <br />
          <br />
          I'm always looking for new challenges and opportunities to push the
          boundaries of what's possible in web development. Whether it's
          optimizing existing applications or building groundbreaking solutions
          from scratch, I approach every project with enthusiasm and a
          relentless pursuit of quality.
          <br />
          <br />
          I'm currently looking for a challenging role in a forward-thinking
          company that values creativity, teamwork, and a dedication to
          delivering exceptional user experiences. Let's collaborate and create
          something truly remarkable together.
        </p>

        <h2 className='my-10 font-mono '>Here's how you can contact me!</h2>
      </motion.div>

      <div
        // className='flex flex-col items-center justify-center mb-20 space-y-2 border-2 sm:flex-row sm:items-start sm:justify-start sm:space-x-2 sm:space-y-0'
        className='mb-20 flex space-x-2 text-sm sm:text-base'
      >
        <Link href='https://www.linkedin.com/in/yoavhevroni/'>
          <a
            target='_blank'
            aria-label='linkedin'
            className='group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
          >
            <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-slate-300 opacity-[3%] dark:bg-white'></span>
            <span className='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-indigo-400 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8 dark:bg-lime-300'></span>
            <span className='relative w-full text-center text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
              linkedin
            </span>
            <span className='absolute inset-0 rounded-full border-2 border-black dark:border-white'></span>
          </a>
        </Link>

        <Link href='https://github.com/yoavv2'>
          <a
            target='_blank'
            aria-label='github'
            className='group relative inline-flex flex-shrink items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
          >
            <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gray-300 opacity-[3%] dark:bg-white'></span>
            <span className='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-emerald-400 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8 dark:bg-cyan-300'></span>
            <span className='relative w-full text-center text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
              github
            </span>
            <span className='absolute inset-0 rounded-full border-2 border-black dark:border-white'></span>
          </a>
        </Link>

        <Link href='mailto:yoavhevroni1@gmail.com'>
          <a
            target='_blank'
            aria-label='mail'
            className='group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
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
