import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { typography } from '@/styles';

interface MarkdownProps {
  children: React.ReactNode;
}

const H1 = styled.h1`
  ${typography('Title 1')};
`;

const H2 = styled.h2`
  ${typography('Title 2')};
`;

const H3 = styled.h3`
  ${typography('Title 3')};
`;

const H4 = styled.h4`
  ${typography('Title 4')};
`;

const H5 = styled.h5`
  ${typography('Title 5')};
`;

const H6 = styled.h6`
  ${typography('Title 6')};
`;

const P = styled.p`
  ${typography('Body 1')};
`;

const UL = styled.ul`
  ${typography('Body 1')};
`;

const OL = styled.ol`
  ${typography('Body 1')};
`;

const LI = styled.li`
  ${typography('Body 1')};
`;

const Small = styled.small`
  ${typography('Body 2')};
`;

const Markdown: React.FunctionComponent<MarkdownProps> = ({ children }) => (
  <MDXProvider
    components={{
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      ul: UL,
      ol: OL,
      li: LI,
      small: Small,
    }}
  >
    {children}
  </MDXProvider>
);

export default Markdown;
