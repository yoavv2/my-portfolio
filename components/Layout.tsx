import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { MetaProps } from '../types/layout';
import Head from './Head';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <header>
        <div className='mx-auto max-w-6xl px-8'>
          <div className='flex items-center justify-between py-6'>
            <ThemeSwitch />
            <Navigation />
          </div>
        </div>
      </header>
      <main>
        <div className=' my-20 mx-auto max-w-5xl px-8 py-4'>{children}</div>
      </main>
    </>
  );
};

export default Layout;
``;
