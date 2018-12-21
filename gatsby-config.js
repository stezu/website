module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        allExtensions: true,
        isTSX: true
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.tsx')
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/blogTemplate.tsx')
        },
        extensions: ['.mdx', '.md']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/md`
      }
    },
    'gatsby-transformer-remark'
  ]
};
