import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Listi',
  description:
    'Listi is a simple list application that allows you to create, update, and delete lists.',
  keywords: [],
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
