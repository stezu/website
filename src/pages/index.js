import React from 'react';
import Helmet from 'react-helmet';

import { Gradient, Landing } from '@/components';
import { SITE_TITLE, SITE_SUBTITLE } from '@/constants';

const IndexPage = () => (
  <Gradient location="background">
    <Helmet>
      <title>
        {SITE_TITLE} | {SITE_SUBTITLE}
      </title>
    </Helmet>
    <Landing title={SITE_TITLE} subTitle={SITE_SUBTITLE} />
  </Gradient>
);

export default IndexPage;
