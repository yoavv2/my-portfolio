import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
// import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import { motion } from 'framer-motion';

type IndexProps = {
  posts: PostType[];
};

const blog = ({ posts }: IndexProps): JSX.Element => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  posts?.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      {/* <Layout size='max-w-5xl'> */}
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className=' container mx-auto'
      >
        <h1 className='  mb-12 text-center font-mono text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
          Hi,
        </h1>
        <h2 className=' font-mono'> Welcome to my blog</h2>
        <p className=' font-mono'>
          here you can find things that i want to keep for myself
        </p>
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible'>
        {posts.map((post) => (
          <motion.article
            variants={item}
            key={post?.slug}
            className='mt-12   border-b-2 sm:border-none'
          >
            <p className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
              {format(parseISO(post?.date), 'MMMM dd, yyyy')}
            </p>

            <Link as={`/posts/${post?.slug}`} href={`/posts/[slug]`}>
              <a
                className='  text-gray-900 
            hover:cursor-pointer dark:text-white '
              >
                <h1 className='font-mdm  mb-2 text-xl'>{post.title}</h1>

                <p className=' font-mdm mb-3 leading-tight'>
                  {post?.description}
                </p>

                <img
                  src={`/images/${post?.image}`}
                  alt={post?.title}
                  width={400}
                  height={400}
                />
                <h2 className='mb-20 mt-8 font-mono text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
                  <span className='hoverAnimation hover:underline'>
                    Read more
                  </span>
                  .
                </h2>
              </a>
            </Link>
          </motion.article>
        ))}
      </motion.div>
      {/* </Layout> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'image']);

  return {
    props: { posts },
  };
};

export default blog;
