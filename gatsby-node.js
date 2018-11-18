const path = require('path');

const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            code {
              scope
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // Create blog posts pages.
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: componentWithMDXScope(
          path.resolve('./src/templates/blogTemplate.jsx'),
          node.code.scope
        ),
        context: {
          id: node.id
        }
      });
    });
  });
};
