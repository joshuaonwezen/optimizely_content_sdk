import { ProductPage as ProductPageType } from '@/lib/types';

export function ProductPage({ content }: { content: ProductPageType }) {
  if (!content) return null;
  return (
    <div className="product-page container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4" data-opti-editable="productName">
          {content.productName}
        </h1>
        <div 
          className="prose lg:prose-xl"
          data-opti-editable="description"
          dangerouslySetInnerHTML={{ __html: content.description?.html }} 
        />
      </div>
    </div>
  );
}
