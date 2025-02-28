// next.config.mjs
import nextIntlPlugin from 'next-intl/plugin';

const withNextIntl = nextIntlPlugin('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
};

export default withNextIntl(nextConfig);
