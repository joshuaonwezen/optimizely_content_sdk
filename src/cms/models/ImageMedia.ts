import { contentType } from '@optimizely/cms-sdk';

export const ImageMedia = contentType({
  key: 'ImageMedia',
  displayName: 'Image Media',
  baseType: '_image',
  mediaFileExtensions: ['jpg', 'jpeg', 'png', 'webp', 'svg', 'gif'],
  properties: {
    altText: {
      type: 'string',
      displayName: 'Alt Text',
      group: 'editorial',
    },
  },
});
