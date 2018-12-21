declare module 'gatsby-mdx/mdx-renderer' {
  import * as React from 'react';

  export default class MdxRenderer extends React.Component<any> {}
}

declare module 'gatsby-mdx/component-with-mdx-scope' {
  import * as React from 'react';

  export default function componentWithMdxScope(
    path: string,
    options: Object
  ): React.Component;
}
