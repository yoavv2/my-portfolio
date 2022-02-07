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
        <div className='max-w-5xl px-8 mx-auto'>
          <div className='flex items-center justify-between py-6'>
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-5xl px-8 py-4 mx-auto'>{children}</div>
      </main>
    </>
  );
};

export default Layout;
``;
