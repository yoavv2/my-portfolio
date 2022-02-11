import { ProjectType } from '../types/project';
import { format, parseISO } from 'date-fns';
const Card = ({
  name,
  html_url,
  description,
  language,
  languages,
  created_at,
  setRepoName,
}: any) => {
  return (
    <>
      <article
        className='min-w-32 shadow-3xl hover:divide-x84 relative clear-both flex h-[450px] w-96
      flex-col rounded-3xl bg-[#17141d] p-6 transition-transform 
       hover:-translate-y-5 focus-within:hover:-translate-y-10 focus-within:hover:-translate-x-3 '
        onClick={() => setRepoName(name)}
      >
        <header className='mb-auto flex-grow'>
          <p className='text-sm text-[#7a7abc]'>
            {format(parseISO(created_at), 'MMMM dd, yyyy')}
          </p>
          <h2 className='my-1 ml-auto bg-clip-text fill-transparent font-mono text-lg shadow-none hover:text-orange-400'>
            {name.split('-').join(' ')}
          </h2>
          <p className='text-md font-mono'>{description}</p>
          <p className='font-mono text-sm'> language: {language}</p>
        </header>

        <div className='relative flex h-20  items-center '>
          <a
            className=' justify center relative box-border flex flex-col items-center '
            href='#'
          >
            <img
              className='filter-shadow-lg absolute bottom-4 block h-10 w-10 overflow-hidden rounded-full bg-white'
              src='./images/avatar.png'
            />
            {/* absolute -bottom-2 left-[10px] */}
            <svg
              className='stroke-linecap-round stroke-linejoin-round pointer-events-none  h-[48px] w-[60px] fill-transparent stroke-[#ff8a00] stroke-2'
              viewBox='0 0 106 57'
            >
              {/* absolute bottom-0 top-8 */}
              <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
            </svg>
          </a>

          <div className=' font-mdm  ml-3 mb-3 '>
            <div className=' font-extrabold text-[#7a7a8c]'>Author</div>
            Yoav Hevroni
          </div>
        </div>

        <div className='text-md mx-4 mt-4  px-0 pt-2  pb-4 font-bold uppercase leading-4 '>
          {/* <a className='cardTag' href='#'>
            html
          </a>
          <a className='cardTag' href='#'>
            css
          </a>
          <a className='cardTag' href='#'>
            web-dev
          </a> */}
          {Object.keys(languages).map((lang: string) => (
            <a
              className='cardTag'
              href='#'
              key={lang}
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
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
