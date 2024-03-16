const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
    // distDir: 'output',
    // output: 'standalone', /* export */
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = withNextIntl(config);
