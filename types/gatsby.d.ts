interface PageInput {
  path: string;
  component: string;
  layout?: string;
  context?: any;
}

interface ActionCreators {
  createPage: (page: PageInput) => void;
  deletePage: (page: PageInput) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
}

interface GraphQLResult {
  errors: Error[];
  data: any;
}

export type GatsbyCreatePages = (fns: {
  graphql: (query: string) => PromiseLike<GraphQLResult>;
  actions: ActionCreators;
}) => PromiseLike<any>;
