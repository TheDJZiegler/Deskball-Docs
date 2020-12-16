const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://github.com/TheDJZiegler/Deskball-Docs',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'src/headerLogo.jpg',
    logoLink: 'https://github.com/TheDJZiegler/deskball_mobile_app',
    title: "",
    githubUrl: 'https://github.com/TheDJZiegler/deskball_mobile_app',
    helpUrl: '',
    tweetText: '',
    // social: `<li>
		//     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		//       <div class="twitterBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		//       </div>
		//     </a>
		//   </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/splash',
      '/welcome',
      '/authorization',
      '/home',
      '/learn',
      '/gym',
      '/find',
      '/profile'
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Flutter & Firebase', link: 'https://flutter.dev/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "Deskball Mobile App",
  },
  siteMetadata: {
    title: 'Deskball Docs',
    description: 'Documentation built with mdx for Deskball Mobile App.',
    ogImage: null,
    docsLocation: '',
    favicon: 'http://cdn.onlinewebfonts.com/svg/img_531450.png',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Deskball Docs',
      short_name: 'Deskball',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/dbLogo.png',
          sizes: `125x124`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
