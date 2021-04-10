import * as React from 'react';
import { Global, css } from '@emotion/react';
import { normalize } from 'polished';

import { color, typography } from '@/styles';

interface GlobalStylesProps {
  children: React.ReactNode;
}

const globalStyles = css`
  ${normalize()};

  * {
    -webkit-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html,
  body,
  #___gatsby {
    ${typography('Body 1')};

    background: ${color('gunmetal')};
    height: 100%;
  }
`;

const GlobalStyles: React.FunctionComponent<GlobalStylesProps> = ({
  children,
}) => (
  <React.Fragment>
    <Global styles={globalStyles} />
    {children}
  </React.Fragment>
);

export default GlobalStyles;
