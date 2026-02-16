import { Homepage as HomepageType } from '@/lib/types';

export function Homepage({ content }: { content: HomepageType }) {
  return (
    <div className="homepage container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900" data-opti-editable="headline">
          {content.headline}
        </h1>
        <div 
          className="prose lg:prose-xl text-gray-700"
          data-opti-editable="mainContentArea"
          dangerouslySetInnerHTML={{ __html: content.mainContentArea }} 
        />
      </div>
    </div>
  );
}
