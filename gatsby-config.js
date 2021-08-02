module.exports = {
  siteMetadata: {
    title: `Jessa Pedrola`,
    description: `Jessa Marie Pedrola is a designer and web developer based in Cebu, Philippines. She actively seeks for opportunities and experiences that can help her grow.`,
    author: `jessapedrola`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "3l3wdx7va3xv",
        accessToken: "owuoX--HBJ3VKv4aPerKh7h2yEw9ScjNHaNOPoICG1A",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F6BC42`,
        theme_color: `#F6BC42`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
