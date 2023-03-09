import { Request, Response } from 'express';

interface Repo {
  name: string;
  default_branch: string;
}

interface RepoWithDetails extends Repo {
  readme: string;
  languages: Record<string, number>;
}

async function getRepos(): Promise<Repo[]> {
  const url = 'https://api.github.com/users/yoavv2/repos';
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  const repos = await response.json();
  return repos;
}

async function getRepoDetails(repo: Repo): Promise<RepoWithDetails> {
  const readmeUrl = `https://raw.githubusercontent.com/yoavv2/${repo.name}/${repo.default_branch}/README.md`;
  const languagesUrl = `https://api.github.com/repos/yoavv2/${repo.name}/languages`;
  const [readmeResponse, languagesResponse] = await Promise.all([
    fetch(readmeUrl, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }),
    fetch(languagesUrl, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }),
  ]);
  const readme = await readmeResponse.text();
  const languagesJson = await languagesResponse.json();
  return {
    ...repo,
    readme,
    languages: languagesJson,
  };
}

export default async function handler(req: Request, res: Response) {
  try {
    const repos = await getRepos();
    const promises = repos.map(getRepoDetails);
    const allRepos = await Promise.all(promises);
    res.status(200).json(allRepos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
