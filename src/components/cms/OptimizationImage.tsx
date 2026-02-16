import Image from 'next/image';

interface ImageProps {
  src: string | { default: string };
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function OptimizationImage({ src, alt, width = 800, height = 600, className }: ImageProps) {
  const imageUrl = typeof src === 'string' ? src : src?.default;

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
