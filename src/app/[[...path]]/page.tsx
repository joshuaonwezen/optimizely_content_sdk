import { graphClient } from '@/lib/cms';
import { GetContentByPath } from '@/lib/queries';
import { ProductPage } from '@/components/cms/ProductPage';
import { Homepage } from '@/components/cms/Homepage';
import { Article } from '@/components/cms/Article';
import { LandingPage } from '@/components/cms/LandingPage';
import { ProductPage as ProductPageType, Homepage as HomepageType, Article as ArticleType, LandingPage as LandingPageType } from '@/lib/types';

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
  const types = content._metadata.types;

  return (
    <main className="min-h-screen">
      {types.includes('LandingPage') && (
        <LandingPage content={content as LandingPageType} />
      )}
      {types.includes('Homepage') && (
        <Homepage content={content as HomepageType} />
      )}
      {types.includes('ProductPage') && (
        <ProductPage content={content as ProductPageType} />
      )}
       {types.includes('Article') && (
        <Article content={content as ArticleType} />
      )}
      {/* Fallback or debug */}
      {!['Homepage', 'ProductPage', 'Article', 'LandingPage'].some(t => types.includes(t)) && (
        <div className="p-24">
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
