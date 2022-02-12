import useSWR, { Key, Fetcher } from 'swr';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ProjectType } from '../types/project';
import Card from '../components/Card';
import { useState } from 'react';

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const Projects = () => {
  const { data, error } = useSWR('/api/github', fetcher);
  const [repoName, setRepoName] = useState<string>('');

  if (error)
    return (
      <div className='flex flex-col items-center'>
        Sorry API rate limit exceeded :( You can check out my projects on github
        instead{' '}
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
  if (!data)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  console.log(data);

  data.repos.sort((a: any, b: any) => (a.created_at > b.created_at ? -1 : 1));

  return (
    <>
      <section className='flex  overflow-x-scroll p-12'>
        {data?.repos.map((project: ProjectType) => (
          <div key={project.name}>
            {/* <h2 className=' '>{project.name}</h2>
          <p>{project.description}</p>
          <Link href={`${project.html_url}`}>
            <a target='_blank'> view project</a>
          </Link>
          <p>{project.language}</p>
          <ReactMarkdown>{project.readme}</ReactMarkdown> */}
            <Card
              name={project.name}
              html_url={project.html_url}
              description={project.description}
              languages={project.languages}
              language={project.language}
              created_at={project.created_at}
              setRepoName={setRepoName}
            />
          </div>
        ))}
      </section>
      <div className=' flex justify-center'>
        <article className='my-10  flex flex-col items-start border border-dashed border-b-slate-500 px-4 dark:border-white'>
          {/* find the repository readme by the name  */}

          <ReactMarkdown>
            {data?.repos?.find((repo: any) => repo.name == repoName)?.readme}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
};

export default Projects;
