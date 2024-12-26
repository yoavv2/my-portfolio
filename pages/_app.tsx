import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { pathname } = router;

  return (
    <ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
      <MDXProvider>
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
                  y: 20,
                },
                pageAnimate: {
                  opacity: 1,
                  y: 0,
                },
                pageExit: {
                  opacity: 0,
                  y: -20,
                },
              }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.3,
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default MyApp;
