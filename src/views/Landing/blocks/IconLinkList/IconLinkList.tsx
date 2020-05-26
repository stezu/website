import React from 'react';
import styled from '@emotion/styled';

import ListItem, { ListItemProps } from './ListItem';

interface IconLinkListProps {
  className?: string;
}

const LinkList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface IconLinkListInterface<T> extends React.FunctionComponent<T> {
  ListItem: React.FunctionComponent<ListItemProps>;
}

const IconLinkList: IconLinkListInterface<IconLinkListProps> = ({
  children,
  className,
}) => (
  <LinkList className={className}>
    {React.Children.toArray(children).filter(
      (child) =>
        React.isValidElement(child) &&
        ['function', 'object'].includes(typeof child.type) &&
        child.type === ListItem
    )}
  </LinkList>
);

// Export elements which will be used as the children of the icon link list.
IconLinkList.ListItem = ListItem;

export default IconLinkList;
