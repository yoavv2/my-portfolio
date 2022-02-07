import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
