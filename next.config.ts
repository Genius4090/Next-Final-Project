import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        domains: ["anorkhulov.uz"], // allow your backend images
      },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);