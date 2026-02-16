import { contentType } from '@optimizely/cms-sdk';
import { SeoSettings } from './SeoSettings';

export const Homepage = contentType({
  key: 'Homepage',
  displayName: 'Homepage (Legacy)',
  description: 'Legacy homepage type. Use LandingPage for new pages.',
  baseType: '_page',
  properties: {
    headline: {
      type: 'string',
      displayName: 'Headline',
      group: 'editorial',
    },
    mainContentArea: {
      type: 'string',
      displayName: 'Main Content Area',
      group: 'editorial',
    },
    seo: {
      type: 'content',
      displayName: 'SEO',
      allowedTypes: [SeoSettings],
      group: 'seo',
    },
  },
});
