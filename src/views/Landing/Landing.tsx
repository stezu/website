import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

// @ts-ignore SVGs import configuration is finicky
import GithubMark from '@/assets/github-mark.svg';
// @ts-ignore SVGs import configuration is finicky
import LinkedInMark from '@/assets/linkedin-mark.svg';

import { breakpoint, color, spacer, typography } from '@/styles';

import { IconLinkList, RotatingCube } from './blocks';

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
`;

const cubeContainerStyles = css`
  min-width: 100%;
  transition: min-width 250ms;
  will-change: min-width;

  ${breakpoint('large')} {
    min-width: 0;
  }
`;

const Title = styled.h1`
  ${typography('Title 1')};

  color: ${color('white')};
  margin: 0 0 ${spacer('small')};
`;

const subTitleBox = css`
  ${cubeContainerStyles};
  ${typography('Title 2')};

  background: ${color('white')};
  color: ${color('gunmetal')};
  margin: 0;
  padding: ${spacer('small')} ${spacer('medium')};
`;

const SubTitle = styled.h2`
  ${subTitleBox}
`;

const Landing: React.FunctionComponent<LandingProps> = ({
  title,
  subTitle,
}) => (
  <Header>
    <Title>{title}</Title>
    <RotatingCube css={cubeContainerStyles}>
      <RotatingCube.FrontFace>
        <SubTitle>{subTitle}</SubTitle>
      </RotatingCube.FrontFace>
      <RotatingCube.BottomFace>
        <IconLinkList css={subTitleBox}>
          <IconLinkList.ListItem
            href="https://github.com/stezu"
            label="My GitHub Profile"
            target="_blank"
          >
            <GithubMark />
          </IconLinkList.ListItem>
          <IconLinkList.ListItem
            href="https://www.linkedin.com/in/stezu/"
            label="My LinkedIn Profile"
            target="_blank"
          >
            <LinkedInMark />
          </IconLinkList.ListItem>
        </IconLinkList>
      </RotatingCube.BottomFace>
    </RotatingCube>
  </Header>
);

export default Landing;
