import React from 'react';
import { format, parseISO } from 'date-fns';
import { getColor } from '../utils/color.util';
import Link from 'next/link';
import Rive from '@rive-app/react-canvas';

interface CardProps {
  name: string;
  html_url: string;
  description: string;
  languages: string[];
  language: string;
  created_at: string;
  homepage?: string; // Optional
  setRepoName: (repoName: string) => void;
}

const RIVE_AVATAR = '/rive/avatar1.riv';

const Card: React.FC<CardProps> = ({
  name,
  html_url,
  description,
  languages,
  created_at,
  setRepoName,
  homepage,
}) => {
  return (
    <article
      className='card h-[350px] w-[400px] min-w-[250px] p-6 rounded-xl bg-[#17141d] shadow-[-1rem_0_3rem_#000] flex flex-col transition-all duration-200 relative focus-within:hover:translate-x-[130px] hover:translate-y-[-1rem] first:ml-0 ml-[-130px]'
      onClick={() => setRepoName(name)}
    >
      <header className='card-header mb-auto'>
        <p className='text-sm text-[#7a7a8c]'>
          {format(parseISO(created_at), 'MMMM dd, yyyy')}
        </p>
        <h2 className='text-lg mt-1 mb-0 cursor-pointer hover:bg-gradient-to-r from-[#ff8a00] to-[#e52e71] hover:text-transparent hover:bg-clip-text transition-all'>
          {name.split('-').join(' ')}
        </h2>
        <p className='text-md mt-1 font-mono'>{description}</p>
        {homepage && (
          <a
            href={homepage}
            target='_blank'
            rel='noopener noreferrer'
            className='block mt-4 font-mono text-sm bg-clip-text text-[#7a7a8c] uppercase hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline transition-all'
          >
            VIEW PROJECT
          </a>
        )}
        <a
          href={html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='block mt-2 font-mono text-sm bg-clip-text text-[#7a7a8c] uppercase hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline transition-all'
        >
          VIEW CODE
        </a>
      </header>
      <div className='relative flex items-center h-20'>
        <span className='box-border relative flex flex-col items-center justify-center '>
          <Rive
            src={RIVE_AVATAR}
            className='filter-shadow-lg absolute block w-10 h-10 overflow-hidden bg-white rounded-full bottom-4'
          />
          <svg
            className='stroke-linecap-round stroke-linejoin-round pointer-events-none h-[48px] w-[60px] fill-transparent stroke-[#ff8a00] stroke-2'
            viewBox='0 0 106 57'
          >
            <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
          </svg>
        </span>

        <div className='font-mdm mb-3 ml-3 bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
          <div className=' font-extrabold text-[#7a7a8c]'>Author</div>
          Yoav Hevroni
        </div>
      </div>

      <div className='tags flex flex-wrap mt-4'>
        {Object.keys(languages).map((lang) => (
          <a
            key={lang}
            href='#'
            className='block mb-1 text-[#7a7a8c] uppercase font-bold text-xs border border-[#28242f] rounded-full px-3 py-1 mr-2 hover:bg-gradient-to-r hover:from-[#ff8a00] hover:to-[#e52e71] hover:text-transparent hover:border-white transition-all'
            style={{ backgroundColor: getColor() }}
          >
            {lang}
          </a>
        ))}
      </div>
    </article>
  );
};

export default Card;
