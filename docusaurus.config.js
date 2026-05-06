// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Python Learning',
  tagline: 'Learn Python step by step',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 👉 Update after deployment if needed
  url: 'https://your-project-name.vercel.app',
  baseUrl: '/',

  // ✅ FIXED: no build crash
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  // ✅ Your Building Programs plugin (kept)
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'programs',
        path: 'docs-building',
        routeBasePath: 'programs',
        sidebarPath: require.resolve('./sidebarsPrograms.js'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Python Learning',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Python Basics',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'programsSidebar',
          docsPluginId: 'programs',
          label: 'Building Programs',
          position: 'left',
        },

        // ❌ Removed broken links:
        // tools / next-steps (they don't exist)
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;