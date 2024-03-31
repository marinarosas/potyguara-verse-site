/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
const nextConfig = {
    // experimental: {
    //   appDir: true,
    // },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    swcMinify: true,
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  }
  
export default nextConfig;
