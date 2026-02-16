import { buildConfig } from '@optimizely/cms-sdk';

export default buildConfig({
  components: ['./src/cms/models/**/*.ts'],
  propertyGroups: [
    { key: 'editorial', displayName: 'Editorial', sortOrder: 100 },
    { key: 'seo', displayName: 'SEO', sortOrder: 200 },
    { key: 'config', displayName: 'Configuration', sortOrder: 300 }
  ],
});
