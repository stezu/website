import React from 'react';
import { Helmet } from 'react-helmet';

import { Gradient } from '@/components';
import { SITE_TITLE, SITE_SUBTITLE } from '@/constants';

import { Landing } from '@/views';

const IndexPage: React.FunctionComponent = () => (
  <Gradient theme="dark">
    <Helmet>
      <title>
        {SITE_TITLE} | {SITE_SUBTITLE}
      </title>
    </Helmet>
    <Landing title={SITE_TITLE} subTitle={SITE_SUBTITLE} />
  </Gradient>
);

export default IndexPage;
