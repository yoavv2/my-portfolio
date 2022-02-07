import Link from 'next/link';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href='/'>
        <a className='text-gray-900 dark:text-white pr-6 py-4'>Home</a>
      </Link>
      <Link href='/blog'>
        <a className='text-gray-900 dark:text-white px-6 py-4'>Blog</a>
      </Link>
      <Link href='/projects'>
        <a className='text-gray-900 dark:text-white px-6 py-4'>Projects</a>
      </Link>
    </nav>
  );
};

export default Navigation;
