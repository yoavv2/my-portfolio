import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { pathname } = router;

  return (
    <ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
      <Layout
        size={`${pathname === '/projects' ? 'max-w-screen-2xl ' : 'max-w-5xl'}`}
        padding={`${pathname === '/projects' ? 'px-0' : 'px-8'}`}
      >
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            exit='pageExit'
            variants={{
              pageInitial: {
                opacity: 0,
                scale: 0,
              },
              pageAnimate: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 1,
                  staggerChildren: 0.5,
                  staggerDirection: -1,
                  ease: 'easeOut',
                },
              },
              pageExit: {
                opacity: 0,
                scale: 0,
                filter: `invert( 100% )`,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
