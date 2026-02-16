import { contentType } from '@optimizely/cms-sdk';

import { ImageMedia } from './ImageMedia';

export const SeoSettings = contentType({
  key: 'SeoSettings',
  displayName: 'SEO Settings',
  description: 'SEO metadata block used on pages.',
  baseType: '_component',
  properties: {
    metaTitle: {
      type: 'string',
      displayName: 'Meta Title',
      group: 'seo',
    },
    metaDescription: {
      type: 'string',
      displayName: 'Meta Description',
      group: 'seo',
    },
    ogImage: {
      type: 'content',
      displayName: 'OG Image',
      allowedTypes: [ImageMedia],
      group: 'seo',
    },
  },
});
