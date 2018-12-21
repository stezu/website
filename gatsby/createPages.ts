import { GatsbyCreatePages } from '../types';

const createPages: GatsbyCreatePages = async ({
  graphql,
  actions: { createPage }
}) => {
  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            code {
              scope
            }
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  result.data.allMdx.edges.forEach(({ node }: { node: any }) => {
    createPage({
      path: node.frontmatter.path,
      component: node.fileAbsolutePath,
      context: {
        id: node.id
      }
    });
  });

  return null;
};

export default createPages;
