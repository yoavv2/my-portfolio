import { IMetaProps } from '../types/layout.types';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: IMetaProps;
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
          className={`mb-40 mt-10 sm:mx-auto  sm:my-20 sm:py-4 ${size} ${padding}`}
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
            height: 70,
          }}
          className='fixed bottom-0 left-0 right-0 mx-auto mb-10 flex h-16 w-2/3
           items-center justify-evenly space-x-2 overflow-y-hidden overflow-x-scroll 
           rounded-2xl bg-gray-100 py-1 pl-44 text-center dark:bg-[#17141d] sm:max-w-lg
            sm:overflow-x-hidden sm:pl-0 '
        >
          <Navigation />
        </motion.nav>
      </footer>
    </>
  );
};

export default Layout;
