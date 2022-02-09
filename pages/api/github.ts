import { ProjectType } from '../../types/project';

export default async (req: any, res: ProjectType) => {
  const url = 'https://api.github.com/users/yoavv2/repos';
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  const projectsList: ProjectType[] = [];

  json.forEach((p: ProjectType) => {
    projectsList.push({
      name: p.name,
      //   stars: p.stargazers_count,
      html_url: p.html_url,
      description: p.description,
      language: p.language,
    });
  });
  console.log(projectsList);
  return res.status(200).json({
    repos: projectsList,
  });
};

