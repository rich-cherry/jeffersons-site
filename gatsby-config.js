require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Jefferson's Florist`,
    description: `Flowers, Wine, Gourmet Baskets and Gifts`,
    author: `Rich Cherry`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: { id: 'fpb3nmo' }
      }
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Amiri\:400`,
          `Amiri\:700`,
          `Nanum Gothic\:400`,
          `Nanum Gothic\:700`,
          `Nanum Gothic\:800`,
          `open sans\:400`,
          'open sans:400i',
          `open sans\:700`,
          'open sans:700i',
          `open sans\:800`,
          'open sans:800i',
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-07',
      },
    },
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
        name: `gatsby-shopify-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
