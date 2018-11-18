import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { color, cssLock, spacer } from '@/styles';

const GRADIENT = `linear-gradient(${color('salmon')}, ${color('jellybean')})`;
const SOLID_DARK = color('gunmetal');
const SOLID_LIGHT = color('white');
const LIGHT_TEXT = color('seashell');
const DARK_TEXT = color('gunmetal');

const THEMES = {
  DARK: {
    background: GRADIENT,
    foreground: SOLID_DARK,
    text: LIGHT_TEXT
  },
  DISPLAY: {
    background: SOLID_DARK,
    foreground: GRADIENT,
    text: LIGHT_TEXT
  },
  LIGHT: {
    background: GRADIENT,
    foreground: SOLID_LIGHT,
    text: DARK_TEXT
  }
};

const Wrapper = styled.main`
  ${cssLock('padding', spacer(3), spacer(4))};

  background: ${({ theme }) => THEMES[theme].background};
  color: ${({ theme }) => THEMES[theme].text};
  display: flex;
  min-height: 100%;
`;

const Content = styled.div`
  background: ${({ theme }) => THEMES[theme].foreground};
  flex: 1;
`;

export default function Gradient({ children, className, theme }) {
  return (
    <Wrapper theme={theme}>
      <Content className={className} theme={theme}>
        {children}
      </Content>
    </Wrapper>
  );
}
Gradient.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired
};
