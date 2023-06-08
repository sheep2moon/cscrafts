/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        apiUrl: "http://139.59.143.147/cscrafts"
    },
    images: {
        domains: ["steamcdn-a.akamaihd.net"]
    }
};

module.exports = nextConfig;
