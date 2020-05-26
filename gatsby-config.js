module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@': './',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        allExtensions: true,
        isTSX: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript-checker',
      options: {
        reportFiles: ['src/**/*.{ts,tsx}'],
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/MarkdownTemplate.tsx'),
        },
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/md`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
