import Link from 'next/link';
import React from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, hoverColor }) => {
  return (
    <Link href={href}>
      <a
        target='_blank'
        aria-label={label}
        className='group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
      >
        <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gray-300 opacity-[3%] dark:bg-white'></span>
        <span
          className={`absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 ${hoverColor} opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8`}
        ></span>
        <span className='relative w-full text-center text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
          {label}
        </span>
        <span className='absolute inset-0 rounded-full border-2 border-black dark:border-white'></span>
      </a>
    </Link>
  );
};

export default SocialLink;
