/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.freepik.com",
                pathname: "/free-psd/**",
            },
            {
                hostname: "img.freepik.com",
                pathname: "/free-photo/**",
            },
        ]
    }
};

export default nextConfig;
