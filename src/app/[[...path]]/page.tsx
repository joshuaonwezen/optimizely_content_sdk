import { graphClient } from '@/lib/cms';
import { GetContentByPath } from '@/lib/queries';
import { ProductPage } from '@/components/cms/ProductPage';
import { Homepage } from '@/components/cms/Homepage';
import { Article } from '@/components/cms/Article';
import { LandingPage } from '@/components/cms/LandingPage';
import { LandingExperience } from '@/components/cms/LandingExperience';
import { 
  ProductPage as ProductPageType, 
  Homepage as HomepageType, 
  Article as ArticleType, 
  LandingPage as LandingPageType,
  LandingExperience as LandingExperienceType
} from '@/lib/types';

export default async function Page({ params }: { params: { path?: string[] } }) {
  const path = params.path ? `/${params.path.join('/')}` : '/';
  
  const data: any = await graphClient.request(GetContentByPath, { path });

  if (!data?._Content?.items?.length) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>404 - Not Found</h1>
        <p>Could not find content for path: {path}</p>
      </main>
    );
  }

  const content = data._Content.items[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {content._metadata.types.includes('Homepage') && (
        <Homepage content={content as HomepageType} />
      )}
      {content._metadata.types.includes('LandingPage') && (
        <LandingPage content={content as LandingPageType} />
      )}
      {content._metadata.types.includes('LandingExperience') && (
        <LandingExperience content={content as LandingExperienceType} />
      )}
      {content._metadata.types.includes('ProductPage') && (
        <ProductPage content={content as ProductPageType} />
      )}
       {content._metadata.types.includes('Article') && (
        <Article content={content as ArticleType} />
      )}
      {/* Fallback or debug */}
      {!['Homepage', 'LandingPage', 'LandingExperience', 'ProductPage', 'Article'].some(t => content._metadata.types.includes(t)) && (
        <pre>{JSON.stringify(content, null, 2)}</pre>
      )}
    </main>
  );
}
