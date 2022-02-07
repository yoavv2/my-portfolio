import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Image from 'next/image';

type IndexProps = {
  posts: PostType[];
};

const blog = ({ posts }: IndexProps): JSX.Element => {
  console.log('image : ', posts[0].image);
  return (
    <>
      {posts.map((post) => (
        <article key={post.slug} className='mt-12'>
          <p className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
            {format(parseISO(post?.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className='mb-2 text-xl'>
            <Link as={`/posts/${post?.slug}`} href={`/posts/[slug]`}>
              <a className='text-gray-900 dark:text-white dark:hover:text-blue-400'>
                {post.title}
              </a>
            </Link>
          </h1>
          <p className='mb-3'>{post?.description}</p>

          <img
            src={`/images/${post?.image}`}
            alt={post?.title}
            width={400}
            height={400}
          />
          <p>
            <Link as={`/posts/${post?.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
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
