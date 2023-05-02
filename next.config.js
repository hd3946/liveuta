/** @type {import('next').NextConfig} */
const path = require('path');

const { SITE_URL, CONTENTS_SHEET_ID, CHANNELS_SHEET_ID, META_IMAGE, LOCAL_TIME } = process.env;

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SITE_URL: SITE_URL ?? 'http://localhost:3000',
    CONTENTS_SHEET_ID: CONTENTS_SHEET_ID ?? '',
    CHANNELS_SHEET_ID: CHANNELS_SHEET_ID ?? '',
    META_IMAGE: META_IMAGE ?? '',
    LOCAL_TIME: LOCAL_TIME ?? '0',
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['i.ytimg.com'],
  },
};

module.exports = nextConfig;
