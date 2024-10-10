import React from 'react';
import Link from 'next/link';
import Rive from '@rive-app/react-canvas';
import { format, parseISO } from 'date-fns';
import { getColor } from '../utils/color.util';

const RIVE_AVATAR = '/rive/avatar1.riv';

const CardList = ({ cards, setRepoName }) => {
  return (
    <section className='scrollbar-thin scrollbar-thumb-[#201c29] scrollbar-track-[linear-gradient(90deg,#201c29,#201c29_1px,#17141d_0,#17141d)] flex p-12 overflow-x-scroll'>
      {cards.map((card, index) => (
        <article
          key={index}
          className='relative flex flex-col h-[450px] w-96 min-w-[250px] p-6 rounded-3xl bg-yellow-100 shadow-[-1rem_0_3rem_#000] transition-transform duration-200 ml-[-130px] first:ml-0 hover:translate-y-[-1rem] focus-within:hover:translate-x-[130px] dark:bg-[#17141d] dark:shadow-[#17141d]'
          onClick={() => setRepoName(card.name)}
        >
          <header className='flex-grow mb-auto'>
            <p className='text-sm text-[#7a7a8c]'>
              {format(parseISO(card.created_at), 'MMMM dd, yyyy')}
            </p>
            <h2 className='font-mdm my-1 ml-auto text-xl bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
              {card.name.split('-').join(' ')}
            </h2>
            <p className='text-md font-mono bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent'>
              {card.description}
            </p>
            {card.homepage && (
              <Link href={card.homepage}>
                <a
                  target='_blank'
                  className='cardTag flex items-center justify-center w-1/2 ml-4 font-mono text-sm bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline '
                  data-splitbee-event='View project'
                  data-splitbee-event-destination={card.name
                    .split('-')
                    .join(' ')}
                >
                  VIEW PROJECT
                </a>
              </Link>
            )}
            <Link href={card.html_url}>
              <a
                target='_blank'
                className='cardTag flex items-center justify-center w-1/2 ml-4 font-mono text-sm cursor-pointer bg-gradient-to-r bg-clip-text fill-transparent hover:from-orange-400 hover:to-red-700 hover:text-transparent hover:underline'
                data-splitbee-event='View code'
                data-splitbee-event-destination={card.name.split('-').join(' ')}
              >
                VIEW CODE
              </a>
            </Link>
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

          <div className='text-md flex flex-wrap px-0 pt-2 pb-4 mx-4 mt-4 font-bold leading-4 uppercase '>
            {Object.keys(card.languages).map((lang) => (
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
      ))}
    </section>
  );
};

export default CardList;
