import React from 'react';
import styled from '@emotion/styled';

import { breakpoint, color, spacer, typography } from '@/styles';

interface LandingProps {
  title: string;
  subTitle: string;
}

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  text-align: center;
  text-transform: uppercase;

  &:hover,
  &:focus-within {
    /*  */
  }
`;

const Title = styled.h1`
  ${typography('Title 1')};

  color: ${color('white')};
  margin: 0;
`;

const SubTitle = styled.h2`
  ${typography('Title 2')};

  background: ${color('white')};
  color: ${color('gunmetal')};
  margin: ${spacer('small')} 0 0;
  min-width: 100%;
  padding: ${spacer('small')} ${spacer('medium')};
  transition: min-width 250ms;

  ${breakpoint('medium')} {
    min-width: 0;
  }
`;

// TODO: add links/icons for github, linkedin, and resume
const Landing: React.SFC<LandingProps> = ({ title, subTitle }) => (
  <Header>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Header>
);

export default Landing;
