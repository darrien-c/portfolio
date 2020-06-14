module.exports = {
  siteMetadata: {
    title: `Web Developer | Darrien `,
    description: `Darrien Chow is a front-end web developer based in Vancouver, BC. Well versed in building mobile-first and responsive websites.`,
    keywords: `Darrien Chow, dchow, darrien.jpg, front-end developer, front-end web developer, web developer`,
    email: `"darrienchow_@hotmail.com"`,
    github: `https://github.com/darrien-c`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
       icon: `src/images/d-logo.png`,  // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-remark-video',
      options: {
        width: 800,
        height: 'auto',
        preload: 'auto',
        muted: true,
        autoplay: true,
        playsinline: true,
        controls: true,
        loop: true
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
