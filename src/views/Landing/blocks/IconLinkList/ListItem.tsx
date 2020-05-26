import React from 'react';
import { hideVisually } from 'polished';
import styled from '@emotion/styled';

import { color, spacer } from '@/styles';

export interface ListItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
  label: string;
}

const LinkListItem = styled.li`
  margin: 0 ${spacer('medium')};
`;

const LinkListLink = styled.a`
  color: ${color('gunmetal')};
  display: block;
  padding: ${spacer('tiny')};

  svg {
    display: block;
    fill: currentColor;
    height: 1em;
    width: 1em;
  }
`;

const LinkListLinkText = styled.span`
  ${hideVisually()};
`;

const ListItem: React.FunctionComponent<ListItemProps> = ({
  children,
  href,
  label,
  ...anchorProps
}) => (
  <LinkListItem>
    <LinkListLink {...anchorProps} href={href}>
      <LinkListLinkText>{label}</LinkListLinkText>
      {children}
    </LinkListLink>
  </LinkListItem>
);

export default ListItem;
