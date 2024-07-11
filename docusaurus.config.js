// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ecmascript.gr',
    tagline: 'Οδηγός για την JavaScript στα Ελληνικά',
    favicon: 'img/ecmascript.png',

    // Set the production url of your site here
    url: 'https://ecmascript.gr',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'adreaskar', // Usually your GitHub org/user name.
    projectName: 'ecmascript.gr', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'el-GR',
        locales: ['el-GR'],
    },

    // Plugins for TailwindCSS and PostCSS.
    plugins: [
        async function myPlugin(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    return postcssOptions;
                },
            };
        },
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'language',
                path: 'docs-language',
                routeBasePath: 'docs-language',
                sidebarPath: 'sidebars.js',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'browser',
                path: 'docs-browser',
                routeBasePath: 'docs-browser',
                sidebarPath: 'sidebars.js',
            },
        ],
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/adreaskar/javascript-handbook/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                logo: {
                    alt: 'ecmascript.gr logo',
                    src: 'img/ecmascript.png',
                },
                items: [
                    {
                        label: '1. Γλώσσα',
                        to: 'docs-language/intro',
                        position: 'left',
                        docspluginid: 'language',
                    },
                    {
                        label: '2. Browser',
                        to: 'docs-browser/intro',
                        position: 'left',
                        docspluginid: 'browser',
                    },
                    {
                        to: '/useful-links',
                        label: 'Χρήσιμες Πηγές',
                    },
                    {
                        to: '/info',
                        label: 'Πληροφορίες',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/adreaskar/ecmascript.gr',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `An open source project by Andreas Karabetian | ${new Date().getFullYear()} ecmascript.gr`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
