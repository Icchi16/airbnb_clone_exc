const nextTranslate = require("next-translate-plugin");

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "picsum.photos",
//         port: "",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
module.exports = nextTranslate({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
    ],
  },
});
