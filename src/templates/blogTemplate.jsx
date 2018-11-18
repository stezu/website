import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { graphql } from 'gatsby';

import { Gradient, Markdown } from '@/components';
import { SITE_TITLE } from '@/constants';
import { color, cssLock, spacer, typography } from '@/styles';

const Wrapper = styled.div`
  ${cssLock('padding', spacer(3), spacer(4))};

  height: 100%;
  margin: 0 auto;
  max-width: 1100px;
`;

const PageTitle = styled.h1`
  ${typography('Title 1')};

  margin-bottom: 0;
`;

const PageMeta = styled.small`
  ${typography('Body 2')};

  color: ${color('fadedBlack')};
`;

export default function Template({ data, ...restProps }) {
  return (
    <>
      <Helmet>
        <title>
          {data.mdx.frontmatter.title} - {data.mdx.frontmatter.date} |{' '}
          {SITE_TITLE}
        </title>
      </Helmet>
      <Gradient theme="LIGHT">
        <Wrapper>
          <PageTitle>{data.mdx.frontmatter.title}</PageTitle>
          <PageMeta>{data.mdx.frontmatter.date}</PageMeta>
          <Markdown {...restProps}>{data.mdx.code.body}</Markdown>
        </Wrapper>
      </Gradient>
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
