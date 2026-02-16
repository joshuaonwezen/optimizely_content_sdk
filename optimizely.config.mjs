import { buildConfig } from '@optimizely/cms-sdk';

export default buildConfig({
  components: ['./src/cms/models/**/*.ts'], // Ensure this path matches where we put the model files
  propertyGroups: [
    {
      key: 'content',
      displayName: 'Content',
      sortOrder: 100,
    },
    {
      key: 'seo',
      displayName: 'SEO',
      sortOrder: 200,
    },
    {
      key: 'settings',
      displayName: 'Settings',
      sortOrder: 300,
    },
  ],
});
