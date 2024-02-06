import { ReactNode } from 'react';

type BlogPostData = {
  anchor?: string;
  date: string;
  renderBody: (styles: Record<string, string>) => ReactNode;
};

export default BlogPostData;
