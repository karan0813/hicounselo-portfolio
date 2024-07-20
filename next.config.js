/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  env: {
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    NEXT_PUBLIC_EMAIL_PASS: process.env.NEXT_PUBLIC_EMAIL_PASS,
    NEXT_PUBLIC_FROMMAIL: process.env.NEXT_PUBLIC_FROMMAIL,
  },
};

module.exports = nextConfig;
