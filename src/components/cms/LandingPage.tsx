import { LandingPage as LandingPageType } from '@/lib/types';
import { HeroBlock } from './HeroBlock';
import { TextBlock } from './TextBlock';

export function LandingPage({ content }: { content: LandingPageType }) {
  // Safe check for array
  if (!content.mainContentArea || !Array.isArray(content.mainContentArea)) {
      console.warn('LandingPage: mainContentArea is missing or not an array', content);
      return null;
  }

  return (
    <div className="landing-page">
      {content.mainContentArea.map((block: any, index: number) => {
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
