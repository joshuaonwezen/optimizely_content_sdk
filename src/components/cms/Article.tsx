import { Article as ArticleType } from '@/lib/types';

export function Article({ content }: { content: ArticleType }) {
  if (!content) return null;
  
  const date = content.publicationDate 
    ? new Date(content.publicationDate).toLocaleDateString() 
    : '';

  return (
    <div className="article container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" data-opti-editable="headline">
          {content.headline}
        </h1>
        {date && (
          <p className="text-gray-500 mb-6" data-opti-editable="publicationDate">
            {date}
          </p>
        )}
        <div 
          className="prose lg:prose-xl"
          data-opti-editable="body"
          dangerouslySetInnerHTML={{ __html: content.body?.html }} 
        />
      </div>
    </div>
  );
}
