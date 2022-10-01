/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
module.exports = {
  // siteUrl: process.env.STRAPI_LOCAL_URL || "https://funwithjs.com",
  // siteUrl: "http://localhost:1337",
  siteUrl: "https://funwithjs.com",

  generateRobotsTxt: true, // (optional)

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",

        userAgent: "Googlebot",
 

      },
    ],

    additionalPaths: async (config) => [
      await config.transform(config, "/comments"),
    ],
   
  },
  
};
console.log(process.env.STRAPI_LOCAL_URL, "process.env.STRAPI_LOCAL_URL")
