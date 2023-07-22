/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["st.nettruyenmax.com"]
    },
    env: {
        COMIC_API_URL: "https://comics-api.vercel.app"
    }
}

module.exports = nextConfig
