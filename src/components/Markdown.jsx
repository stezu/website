import React from 'react';
import styled from 'react-emotion';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';

import { typography } from '@/styles';

const H1 = styled.h1`
  ${typography('Title 1')};
`;

const P = styled.p`
  ${typography('Body 1')};
`;

export default function Markdown({ children, ...restProps }) {
  return (
    <MDXProvider
      components={{
        h1: H1,
        p: P
      }}
    >
      <MDXRenderer {...restProps}>{children}</MDXRenderer>
    </MDXProvider>
  );
}
