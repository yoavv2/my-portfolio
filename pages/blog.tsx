import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { IPostType } from '../types/post.types';
import { getAllPosts } from '../lib/api';

type IndexProps = {
  posts: IPostType[];
};

const url = 'https://yoavhevroni.click/blog';
const title = "Yoav's Blog";
const description = 'Yoav Hevroni Blog';
// const image = 'https://site-yoavv2.vercel.app/static/images/yoav-profile.jpg';

const blog: React.FC<IndexProps> = ({ posts }): JSX.Element => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        staggerDirection: -1,
        ease: 'easeOut',
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
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          // images: [image],
          site_name: 'Yoav Hevroni Blog',
        }}
      />

      {/* <Layout size='max-w-5xl'> */}
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='container mx-auto '
      >
        <h1 className='mb-12 font-mono text-5xl font-bold leading-tight tracking-tighter text-center  md:text-left md:text-7xl md:leading-none lg:text-8xl'>
          Hi,
        </h1>
        <h2 className='font-mono '> Welcome to my blog</h2>
        <p className='font-mono '>
          here you can find things that i want to keep for myself
        </p>
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible'>
        {posts.map((post) => (
          <motion.article
            variants={item}
            key={post?.slug}
            className='mt-12 border-b-2 sm:border-none'
          >
            <p className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
              {format(parseISO(post?.date), 'MMMM dd, yyyy')}
            </p>

            <Link as={`/posts/${post?.slug}`} href={`/posts/[slug]`}>
              <a
                className='text-gray-900 hover:cursor-pointer dark:text-white'
              >
                <h1 className='mb-2 text-xl font-mdm'>{post.title}</h1>

                <p className='mb-3 leading-tight  font-mdm'>
                  {post?.description}
                </p>

                <img
                  src={`/images/${post?.image}`}
                  alt={post?.title}
                  width={400}
                  height={400}
                />
                <h2 className='mt-8 mb-20 font-mono text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
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
