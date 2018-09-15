import styled from 'react-emotion';
import { darken } from 'polished';
import GatsbyLink from 'gatsby-link';


import { color } from '@/styles';

// TODO: add dotted underline
const Link = styled(GatsbyLink)`
  color: ${color('seashell')};
  transition: color 200ms;

  &:hover,
  &:focus {
    color: ${darken(0.1, color('seashell'))};
  }
`;

export default Link;
