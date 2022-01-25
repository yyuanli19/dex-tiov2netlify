module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dex-t.io",
    title: "dex-tnetlify",
    description:
        'dex-t.io, helps you integrate the right data science technologies into your business, using the right data',
  },
  plugins: ["gatsby-plugin-netlify-cms",
            "gatsby-plugin-styled-components",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            "react-bootstrap", 
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: `blog`,
                path: `${__dirname}/blog`,
              }
            },
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: `demo`,
                path: `${__dirname}/demo`,
              }
            },
            "gatsby-plugin-mdx",
            "gatsby-transformer-sharp",
    ],
};
