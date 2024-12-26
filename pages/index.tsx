import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';
import { getColor } from '../utils/color.util';
import SocialLink from '../components/SocialLink';
import Bio from '../components/Bio';

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
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
        damping: 12,
        delay: 0.2,
      },
    },
  };

  const STATE_MACHINE_NAME = 'Animation1';
  const { rive, RiveComponent } = useRive({
    src: 'rive/marty.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const clickOnMarty = (): void => {
    rive.play('Animation2');
    setTimeout(() => {
      rive.pause('Animation2');
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
          site_name: 'Yoav Hevroni Portfolio',
        }}
      />
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
        <Bio />
        <h2 className='my-10 font-mono'>Here's how you can contact me!</h2>
      </motion.div>

      <div className='mb-20 flex space-x-2 text-sm sm:text-base'>
        <SocialLink
          href='https://www.linkedin.com/in/yoavhevroni/'
          label='linkedin'
          hoverColor='bg-indigo-400 dark:bg-lime-300'
        />
        <SocialLink
          href='https://github.com/yoavv2'
          label='github'
          hoverColor='bg-emerald-400 dark:bg-cyan-300'
        />
        <SocialLink
          href='mailto:yoavhevroni1@gmail.com'
          label='email'
          hoverColor='bg-yellow-400 dark:bg-orange-300'
        />
      </div>
    </>
  );
};

export default Home;
