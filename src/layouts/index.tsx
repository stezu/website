import React from 'react';
import { Helmet } from 'react-helmet';

import { SITE_SUBTITLE, SITE_TITLE } from '@/constants';
import { GlobalStyles, Transition } from '@/components';

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
      <meta
        name="description"
        content="Experienced Senior Software Engineer with a demonstrated history in the computer software industry. Proficient in JavaScript, TypeScript, RESTful API design, and Web Architecture/Infrastructure."
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap"
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
