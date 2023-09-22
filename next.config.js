require("dotenv").config();
//For Production
// module.exports = {
//   reactStrictMode: true,
//     publicRuntimeConfig: {
//         emailT: process.env.SENDGRID_API_KEY

//     }
// }

module.exports = {
  reactStrictMode: true,
  env: {
    customKey: process.env.SENDGRID_API_KEY,
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  publicRuntimeConfig: {
    emailT: process.env.SENDGRID_API_KEY,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
