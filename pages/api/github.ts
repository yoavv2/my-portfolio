import { ProjectType } from '../../types/project';
// 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

export default async (req: any, res: ProjectType) => {
  const reposURL = 'https://api.github.com/users/yoavv2/repos';
  const readmeURL = 'https://raw.githubusercontent.com/yoavv2/';

  const lenguagesURL = (repoName: string): string =>
    `https://api.github.com/repos/yoavv2/${repoName}/languages`;

  const response = await fetch(reposURL, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  const json = await response.json();

  const promises = json?.map(async (repo: any) => {
    const readmeResponse = await fetch(
      `${readmeURL}/${repo.name}/${repo.default_branch}/README.md`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const languigesResponse = await fetch(`${lenguagesURL(repo.name)}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const languigesJson = await languigesResponse.json();

    const readme = await readmeResponse.text();

    repo.readme = readme;
    repo.languages = languigesJson;

    return repo;
  });

  const allRepos = await Promise.all(promises);
  console.log(allRepos);
  return res.status(200).json({
    repos: allRepos,
  });
};

// console.log(projectsList[0]);
// return res.status(200).json({
//   repos: projectsList,
// });
