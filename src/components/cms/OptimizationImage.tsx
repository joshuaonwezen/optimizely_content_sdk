import Image from 'next/image';

interface ImageProps {
  src: string | { default: string } | { _metadata: { url: { default: string } } };
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function OptimizationImage({ src, alt, width = 800, height = 600, className }: ImageProps) {
  let imageUrl: string | undefined;

  if (typeof src === 'string') {
    imageUrl = src;
  } else if ('default' in src) {
    imageUrl = src.default;
  } else if (src?._metadata?.url?.default) {
    imageUrl = src._metadata.url.default;
  }

  if (!imageUrl) {
    return null;
  }

  return (
    <Image
      src={imageUrl}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
