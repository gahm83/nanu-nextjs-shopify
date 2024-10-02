/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  env: {
    SHOPIFY_REVALIDATION_SECRET: process.env.SHOPIFY_REVALIDATION_SECRET,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    JUDGE_ME_API_TOKEN: process.env.JUDGE_ME_API_TOKEN,
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    MAILGUN_MAILING_LIST: process.env.MAILGUN_MAILING_LIST,
    INSTAGRAM_PUBLIC_TOKEN: process.env.INSTAGRAM_PUBLIC_TOKEN
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      },
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com'
      },
      {
        protocol: 'https',
        hostname: 'graph.instagram.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  }
};
