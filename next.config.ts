import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    output: 'standalone',
    // async rewrites() {
    //     // 确保只在开发环境中启用代理
    //     if (process.env.NODE_ENV !== 'development') {
    //       return [];
    //     }
    
    //     return [
    //       {
    //         source: "/api/:path*/",
    //         destination: "http://120.204.73.214:8081/api/:path*/",
    //       },
    //       // ✅ 2. 处理不带斜杠的 /api/contracts 这种情况
    //       {
    //         source: "/api/:path*",
    //         destination: "http://120.204.73.214:8081/api/:path*/",
    //       },
    //     ];
    //   },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);