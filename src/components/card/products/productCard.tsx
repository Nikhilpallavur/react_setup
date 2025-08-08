import React from 'react';
import { CachedImage } from '../../common';
import { FONT } from '../../../styles';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  category?: string;
  rating?: number;
  inStock?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  category,
  rating,
  inStock,
}) => {
  return (
    <div className='flex h-full flex-col rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg'>
      {/* Image */}
      <div className='relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl'>
        <CachedImage
          src={image}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>

      {/* Title */}
      <label className={`${FONT.cardHeaderTextSmall} line-clamp-2 min-h-[2rem]`} title={title}>
        {title}
      </label>

      {/* Price */}
      <p className={`${FONT.priceValueText} mt-1`}>${price.toFixed(2)}</p>

      {/* Details */}
      <div className='mt-3 space-y-1 text-sm text-gray-600'>
        {category && (
          <p>
            <span className='font-medium'>Category:</span> {category}
          </p>
        )}
        {typeof rating === 'number' && (
          <p>
            <span className='font-medium'>Rating:</span> {rating} ★
          </p>
        )}
        <p>
          <span className='font-medium'>Availability:</span>{' '}
          <span className={inStock ? 'text-green-600' : 'text-red-500'}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </p>
      </div>
    </div>
  );
};
