import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { MetaProps } from '../types/layout';
import { useEffect, useState } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';
// import shopIcon from './shopicon.riv';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0); // default width, detect on server.
  const [isMobile, setIsMobile] = useState(width <= 375);

  // const STATE_MACHINE_NAME = 'State Machine 1';

  // const { rive, RiveComponent } = useRive({
  //   src: shopIcon,
  //   // animations: "Correct",
  //   stateMachines: STATE_MACHINE_NAME,
  //   autoplay: true,
  // });

  // const onError = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Incorrect');
  // const onSucsess = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Correct');

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    setIsMobile(width <= 375);
  }, [width]);
  console.log(width);

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <>
      <header className='fixed top-0 w-full bg-yellow-200 dark:bg-purple-900  '>
        {/* mx-auto max-w-6xl md:px-8 */}
        <div className='  md:mx-auto md:max-w-6xl md:px-8'>
          <div className='flex flex-col items-center justify-evenly py-6 align-middle md:flex-row md:justify-between '>
            {isMobile && (
              <div
                className='h-10 w-10 rounded-full bg-red-700'
                onClick={() => setIsOpen(!isOpen)}
              ></div>
            )}
            {isMobile && isOpen && (
              <>
                <Navigation />
                <ThemeSwitch />
              </>
            )}
            {!isMobile && (
              <>
                <ThemeSwitch />
                <Navigation />
              </>
            )}
            {/* <Navbar /> */}
          </div>
        </div>
      </header>
      <main>
        <div
          className={`my-40  sm:mx-auto  sm:my-20 sm:py-4 ${size} ${padding}`}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
