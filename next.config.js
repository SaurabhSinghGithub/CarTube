/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio",'images.unsplash.com']
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
