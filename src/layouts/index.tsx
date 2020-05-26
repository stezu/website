import React from 'react';
import { Helmet } from 'react-helmet';

import { SITE_SUBTITLE, SITE_TITLE } from '@/constants';
import { GlobalStyles, Transition } from '@/components';
import { color } from '@/styles';

interface LayoutProps {
  children: React.ReactNode;
  location: Location;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  location,
}) => (
  <GlobalStyles>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={color('gunmetal')} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,900"
        rel="stylesheet"
      />
      <title>
        {SITE_TITLE} | {SITE_SUBTITLE}
      </title>
    </Helmet>
    <Transition location={location}>{children}</Transition>
  </GlobalStyles>
);

export default Layout;
