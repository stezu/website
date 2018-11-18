import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { SITE_SUBTITLE, SITE_TITLE } from '@/constants';
import { Transition } from '@/components';
import { globalStyles } from '@/styles';

// Render all global styles
globalStyles();

const Layout = ({ children, location }) => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,900"
        rel="stylesheet"
      />
      <title>
        {SITE_TITLE} | {SITE_SUBTITLE}
      </title>
    </Helmet>
    <Transition location={location}>{children}</Transition>
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
