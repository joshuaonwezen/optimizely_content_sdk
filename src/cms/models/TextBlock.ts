import { contentType } from '@optimizely/cms-sdk';

export const TextBlock = contentType({
  key: 'TextBlock',
  displayName: 'Text Block',
  description: 'A simple rich text block.',
  baseType: '_component',
  properties: {
    body: {
      type: 'richText',
      displayName: 'Body',
      group: 'editorial',
    },
  },
});
