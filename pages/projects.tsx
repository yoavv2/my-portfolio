import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Card from '../components/Card';
import ReactMarkdown from 'react-markdown';
import { IProject } from '../types/project.types';
import Rive from '@rive-app/react-canvas';

const url = 'https://site-yoavv2.vercel.app/';
const title = "Yoav's Portfolio";
const description = 'Projects and Experiences';
// const image = 'https://site-yoavv2.vercel.app/static/images/yoav-profile.jpg';

export async function fetcher<JSON = any>(
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
        className='group relative my-10 ml-4 inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-mono font-bold'
      >
        <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-slate-300 opacity-[3%] dark:bg-white'></span>
        <span className='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-red-300 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8 dark:bg-amber-300'></span>
        <span className='relative w-full text-left text-teal-900 transition-colors duration-200 ease-in-out dark:text-white dark:group-hover:text-gray-900'>
          github
        </span>
        <span className='absolute inset-0 rounded-full border-2 border-black dark:border-white'></span>
      </a>
    </Link>
  </div>
);

const Projects = () => {
  const [isSmall, setIsSmall] = React.useState<boolean>(false);
  const [repoName, setRepoName] = React.useState<string>('');

  let memoProjects = [];

  React.useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      setIsSmall(window.innerWidth < 640 ? true : false);
    });
  }, [setIsSmall]);

  const {
    data, // default value is []
    //if data is undefined or null or empty array otherwise data is assigned to projects
    // variable and projects is assigned to data.projects which is an array of projects type (ProjectType)

    error,
  } = useSWR<IProject[]>('/api/github', fetcher, {
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
    memoProjects = React.useMemo(
      () =>
        data?.sort(
          (a: IProject, b: IProject) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        ),
      [data]
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
          // images: [image],
          site_name: 'Yoav Hevroni Portfolio',
        }}
      />
      <h1 className='font-mdm flex items-center justify-center'> Projects </h1>

      {!!memoProjects.length && (
        <ul
          className='mx-auto flex flex-col items-center justify-center
                    overflow-x-scroll rounded-xl sm:flex-row sm:justify-start sm:p-12'
        >
          {memoProjects?.map((project: IProject) => (
            <li key={project.name}>
              <Card
                name={project.name}
                html_url={project.html_url}
                description={project.description}
                languages={project.languages}
                language={project.language}
                created_at={project.created_at}
                setRepoName={setRepoName}
                homepage={project.homepage}
              />
            </li>
          ))}
        </ul>
      )}
      {data.length > 0 ? (
        <div className=' flex justify-center'>
          {!isSmall && !!repoName.length && (
            <article className='shadow-3xl my-10 flex min-w-full flex-col items-start rounded-lg border border-dashed border-b-slate-500 bg-yellow-100  p-4 dark:border-white dark:bg-slate-700 dark:shadow-gray-700'>
              {/* find the repository readme by the name */}
              <ReactMarkdown>
                {data?.find((repo: any) => repo.name == repoName)?.readme}
              </ReactMarkdown>
            </article>
          )}
        </div>
      ) : (
        showSomethingWentWrong()
      )}
    </>
  );
};

export default Projects;
