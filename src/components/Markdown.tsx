import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { typography } from '@/styles';

interface MarkdownProps {
  children: React.ReactNode;
}

const H1 = styled.h1`
  ${typography('Title 1')};
`;

const P = styled.p`
  ${typography('Body 1')};
`;

const Markdown: React.SFC<MarkdownProps> = ({ children }) => (
  <MDXProvider
    components={{
      h1: H1,
      p: P
    }}
  >
    {children}
  </MDXProvider>
);

export default Markdown;
