import {
  createNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'zh'] as const;
export const localePrefix = 'always'; // Default
 
// The `pathnames` object holds pairs of internal names and
// localized paths, separated by locale.
export const pathnames = {
  // If all locales use the same path, use the root object.
  '/': '/',
  '/bazi': '/bazi',
  '/bazi/chart': '/bazi/chart',
  '/bazi/synastry': '/bazi/synastry',
  '/astrology': '/astrology',
  '/astrology/natal': '/astrology/natal',
  '/astrology/synastry': '/astrology/synastry',
  '/tarot': '/tarot',
  '/tarot/single': '/tarot/single',
  '/tarot/spread': '/tarot/spread',
  '/ai-reading': '/ai-reading',
  '/calendar': '/calendar',
} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation({
    locales,
    localePrefix,
    pathnames
  });