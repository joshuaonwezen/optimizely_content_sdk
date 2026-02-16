import { contentType } from '@optimizely/cms-sdk';
import { SeoSettings } from './SeoSettings';
import { HeroBlock } from './HeroBlock';
import { TextBlock } from './TextBlock';

export const LandingPage = contentType({
  key: 'LandingPage',
  displayName: 'Landing Page (Visual Builder)',
  description: 'A flexible page built with the Visual Builder composition model.',
  baseType: '_page',
  properties: {
    seo: {
      type: 'component',
      contentType: SeoSettings,
      displayName: 'SEO',
      group: 'seo',
    },
    mainContentArea: {
      type: 'content',
      displayName: 'Main Content Area',
      group: 'editorial',
      allowedTypes: [HeroBlock, TextBlock],
    },
  },
});
