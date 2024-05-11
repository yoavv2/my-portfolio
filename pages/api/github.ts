// Refactored code:
import { Response } from 'express';
export default async (req: any, res: Response) => {
  const reposURL = 'https://api.github.com/users/yoavv2/repos';

  const readmeURL = (repoName: string, repoBranch: string): string =>
    `https://raw.githubusercontent.com/yoavv2/${repoName}/${repoBranch}/README.md`;

  const languagesURL = (repoName: string): string =>
    `https://api.github.com/repos/yoavv2/${repoName}/languages`;

  try {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(reposURL, {
      headers: { Authorization: `token ${token}` },
    });

    const jsonData = await response.json();

    if (!jsonData) return res.status(500).json({ error: 'No data found' });

    const promises = jsonData?.map(async (repo: any) => {
      const readmeResponse = await fetch(
        readmeURL(repo.name, repo.default_branch),
        { headers: { Authorization: `token ${token}` } }
      );
      const languagesResponse = await fetch(languagesURL(repo.name), {
        headers: { Authorization: `token ${token}` },
      });

      const languagesJson = await languagesResponse.json();
      const readme = await readmeResponse.text();

      repo.readme = readme;
      repo.languages = languagesJson;

      return repo;
    });

    const allRepos = await Promise.all(promises);

    res.status(200).json(allRepos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
