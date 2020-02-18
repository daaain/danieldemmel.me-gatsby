const narativeMdxConfig = require("@narative/gatsby-theme-novela/gatsby-config.js")(
  {}
).plugins.find(i => i.resolve == "gatsby-plugin-mdx");

module.exports = {
  siteMetadata: {
    title: `i am dain`,
    name: `dain`,
    siteUrl: `https://www.danieldemmel.me`,
    description: `Daniel Demmel's personal website with thoughts about technology and more`,
    hero: {
      heading: `...and these are my thoughts mostly on technology`,
      maxWidth: 777
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/daaain`
      },
      {
        name: `github`,
        url: `https://github.com/daaain`
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/danieldemmel`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/danieldemmel/`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        articlePermalinkFormat: "blog/:year/:month/:day/:slug/",
        authorsPage: true,
        pageLength: 12,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        ...narativeMdxConfig.options,
        gatsbyRemarkPlugins: [
          ...narativeMdxConfig.options.gatsbyRemarkPlugins,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin: 0 0 1.0725rem 0`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dain - Daniel Demmel`,
        short_name: `dain`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
