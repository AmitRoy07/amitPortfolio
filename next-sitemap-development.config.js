/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://dev.domain.com',
    // exclude: ['/'],

    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            // { userAgent: '*', allow: '/' },
            {
                userAgent: '*',
                disallow: ['/'],
            },
        ],
    },

    outDir: `${process.env.NEXT_PUBLIC_SITEMAP_OUT_DIR}`,
};
