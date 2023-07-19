/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['digital-ocean-strapi-techservice.sgp1.digitaloceanspaces.com'],
    },
    exportTrailingSlash: true,
  exportPathMap: async function (defaultPathMap) {
    return defaultPathMap;
  },
  fallback: true,
};

module.exports = nextConfig;
