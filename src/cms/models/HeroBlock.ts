import { contentType } from '@optimizely/cms-sdk';
import { ImageMedia } from './ImageMedia';

export const HeroBlock = contentType({
  key: 'HeroBlock',
  displayName: 'Hero Block',
  description: 'A reusable hero component with image, headline, and CTA.',
  baseType: '_component',
  properties: {
    headline: {
      type: 'string',
      displayName: 'Headline',
      required: true,
      group: 'editorial',
    },
    subheadline: {
      type: 'string',
      displayName: 'Subheadline',
      group: 'editorial',
    },
    backgroundImage: {
      type: 'content',
      displayName: 'Background Image',
      allowedTypes: [ImageMedia],
      group: 'editorial',
    },
    ctaText: {
      type: 'string',
      displayName: 'CTA Text',
      group: 'editorial',
    },
    ctaLink: {
      type: 'string',
      displayName: 'CTA Link (URL)',
      group: 'editorial',
    },
  },
});
