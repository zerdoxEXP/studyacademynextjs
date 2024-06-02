/** @type {import('next').NextConfig} */
const nextConfig = {
    // Füge hier andere Konfigurationseinstellungen hinzu, falls notwendig
  
    async redirects() {
      return [
        {
          source: '/lernsystem-basic',
          destination: '/lernsystem',
          permanent: true,
        },
        {
          source: '/lernsystem-pro',
          destination: '/lernsystem',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  