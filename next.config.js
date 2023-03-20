/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        unoptimized: true,
        loader: "akamai",
        path: "/assets"
    }
}

module.exports = nextConfig
