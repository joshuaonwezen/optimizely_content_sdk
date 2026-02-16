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
  
  let data: any;
  try {
    data = await graphClient.request(GetContentByPath, { path });
  } catch (error: any) {
    console.error("Graph API Error:", JSON.stringify(error, null, 2));
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold text-red-600">Error Fetching Content</h1>
        <p>Path: {path}</p>
        <pre className="text-xs bg-gray-100 p-4 rounded mt-4 max-w-xl overflow-auto">
          {error.message || JSON.stringify(error)}
        </pre>
      </main>
    );
  }

  if (!data?._Content?.items?.length) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>404 - Not Found</h1>
        <p>Could not find content for path: {path}</p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="text-sm text-gray-500">Debug Info:</p>
            <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
        </div>
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
