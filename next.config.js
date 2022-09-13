/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
}

// module.exports = nextConfig

module.exports = {
  env: {
    blogContextToken: '5e70232030875c25a2017984d5e8a6ff507cd4a5384b7e09de625f733a9bfe0c88e449dd5f67708faaaa9699e116e86a5e6e201d38075f371242ac678ff4cc95e4b1fba6e12e25e3af84d0626524c3001f523345b4a110e7236c305b4898a81ee795418608d83d18ac8c097b3386b7465c5b49cd975d32278b9a3666934f8d28',
    // STRAPI_LOCAL_URL: "http://localhost:1337/",
    STRAPI_LOCAL_URL: "https://backend-learn-js.herokuapp.com/",
  },
}
