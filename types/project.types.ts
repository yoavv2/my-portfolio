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

type RemoveUpdateAtField<T> = {
  [K in keyof T as Exclude<K, 'updated_at'>]: T[K];
};

export interface IRepository extends RemoveUpdateAtField<IProject> {
  setRepoName: (name: string) => void;
}
