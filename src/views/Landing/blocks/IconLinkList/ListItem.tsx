import React from 'react';
import { hideVisually } from 'polished';
import styled from '@emotion/styled';

import { color, spacer } from '@/styles';

const ICON_PADDING = spacer('xSmall');

export interface ListItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
  label: string;
}

const LinkListItem = styled.li`
  margin: 0 ${spacer('small')};
`;

const LinkListLink = styled.a`
  color: ${color('gunmetal')};
  display: block;
  outline: none;
  padding: ${ICON_PADDING};
  transition: color 250ms;

  &:hover,
  &:focus {
    color: ${color('salmon')};
  }

  svg {
    display: block;
    fill: currentColor;
    height: calc(1em - ${ICON_PADDING});
    width: calc(1em - ${ICON_PADDING});
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
