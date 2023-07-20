/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['digital-ocean-strapi-techservice.sgp1.digitaloceanspaces.com'],
    },
    TrailingSlash: true,
  exportPathMap: async function (defaultPathMap) {
    return defaultPathMap;
  },

};

module.exports = nextConfig;
