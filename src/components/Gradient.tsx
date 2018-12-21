import React from 'react';
import styled from '@emotion/styled';

import { cssLock, gradient, spacer } from '@/styles';
import { Gradient } from '@/styles/gradient';

interface StyledComponentProps {
  theme: keyof Gradient;
}

interface GradientProps {
  children: React.ReactNode;
  className?: string;
  theme: keyof Gradient;
}

const Wrapper = styled.main<StyledComponentProps>`
  ${cssLock('padding', spacer('small'), spacer('medium'))};

  background: ${({ theme }) => gradient(theme).background};
  color: ${({ theme }) => gradient(theme).text};
  display: flex;
  min-height: 100%;
`;

const Content = styled.div<StyledComponentProps>`
  background: ${({ theme }) => gradient(theme).foreground};
  flex: 1;
`;

const GradientComponent: React.SFC<GradientProps> = ({
  children,
  className,
  theme
}) => (
  <Wrapper theme={theme}>
    <Content className={className} theme={theme}>
      {children}
    </Content>
  </Wrapper>
);

export default GradientComponent;
