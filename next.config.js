/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        apiUrl: "http://139.59.143.147/cscrafts"
    },
    images: {
        domains: ["steamcdn-a.akamaihd.net", "steamcommunity-a.akamaihd.net", "csgostash.com"]
    }
};

module.exports = nextConfig;
