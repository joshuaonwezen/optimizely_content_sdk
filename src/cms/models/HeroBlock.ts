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
      group: 'content',
    },
    subheadline: {
      type: 'string',
      displayName: 'Subheadline',
      group: 'content',
    },
    backgroundImage: {
      type: 'content',
      displayName: 'Background Image',
      allowedTypes: [ImageMedia],
      group: 'content',
    },
    ctaText: {
      type: 'string',
      displayName: 'CTA Text',
      group: 'content',
    },
    ctaLink: {
      type: 'string',
      displayName: 'CTA Link (URL)',
      group: 'content',
    },
  },
});
