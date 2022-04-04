import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import Rive from 'rive-react';
const Card = ({
  name,
  html_url,
  description,
  language,
  languages,
  created_at,
  setRepoName,
  homepage,
}: any) => {
  const getColor = (): string => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <>
      {/* bg-[#17141d]  */}

      <article
        className='min-w-32 lex-col shadow-3xl hover:divide-x-84 relative clear-both flex h-[450px] w-96
         cursor-pointer flex-col rounded-3xl bg-yellow-100 p-6  transition-transform hover:-translate-y-5 
         focus-within:hover:-translate-y-10 focus-within:hover:-translate-x-3 dark:bg-slate-800 dark:shadow-gray-700 '
        onClick={() => setRepoName(name)}
        // whileTap={{ rotateY: 180, scale: 0.75 }}
      >
        <header className='mb-auto flex-grow'>
          <p className='text-sm text-[#7a7abc]'>
            {format(parseISO(created_at), 'MMMM dd, yyyy')}
          </p>
          <h2 className='font-mdm my-1 ml-auto bg-gradient-to-r bg-clip-text fill-transparent text-xl  hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
            {name.split('-').join(' ')}
          </h2>
          <p className='text-md bg-gradient-to-r bg-clip-text fill-transparent font-mono  hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
            {description}
          </p>
          {homepage && (
            <Link href={homepage}>
              <a
                target='_blank'
                className='cardTag ml-4 flex w-1/2 items-center justify-center bg-gradient-to-r bg-clip-text
             fill-transparent font-mono text-sm 
             hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline '
              >
                VIEW PROJECT
              </a>
            </Link>
          )}
        </header>
        <Link href={html_url}>
          <a
            target='_blank'
            className='cardTag ml-4 flex w-1/2 cursor-pointer items-center justify-center bg-gradient-to-r
             bg-clip-text fill-transparent font-mono 
             text-sm hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline'
          >
            {' '}
            VIEW CODE
          </a>
        </Link>

        <div className='relative flex h-20 items-center '>
          <span className=' relative box-border flex flex-col items-center justify-center'>
            {/* <img
              className='filter-shadow-lg absolute bottom-4 block h-10 w-10 overflow-hidden rounded-full bg-white'
              src='./images/avatar.png'
            /> */}
            <Rive
              src='/rive/avatar1.riv'
              className='filter-shadow-lg absolute bottom-4 block h-10 w-10 overflow-hidden rounded-full bg-white'
            />

            <svg
              className='stroke-linecap-round stroke-linejoin-round pointer-events-none  h-[48px] w-[60px] fill-transparent stroke-[#ff8a00] stroke-2'
              viewBox='0 0 106 57'
            >
              <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
            </svg>
          </span>

          <div className=' font-mdm  ml-3 mb-3 bg-gradient-to-r bg-clip-text fill-transparent   hover:from-orange-400 hover:to-red-700 hover:text-transparent '>
            <div className=' font-extrabold text-[#7a7a8c]'>Author</div>
            Yoav Hevroni
          </div>
        </div>

        <div className='text-md mx-4 mt-4  flex flex-wrap  px-0 pt-2 pb-4 font-bold uppercase leading-4 '>
          {Object.keys(languages).map((lang: string) => (
            <a
              className='cardTag mb-1'
              href='#'
              key={lang}
              style={{
                backgroundColor: `${getColor()}`,
              }}
            >
              {lang}
            </a>
          ))}
        </div>
      </article>
    </>
  );
};

export default Card;
