/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ['i.scdn.co'],
        // this should be something like this
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'i.scdn.co',
        //       port: '',
        //       pathname: '',
        //     },
        // ]
    },
}

module.exports = nextConfig
