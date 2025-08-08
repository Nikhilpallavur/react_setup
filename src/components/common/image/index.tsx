// components/common/CachedImage.tsx
import React, { useState } from 'react';

interface CachedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = 'https://via.placeholder.com/300x200?text=Image+Unavailable',
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
    setImgSrc(fallbackSrc);
  };

  const handleRetry = () => {
    setError(false);
    setImgSrc(src);
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        className='h-full w-full rounded-xl object-cover'
        onError={handleError}
        loading='lazy'
      />
      {error && (
        <button
          onClick={handleRetry}
          className='absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white'
        >
          Retry
        </button>
      )}
    </div>
  );
};
