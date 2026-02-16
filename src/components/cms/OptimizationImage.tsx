import Image from 'next/image';
import { ImageMedia } from '@/lib/types';

interface ImageProps {
  src: string | ImageMedia | undefined | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function OptimizationImage({ src, alt, width = 800, height = 600, className }: ImageProps) {
  let imageUrl: string | undefined;

  if (!src) {
    return null;
  }

  if (typeof src === 'string') {
    imageUrl = src;
  } else if ('default' in src && src.url) {
    // Legacy/Direct shape
    imageUrl = src.url.default;
  } else if ('url' in src && src.url) {
     // Shape with url property
     imageUrl = src.url.default;
  } else if ('_metadata' in src && src._metadata?.url?.default) {
    // New metadata shape
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
