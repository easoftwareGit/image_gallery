/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['images.unsplash.com', 'plus.unsplash.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '',
        // pathname: '/photos-**'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        // port: '',
        // pathname: '/photos-**'
      },
    ]
  }
}

module.exports = nextConfig
