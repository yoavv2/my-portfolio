import Link from 'next/link';
import Layout from '../components/Layout';
// import Layout from '../components/Layout';
import Image from 'next/image';

const Home = (): JSX.Element => {
  return (
    <>
      <h1 className='text-4xl font-mono'>Hi there! My name is Yoav Hevroni</h1>
      <h1 className='text-3xl font-mono'>
        I’m a Full-Stack / Front-End Developer.
      </h1>

      <p className='mt-20 font-mono'>
        i'm Very comfortable working with JavaScript, HTML and CSS.
      </p>
      <p className='font-mono'>
        Building and maintaining web applications and dashboards using React or
        NextJS.
      </p>
      <p className='font-mono'>
        Looking to grow as a front-end/ back-end developer in a company
        <p className='font-mono'>that puts UI/UX at the top of the list.</p>
      </p>
      <p className='font-mono'>
        - My Stack is Mostly MongoDB with Mongoose, Node with Express, React
        with Next and GraphQL with Apollo Client.
      </p>

      <p className='font-mono'>- B.Sc. in Mathematics and Computer Science.</p>

      <h2 className='font-mono my-10'>Here's how you can contact me!</h2>

      <Link href='https://www.linkedin.com/in/yoavhevroni/'>
        <a className='relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-mono font-bold rounded-full group'>
          <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]'></span>
          <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8'></span>
          <span className='relative w-full text-left text-teal-900 dark:text-white  transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
            linkedin
          </span>
          <span className='absolute inset-0 border-2 border-white rounded-full'></span>
        </a>
      </Link>

      <Link href='https://github.com/yoavv2'>
        <a className='relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-mono font-bold rounded-full group ml-4'>
          <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]'></span>
          <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8'></span>
          <span className='relative w-full text-left text-teal-900 dark:text-white  transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
            github
          </span>
          <span className='absolute inset-0 border-2 border-white rounded-full'></span>
        </a>
      </Link>
    </>
  );
};

export default Home;


//!best practices
//!Interested in the entire frontend spectrum and working on ambitious projects with positive people.
//! The main area of my expertise is front-end development



// . I am highly motivated, versatile and adaptive. Looking to learn and contribute to my environment
// using both my personal and professional skills.
