module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
        {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-135958695-1",
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-page-transitions`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`
  ],
}