import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React, { useEffect, useState } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
// import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { IPostType } from '../../types/post.types';
import { IMetaProps } from '../../types/layout.types';

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import Layout from '../../components/Layout';
import DropDown from '../../components/DropDown';

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
  DropDown,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: IPostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const customMeta: IMetaProps = {
    title: `${frontMatter.title} - Hunter Chang`,
    description: frontMatter.description,
    // image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.naqzq6xZiJ86Wb-8ctbLhgHaEK%26pid%3DApi&f=1`,
    date: frontMatter.date,
    type: 'article',
  };
  return (
    <>
      {/* <Layout padding='px-4'> */}
      <h2 className='font-mdm mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
        <Link href='/blog'>
          <a className='hover:underline'>Back to Blog</a>
        </Link>
        .
      </h2>
      <article className='border-l-2 border-dotted pl-2 sm:ml-32'>
        <svg
          className={`w-16s fixed top-5 right-5  z-50 h-16 md:top-10 md:right-10 md:h-20 md:w-20 
          
          `}
          viewBox='0 0 60 60'
        >
          <motion.path
            fill='none'
            strokeWidth='5'
            stroke='white'
            strokeDasharray='0 1'
            d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.path
            fill='none'
            strokeWidth='5'
            stroke='white'
            d='M14,26 L 22,33 L 35,16'
            initial={false}
            strokeDasharray='0 1'
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
        <h1 className='mb-3 text-gray-900 dark:text-white'>
          {frontMatter.title}
        </h1>
        <p className='mb-10  text-sm text-gray-500 dark:text-gray-400'>
          {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
        </p>
        <div className='prose dark:prose-dark '>
          <MDXRemote {...source} components={components} />
        </div>
      </article>
      {/* </Layout> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
