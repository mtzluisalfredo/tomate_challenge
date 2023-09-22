/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true, // Opcional: Esto hace que la redirección sea permanente (HTTP 301)
      },
    ];
  },
}

module.exports = nextConfig
