import useSWR, { Key, Fetcher } from 'swr';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
// import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ProjectType } from '../types/project';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const Projects = () => {
  const [isSmall, setIsSmall] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsSmall(window.innerWidth < 640 ? true : false);
    });
  }, []);
  const {
    data, // default value is []
    //if data is undefined or null or empty array otherwise data is assigned to projects
    // variable and projects is assigned to data.projects which is an array of projects type (ProjectType)

    error,
  } = useSWR<ProjectType[]>('/api/github', fetcher);
  const [repoName, setRepoName] = useState<string>('');

  if (error)
    return (
      <Layout>
        <div className='flex  flex-col items-center'>
          Sorry something go wrong :( You can check out my projects on github
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
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );

  data?.sort((a: any, b: any) => (a.created_at > b.created_at ? -1 : 1));

  return (
    <Layout size='max-w-screen-xl' padding='px-0'>
      {/* <div className='flex flex-col-reverse'> */}
      {/* className='flex flex-col items-center justify-center overflow-x-scroll
      sm:flex-row sm:p-12' */}
      <section
        className='flex flex-col items-center justify-center overflow-x-scroll p-12
      sm:flex-row sm:justify-start sm:p-12'
      >
        {data?.map((project: ProjectType) => (
          <div key={project.name}>
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
          </div>
        ))}
      </section>
      <div className=' flex justify-center'>
        {!isSmall && (
          <article className='shadow-3xl my-10 flex  min-w-full flex-col items-start rounded-lg border border-dashed border-b-slate-500 bg-yellow-100   p-4 dark:border-white dark:bg-slate-700 dark:shadow-gray-700'>
            {/* find the repository readme by the name  */}

            <ReactMarkdown>
              {data?.find((repo: any) => repo.name == repoName)?.readme}
            </ReactMarkdown>
          </article>
        )}

        {/* </div> */}
      </div>
    </Layout>
  );
};

export default Projects;
