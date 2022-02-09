import useSWR, { Key, Fetcher } from 'swr';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ProjectType } from '../types/project';

{
  /* const Projects = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>)  */
}
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
const Projects = () => {
  const { data, error } = useSWR('/api/github', fetcher);
  console.log(error);
  if (!data)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div>
      {data?.repos.map((p) => (
        <div className=' my-300 flex flex-col justify-between  border border-zinc-100'>
          <h2 className=' '>{p.name}</h2>
          <p>{p.description}</p>
          <Link href={`${p.html_url}`}>
            <a> view project</a>
          </Link>

          <p>{p.language}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
