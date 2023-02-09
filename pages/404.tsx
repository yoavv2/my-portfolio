// pages/404.js
import Rive, { useRive } from '@rive-app/react-canvas';

const NotFoundPage = () => {
  return (
    <>
      <h1 className='font-mono font-extrabold lg:text-5xl'>
        OOPS! its 404 Page😱
      </h1>
      <div className='flex flex-col justify-center items-center h-full '>
        <Rive
          src='/rive/freefall.riv'
          className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'
        />
      </div>
    </>
  );
};

export default NotFoundPage;
