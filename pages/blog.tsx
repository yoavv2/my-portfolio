import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { IPostType } from '../types/post.types';
import { getAllPosts } from '../lib/api';
import PostCard from '../components/PostCard';

type IndexProps = {
  posts: IPostType[];
};

const url = 'https://yoavhevroni.click/blog';
const title = "Yoav's Blog";
const description = 'Yoav Hevroni Blog';

const blog: React.FC<IndexProps> = ({ posts }): JSX.Element => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    },
  };

  // Sort posts by date
  const sortedPosts = [...posts].sort((a, b) => {
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
          site_name: 'Yoav Hevroni Blog',
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-mono text-4xl font-bold md:text-5xl lg:text-6xl">
            Welcome to my Blog
          </h1>
          <p className="mx-auto max-w-2xl font-mono text-gray-600 dark:text-gray-300">
            Here I share my thoughts, experiences, and learnings about web development,
            technology, and everything in between.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sortedPosts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
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
