import Link from 'next/link';

function NavLink({ to, children, styling = 'mx-4' }) {
  console.log(styling);

  return (
    <Link href={to}>
      <a className={`mx-4 ${styling}`}>{children}</a>
    </Link>
  );
}

export default NavLink;
