module.exports = {
  plugins: [
    {
      resolve: `gatsby-sourse-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-sourse-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/post`
      },
    },
    {
      resolve: `gatsby-sourse-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },

  ],
}
