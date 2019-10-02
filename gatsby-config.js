module.exports = {
  siteMetadata: {
    title: `Stanley Huang`,
    description: `Crafting Pixel Perfect Experiences.`,
    author: `Stanley Huang`,
    twitter: `@stanhuan`,
    email: `stanleystanhuang@gmail.com`,
    siteUrl: `https://stanhuan.com/`,
    gitUrl: `https://github.com/stanhuan/stanhuan.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 75,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lewis Gatsby Starter Blog`,
        short_name: `LGSB`,
        start_url: `/`,
        background_color: `#fcfcfc`,
        theme_color: `#fcfcfc`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
