import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import { Gradient, Markdown } from '@/components';
import { SITE_TITLE } from '@/constants';
import { color, cssLock, spacer, typography } from '@/styles';

interface TemplateProps {
  children: React.ReactNode;
  pageContext: {
    frontmatter: {
      path: string;
      title: string;
      date: string;
    };
  };
}

const Wrapper = styled.div`
  ${cssLock('padding', spacer('small'), spacer('medium'))};

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

const Template: React.SFC<TemplateProps> = ({
  children,
  pageContext,
  ...restProps
}) => (
  <>
    <Helmet>
      <title>
        {pageContext.frontmatter.title} - {pageContext.frontmatter.date} |{' '}
        {SITE_TITLE}
      </title>
    </Helmet>
    <Gradient theme="light">
      <Wrapper>
        <PageTitle>{pageContext.frontmatter.title}</PageTitle>
        <PageMeta>{pageContext.frontmatter.date}</PageMeta>
        {children}
      </Wrapper>
    </Gradient>
  </>
);

export default Template;
