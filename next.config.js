/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["nettruyennew.com", "nettruyenco.vn"]
    },
    env: {
        COMIC_API_URL: "https://comics-api.vercel.app"
    }
}

module.exports = nextConfig
