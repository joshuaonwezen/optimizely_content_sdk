import { LandingPage as LandingPageType } from '@/lib/types';
import { HeroBlock } from './HeroBlock';
import { TextBlock } from './TextBlock';

export function LandingPage({ content }: { content: LandingPageType }) {
  if (!content.mainContentArea) return null;

  return (
    <div className="landing-page">
      {content.mainContentArea.map((block: any, index: number) => {
        switch (block.__typename) {
          case 'HeroBlock':
            return <HeroBlock key={index} content={block} />;
          case 'TextBlock':
            return <TextBlock key={index} content={block} />;
          default:
            return <div key={index} className="p-4 border border-dashed">Unknown block: {block.__typename}</div>;
        }
      })}
    </div>
  );
}
