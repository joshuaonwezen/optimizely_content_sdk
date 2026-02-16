import { contentType } from '@optimizely/cms-sdk';
import { SeoSettings } from './SeoSettings';

export const LandingExperience = contentType({
  key: 'LandingExperience',
  displayName: 'Landing Experience',
  description: 'A flexible experience page for Visual Builder.',
  baseType: '_experience',
  properties: {
    seo: {
      type: 'component',
      contentType: SeoSettings,
      displayName: 'SEO Settings',
      group: 'seo',
    },
  },
});
