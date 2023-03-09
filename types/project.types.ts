export interface IProject {
  name: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  language: string;
  languages: string[];
  description?: string;
  homepage?: string;
  stars?: string;
  readme?: any;
}

export interface IRepository extends IProject {
  setRepoName: (name: string) => void;
}
