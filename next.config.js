module.exports = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};
