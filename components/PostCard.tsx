import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { IPostType } from '../types/post.types';

interface PostCardProps {
  post: IPostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl dark:bg-gray-800"
    >
      <Link href={`/posts/${post.slug}`}>
        <a className="block">
          <div className="relative mb-4 aspect-video overflow-hidden rounded-md">
            <Image
              src={`/images/${post.image}`}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </time>
          
          <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h2>
          
          <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-300">
            {post.description}
          </p>
          
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Read more
            </span>
            <svg
              className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
      </Link>
    </motion.article>
  );
};

export default PostCard;
