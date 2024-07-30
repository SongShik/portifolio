/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'admin.novosite.dev-sa365.com.br',
            },
        ],
    },
    // contentSecurityPolicy: {
    //     directives: {
    //       defaultSrc: ["'self'"],
    //       frameSrc: ["https://player.vimeo.com"],
    //     },
    //   }
      
      
};

export default nextConfig;
