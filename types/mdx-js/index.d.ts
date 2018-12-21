declare module '@mdx-js/tag' {
  import * as React from 'react';

  interface MDXProviderProps {
    children: React.ReactNode;
    components: Object;
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
