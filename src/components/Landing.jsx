import React from 'react';
import styled from 'react-emotion';

import { breakpoint, color, spacer, typography } from '@/styles';

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  text-align: center;
  text-transform: uppercase;
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
  margin: ${spacer(3)} 0 0;
  padding: ${spacer(3)} ${spacer(4)};
  width: 100%;

  ${breakpoint('medium')} {
    width: auto;
  }
`;

// TODO: add links/icons for github, linkedin, and resume
export default function Landing({ title, subTitle }) {
  return (
    <Header>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Header>
  );
}
