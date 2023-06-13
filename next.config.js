const { configDotenv } = require("dotenv");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        apiUrl: "http://139.59.143.147/cscrafts",
        supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmcGZneWtrdWVlenJpbmducXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2NTE3OTQsImV4cCI6MjAwMjIyNzc5NH0.InJTzKbI61R529G9qsQ-n80Mu_wNiBNsm5tP8Gm4JiM"
    },
    images: {
        domains: ["steamcdn-a.akamaihd.net", "steamcommunity-a.akamaihd.net", "csgostash.com", "community.cloudflare.steamstatic.com"]
    }
};

configDotenv();

module.exports = nextConfig;
