import { useState, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage = ({
  src,
  alt,
  className = '',
  onLoad,
  onError
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[var(--surface-2)] animate-pulse rounded-lg" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-[var(--surface-2)] rounded-lg flex items-center justify-center">
          <div className="text-[var(--text-primary)] opacity-50 text-sm">
            Failed to load
          </div>
        </div>
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{
          opacity: isLoaded ? 1 : 0,
        }}
      />
    </div>
  );
};

export default LazyImage;
