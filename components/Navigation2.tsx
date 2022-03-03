import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ThemeSwitch from './ThemeSwitch';

function Navigation2() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <nav className=' flex space-x-2 '>
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
        >
          <ThemeSwitch />
        </motion.div>
        <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='/'>
            <a className='p-5'>
              <svg
                className='h-10 w-10 fill-gray-600'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  opacity='0.25'
                  d='M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z'
                  fill='var(--colors-gray10)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z'
                  fill='var(--colors-gray10)'
                />
                <path
                  d='M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z'
                  fill='var(--colors-gray10)'
                />
              </svg>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className='  flex h-12 w-12 items-center justify-center
            rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white '
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='/blog'>
            <a className='p-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  d='M3.69601 15.8112L2.15894 19.91C1.70676 21.1158 2.88429 22.2934 4.09012 21.8412L8.18896 20.3041C8.72361 20.1036 9.20914 19.791 9.6129 19.3872L10 19L5 14L4.6129 14.3872C4.20914 14.791 3.8965 15.2765 3.69601 15.8112Z'
                  fill='var(--colors-gray10)'
                />
                <path
                  opacity='0.25'
                  d='M5 14L10 19L19.5 9.5L14.5 4.5L5 14Z'
                  fill='var(--colors-gray10)'
                />
                <path
                  d='M20.8787 8.12136L19.5 9.5L14.5 4.5L15.8787 3.12135C17.0503 1.94978 18.9497 1.94978 20.1213 3.12136L20.8787 3.87872C22.0503 5.05029 22.0503 6.94978 20.8787 8.12136Z'
                  fill='var(--colors-gray10)'
                />
              </svg>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className='  flex h-12 w-12 items-center justify-center
            rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white '
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='/projects'>
            <a className='p-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  d='M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z'
                  fill='var(--colors-gray10)'
                />
                <path
                  opacity='0.25'
                  d='M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z'
                  fill='var(--colors-gray10)'
                />
                <path
                  d='M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z'
                  fill='var(--colors-gray10)'
                />
              </svg>
            </a>
          </Link>
        </motion.div>
        <hr className='h-11 w-1 rounded-lg bg-gray-400 dark:bg-gray-200' />
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='mailto:yoavhevroni1@gmail.com'>
            <a className='p-5' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  opacity='0.25'
                  d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z'
                  fill='var(--colors-gray10)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z'
                  fill='var(--colors-gray10)'
                />
              </svg>
            </a>
          </Link>
        </motion.div>
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='https://github.com/yoavv2'>
            <a className='p-5' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                fill='currentColor'
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path d='M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z' />
              </svg>
            </a>
          </Link>
        </motion.div>
        <motion.div
          className='  flex h-12 w-12 items-center justify-center  rounded-lg bg-gray-200 text-gray-900  dark:bg-gray-800 dark:text-white'
          whileHover={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileFocus={{
            scale: 0.95,
            y: -10,
            x: -5,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.85 }}
          style={{ borderRadius: '20%' }}
        >
          <Link href='https://www.linkedin.com/in/yoavhevroni/'>
            <a className='p-5' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='34'
                viewBox='0 0 34 34'
              >
                <title>LinkedIn</title>

                <g>
                  <path
                    d='M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z'
                    // fill='currentColor'
                    className='fill-gray-800 dark:fill-gray-200'
                  />
                </g>
              </svg>
            </a>
          </Link>
        </motion.div>
      </nav>
    </>
  );
}

export default Navigation2;
