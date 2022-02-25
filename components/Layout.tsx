import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { MetaProps } from '../types/layout';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  size?: string;
  padding?: string;
};

const Layout = ({
  children,
  customMeta,
  size = 'max-w-6xl',
  padding = 'px-8',
}: LayoutProps): JSX.Element => {
  return (
    <>
      <header>
        <div className='mx-auto max-w-6xl md:px-8 '>
          <div className='flex items-center justify-between py-6'>
            <ThemeSwitch />
            <Navigation />
            {/* <Navbar /> */}
          </div>
        </div>
      </header>
      <main>
        <div className={`   sm:mx-auto  sm:my-20 sm:py-4 ${size} ${padding}`}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
