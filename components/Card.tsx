import Link from 'next/link';
import Rive from '@rive-app/react-canvas';
import { format, parseISO } from 'date-fns';
import { IRepository } from '../types/project.types';
import { getColor } from '../utils/color.util';

const RIVE_AVATAR = '/rive/avatar1.riv';
const Card = ({
  name,
  html_url,
  description,
  languages,
  created_at,
  setRepoName,
  language,
  homepage,
}: IRepository) => {
  return (
    <>
      {/* bg-[#17141d] */}

      <article
        className='min-w-32 lex-col hover:divide-x-84 shadow-3xl relative clear-both flex
        h-[450px] w-96 cursor-pointer flex-col rounded-3xl bg-yellow-100 p-6 transition-transform hover:-translate-y-5
        focus-within:hover:-translate-y-10 focus-within:hover:-translate-x-3 dark:bg-[#17141d] dark:shadow-[#17141d]'
        onClick={() => setRepoName(name)}
        // whileTap={{ rotateY: 180, scale: 0.75 }}
      >
        <header className='flex-grow mb-auto'>
          <p className='text-sm text-[#7a7abc]'>
            {format(parseISO(created_at), 'MMMM dd, yyyy')}
          </p>
          <h2 className='my-1 ml-auto text-xl font-mdm bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
            {name.split('-').join(' ')}
          </h2>
          <p className='font-mono text-md bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
            {description}
          </p>
          {homepage && (
            <Link href={homepage}>
              <a
                target='_blank'
                className='flex items-center justify-center w-1/2 ml-4 font-mono text-sm cardTag bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline '
                data-splitbee-event='View project'
                data-splitbee-event-destination={name.split('-').join(' ')}
              >
                VIEW PROJECT
              </a>
            </Link>
          )}
          <Link href={html_url}>
            <a
              target='_blank'
              className='flex items-center justify-center w-1/2 ml-4 font-mono text-sm cursor-pointer cardTag bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline'
              data-splitbee-event='View code'
              data-splitbee-event-destination={name.split('-').join(' ')}
            >
              VIEW CODE
            </a>
          </Link>
        </header>

        <div className='relative flex items-center h-20'>
          <span className='box-border relative flex flex-col items-center justify-center '>
            {/* <img
                className='absolute block w-10 h-10 overflow-hidden bg-white rounded-full filter-shadow-lg bottom-4'
                src='./images/avatar.png'
                /> */}
            <Rive
              src={RIVE_AVATAR}
              className='absolute block w-10 h-10 overflow-hidden bg-white rounded-full filter-shadow-lg bottom-4'
            />

            <svg
              className='stroke-linecap-round stroke-linejoin-round pointer-events-none h-[48px] w-[60px] fill-transparent stroke-[#ff8a00] stroke-2'
              viewBox='0 0 106 57'
            >
              <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
            </svg>
          </span>

          <div className='mb-3 ml-3  font-mdm bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
            <div className=' font-extrabold text-[#7a7a8c]'>Author</div>
            Yoav Hevroni
          </div>
        </div>

        <div className='flex flex-wrap px-0 pt-2 pb-4 mx-4 mt-4 font-bold leading-4 uppercase text-md '>
          {Object.keys(languages).map((lang: string) => (
            <a
              className='mb-1 cardTag'
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
