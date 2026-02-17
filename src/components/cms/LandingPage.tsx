import { LandingPage as LandingPageType } from '@/lib/types';
import { HeroBlock } from './HeroBlock';
import { TextBlock } from './TextBlock';

export function LandingPage({ content }: { content: LandingPageType }) {
  let blocks: any[] = [];

  // Normalize mainContentArea to an array
  if (content.mainContentArea) {
    if (Array.isArray(content.mainContentArea)) {
      blocks = content.mainContentArea;
    } else {
      // It's a single object (HeroBlock or TextBlock), wrap it
      blocks = [content.mainContentArea];
    }
  }

  if (blocks.length === 0) {
    return null;
  }

  return (
    <div className="landing-page">
      {blocks.map((block: any, index: number) => {
        // Safe check for typename
        const typename = block?.__typename;
        
        switch (typename) {
          case 'HeroBlock':
            return <HeroBlock key={index} content={block} />;
          case 'TextBlock':
            return <TextBlock key={index} content={block} />;
          default:
            return <div key={index} className="p-4 border border-dashed">Unknown block: {typename || 'undefined'}</div>;
        }
      })}
    </div>
  );
}
