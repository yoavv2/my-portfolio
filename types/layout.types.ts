import { IPostType } from './post.types';

export interface IMetaProps
  extends Pick<IPostType, 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
