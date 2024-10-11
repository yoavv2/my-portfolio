import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { IProject } from '../types/project.types';
import Rive from '@rive-app/react-canvas';
import Card from '../components/Card';

const url = 'https://site-yoavv2.vercel.app/';
const title = "Yoav's Portfolio";
const description = 'Projects and Experiences';

export async function fetcher<JSON = Record<string, unknown>>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const showSomethingWentWrong = () => (
  <div className='flex flex-col items-center'>
    Sorry something go wrong :( You can check out my projects on github instead
    <Link href='https://github.com/yoavv2'>
      <a
        target='_blank'
        className='group relative inline-flex items-center justify-start px-5 py-3 my-10 ml-4 overflow-hidden font-mono font-bold rounded-full'
      >
        <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-slate-300 opacity-[3%] dark:bg-white'></span>
        <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-red-300 opacity-100 group-hover:-translate-x-8 dark:bg-amber-300'></span>
        <span className='relative w-full text-left text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
          github
        </span>
        <span className='absolute inset-0 border-2 border-black rounded-full dark:border-white'></span>
      </a>
    </Link>
  </div>
);

const Projects = () => {
  const [repoName, setRepoName] = React.useState<string>('');

  const { data, error } = useSWR<IProject[]>('/api/github', fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
    refreshWhenHidden: false,
  });

  if (error) {
    return showSomethingWentWrong();
  }

  if (!data)
    return (
      <>
        <Rive src='rive/finger_tapping.riv' className='mx-auto h-96 w-96' />
      </>
    );

  if (Array.isArray(data)) {
    data?.sort(
      (a: IProject, b: IProject) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );
  }

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
          site_name: 'Yoav Hevroni Portfolio',
        }}
      />
      <h1 className='font-mdm flex items-center justify-center'> Projects </h1>

      {!!data.length && (
        <ul className='scrollbar-hide flex flex-col h-auto mx-auto overflow-scroll overflow-y-hidden sm:flex-row sm:justify-start sm:p-12'>
          {data?.map((project: IProject) => (
            <Card
              key={project.name}
              name={project.name}
              html_url={project.html_url}
              description={project.description}
              languages={project.languages}
              created_at={project.created_at}
              setRepoName={setRepoName}
              homepage={project.homepage}
              readme={project.readme}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Projects;
