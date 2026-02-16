import { TextBlock as TextBlockType } from '@/lib/types';

export function TextBlock({ content }: { content: TextBlockType }) {
  return (
    <div className="prose max-w-4xl mx-auto py-12 px-4" data-opti-editable="body">
      <div dangerouslySetInnerHTML={{ __html: content.body?.html }} />
    </div>
  );
}
