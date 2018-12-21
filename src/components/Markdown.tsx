import React from 'react';
import styled from '@emotion/styled';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';

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

const Markdown: React.SFC<MarkdownProps> = ({ children, ...restProps }) => (
  <MDXProvider
    components={{
      h1: H1,
      p: P
    }}
  >
    <MDXRenderer {...restProps}>{children}</MDXRenderer>
  </MDXProvider>
);

export default Markdown;
