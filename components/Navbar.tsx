import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen transform bg-white ${
        open ? 'translate-x-0' : '-translate-x-full'
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className='flex h-20 items-center justify-center bg-white drop-shadow-md filter'>
        <NavLink to='/' styling='text-blue-400'>
          Home
        </NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className=' xs:block  flex items-center bg-white px-4 py-4 drop-shadow-md filter sm:hidden md:hidden lg:hidden xl:hidden'>
      <MobileNav open={open} setOpen={setOpen} />

      <div className='flex w-9/12 items-center justify-end'>
        <div
          className='relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? 'translate-y-3.5 rotate-45' : ''
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? '-translate-y-3.5 -rotate-45' : ''
            }`}
          />
        </div>

        <div className='hidden md:flex'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
        </div>
      </div>
    </nav>
  );
}
