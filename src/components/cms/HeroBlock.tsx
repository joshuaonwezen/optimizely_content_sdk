import { HeroBlock as HeroBlockType } from '@/lib/types';
import { OptimizationImage } from './OptimizationImage';

export function HeroBlock({ content }: { content: HeroBlockType }) {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
      {content.backgroundImage && (
        <OptimizationImage
          src={content.backgroundImage}
          alt={content.backgroundImage.altText || content.headline}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      )}
      <div className="relative z-10 p-8 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4" data-opti-editable="headline">
          {content.headline}
        </h1>
        {content.subheadline && (
          <p className="text-xl mb-8" data-opti-editable="subheadline">
            {content.subheadline}
          </p>
        )}
        {content.ctaText && content.ctaLink && (
          <a
            href={content.ctaLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            data-opti-editable="ctaText"
          >
            {content.ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
