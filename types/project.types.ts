type RemovePushedAtField<T> = {
  [K in keyof T as Exclude<K, 'pushed_at'>]: T[K];
};

export interface IProject {
  name: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  languages: string[];
  description?: string;
  homepage?: string;
  stars?: string;
  readme?: any;
}

export interface IRepository extends RemovePushedAtField<IProject> {
  setRepoName: (name: string) => void;
}
