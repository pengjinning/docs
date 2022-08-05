// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '萝卜丝',
  tagline: '让获客更简单',
  url: 'https://www.bytedesk.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // presets: [
  //   [
  //     'classic',
  //     /** @type {import('@docusaurus/preset-classic').Options} */
  //     ({
  //       docs: {
  //         sidebarPath: require.resolve('./sidebars.js'),
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  //       },
  //       blog: {
  //         showReadingTime: true,
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  //       },
  //       theme: {
  //         customCss: require.resolve('./src/css/custom.css'),
  //       },
  //     }),
  //   ],
  // ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pengjinning/docs/blob/main/luobosi/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/pengjinning/docs/blob/main/luobosi/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '萝卜丝',
        logo: {
          alt: '萝卜丝 Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '帮助文档',
          },
          {
            to: '/blog',
            label: '博客',
            position: 'left'
          },
          {
            href: 'https://github.com/pengjinning/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '官网',
            items: [
              {
                label: '萝卜丝',
                href: 'https://www.bytedesk.com',
              },
            ],
          },
          {
            title: '文档',
            items: [
              {
                label: '开发文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 萝卜丝`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
