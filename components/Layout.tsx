import ThemeSwitch from './ThemeSwitch';
import { MetaProps } from '../types/layout';
import Navigation2 from './Navigation2';
import { motion } from 'framer-motion';

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
      <main>
        <div
          className={`my-40  sm:mx-auto  sm:my-20 sm:py-4 ${size} ${padding}`}
        >
          {children}
        </div>
      </main>
      <footer>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
          }}
          className='fixed bottom-0 left-0 right-0 mx-auto mb-10 flex max-w-lg flex-nowrap items-center justify-evenly rounded-2xl bg-gray-100 py-1 text-center dark:bg-gray-900'
        >
          <ThemeSwitch />
          <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
          <Navigation2 />
        </motion.nav>
      </footer>
    </>
  );
};

export default Layout;
