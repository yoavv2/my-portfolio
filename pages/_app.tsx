import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
      <Layout
        size={`${pathname === '/projects' ? 'max-w-screen-2xl ' : 'max-w-5xl'}`}
        padding={`${pathname === '/projects' ? 'px-0' : 'px-8'}`}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
