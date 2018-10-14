import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { Gradient, Link } from '@/components';
import { SITE_TITLE } from '@/constants';
import { breakpoint, cssLock, spacer, typography } from '@/styles';

const Wrapper = styled.div`
  ${cssLock('padding', spacer(3), spacer(4))};

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
`;

// TODO: add styles
const PageTitle = styled.h1`
  ${typography('Title 1')};
`;
const PageContent = styled.p`
  ${typography('Body 1')};
`;

export default function PageNotFound() {
  const pageSubtitle = 'Page Not Found';

  return (
    <Fragment>
      <Helmet>
        <title>
          {pageSubtitle} | {SITE_TITLE}
        </title>
      </Helmet>
      <Gradient location="foreground">
        <Wrapper>
          <PageTitle>404 | {pageSubtitle}</PageTitle>
          <PageContent>
            The page you were looking for doesn't exist,
            {' '}<Link to="/">go back</Link>
          </PageContent>
        </Wrapper>
      </Gradient>
    </Fragment>
  );
}
