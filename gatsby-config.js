module.exports = {
  siteMetadata: {
    title: `A Greenstello Site`,
    description: `Van stuff and kiting.  Mostly van stuff, unfortunately`,
    author: `GnarGnar and PowPow`,
    url: `https://natecostello.github.io/agreenstello_site/`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {},
    },
    "gatsby-remark-embed-video", //Not sure if this is needed here or if only under remark options
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/van-icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // this plug-in had some legacy dependency issues:
    // installed using --legacy-peer-deps
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `van_two_point_oh`,
        remote: `https://github.com/natecostello/van_two_point_oh.git`,
        branch: `master`,
        local: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // Had to add this and comment out section under gatsbyRemarkPlugins to get site to builld with gatsby-remark-vscode
        remarkPlugins: [
          [
            require("gatsby-remark-vscode").remarkPlugin,
            {
              theme: `Monokai Dimmed`,
            },
          ],
        ],
        gatsbyRemarkPlugins: [
          /* {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Monokai Dimmed", // Or install your favorite theme from GitHub
            },
          }, */
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
                `md`,
                `mdx`,
              ],
            },
          },
          `gatsby-plugin-catch-links`,
          {
            resolve: `gatsby-remark-katex`,
            // options: { macros, throwOnError: false }, Janosh options
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-buildtime-timezone",
      options: {
        tz: "America/New_York",
        format: "HH:mm:ss, ddd, MMM DD, YYYY",
      },
    },
    `gatsby-plugin-instagram-embed`,
  ],
  // pathPrefix: "/agreenstello_site",
}
