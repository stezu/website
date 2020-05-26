import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import { Gradient, Link } from '@/components';
import { SITE_TITLE } from '@/constants';
import { cssLock, spacer, typography } from '@/styles';

const Wrapper = styled.div`
  ${cssLock('padding', spacer('small'), spacer('medium'))};

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

const PAGE_SUBTITLE = 'Page Not Found';

const PageNotFound: React.FunctionComponent = () => (
  <>
    <Helmet>
      <title>
        {PAGE_SUBTITLE} | {SITE_TITLE}
      </title>
    </Helmet>
    <Gradient theme="display">
      <Wrapper>
        <PageTitle>404 | {PAGE_SUBTITLE}</PageTitle>
        <PageContent>
          The page you were looking for doesn&apos;t exist,{' '}
          <Link to="/">go back</Link>
        </PageContent>
      </Wrapper>
    </Gradient>
  </>
);

export default PageNotFound;
