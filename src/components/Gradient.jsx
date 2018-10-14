import React from 'react';
import styled from 'react-emotion';
import { fluidRange } from 'polished';

import { breakpoint, color, cssLock, spacer } from '@/styles';

const GRADIENT = `linear-gradient(${color('salmon')}, ${color('jellybean')})`;
const SOLID = color('gunmetal');

const Wrapper = styled.main`
  ${cssLock('padding', spacer(3), spacer(4))};

  background: ${({ location }) => (location === 'foreground' ? SOLID : GRADIENT)};
  color: ${color('seashell')};
  display: flex;
  min-height: 100%;
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
