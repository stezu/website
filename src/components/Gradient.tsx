import React from 'react';
import styled from '@emotion/styled';

import { cssLock, gradient, spacer } from '@/styles';
import { Gradient } from '@/styles/gradient';

interface StyledComponentProps {
  gradientName: Gradient;
}

interface GradientProps {
  children: React.ReactNode;
  className?: string;
  theme: Gradient;
}

const Wrapper = styled.main<StyledComponentProps>`
  ${cssLock('padding', spacer('small'), spacer('medium'))};

  background: ${({ gradientName }) => gradient(gradientName).background};
  color: ${({ gradientName }) => gradient(gradientName).text};
  display: flex;
  min-height: 100%;
`;

const Content = styled.div<StyledComponentProps>`
  background: ${({ gradientName }) => gradient(gradientName).foreground};
  flex: 1;
`;

const GradientComponent: React.FunctionComponent<GradientProps> = ({
  children,
  className,
  theme,
}) => (
  <Wrapper gradientName={theme}>
    <Content className={className} gradientName={theme}>
      {children}
    </Content>
  </Wrapper>
);

export default GradientComponent;
