/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL: process.env.GRAPHQL,
    NEXT_PUBLIC_GRAPHQL: process.env.NEXT_PUBLIC_GRAPHQL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    EMAILJS_TEMPLATE: process.env.EMAILJS_TEMPLATE,
  }
}

module.exports = nextConfig