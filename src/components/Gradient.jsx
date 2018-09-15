import React from 'react';
import styled from 'react-emotion';

import { breakpoint, color, spacer } from '@/styles';

const GRADIENT = `linear-gradient(${color('salmon')}, ${color('jellybean')})`;
const SOLID = color('gunmetal');

const Wrapper = styled.main`
  background: ${({ location }) => (location === 'foreground' ? SOLID : GRADIENT)};
  color: ${color('seashell')};
  display: flex;
  min-height: 100%;
  padding: ${spacer(3)};
  transition: padding 150ms;

  ${breakpoint('medium')} {
    padding: ${spacer(4)};
  }
`;

const Content = styled.div`
  background: ${({ location }) => (location === 'foreground' ? GRADIENT : SOLID)};
  flex: 1;
`;

export default function Gradient({ children, className, location }) {
  return (
    <Wrapper location={location}>
      <Content className={className} location={location}>
        {children}
      </Content>
    </Wrapper>
  );
}
