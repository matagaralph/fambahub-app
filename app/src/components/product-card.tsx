import { ClockIcon, StarIcon } from '@primer/octicons-react';
import { Button, Heading, Text } from '@primer/react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const coverImage =
    product.images.find((img) => img.isCover) || product.images[0];
  const imageUrl =
    coverImage?.variants.find((v) => v.width >= 600)?.url ||
    coverImage?.variants[0]?.url;

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0 && mins > 0) return `${hours}h ${mins}m`;
    if (hours > 0) return `${hours}h`;
    return `${mins}m`;
  };

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.pricing.currency || product.currency || 'USD',
  });

  return (
    <div className='flex flex-col  h-full bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200'>
      <div className='relative h-48 w-full overflow-hidden bg-gray-100'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={coverImage?.caption || product.title}
            className='w-full h-full object-cover'
          />
        )}
        {/* {product.confirmationType === 'INSTANT' && (
          <div className='absolute top-2 left-2'>
            <Label variant='accent'>Instant Confirmation</Label>
          </div>
        )} */}
      </div>

      <div className='flex flex-col grow p-4 gap-3'>
        <div className='flex items-start justify-between gap-2'>
          <Heading as='h3' className='text-lg! line-clamp-2 grow'>
            {product.title}
          </Heading>
        </div>

        <div className='flex items-center gap-4 text-sm text-gray-600'>
          {product.reviews.totalReviews > 0 && (
            <div className='flex items-center gap-1'>
              <StarIcon className='text-yellow-500' />
              <Text className='font-bold'>
                {product.reviews.combinedAverageRating.toFixed(1)}
              </Text>
              <Text className='text-gray-500'>
                ({product.reviews.totalReviews})
              </Text>
            </div>
          )}

          <div className='flex items-center gap-1'>
            <ClockIcon className='text-gray-400' />
            <Text className='text-gray-500'>
              {formatDuration(product.duration.fixedDurationInMinutes)}
            </Text>
          </div>
        </div>

        <Text as='p' className='text-sm text-gray-500 line-clamp-2 grow'>
          {product.description}
        </Text>

        <div className='mt-auto pt-4 border-t border-gray-100 flex items-end justify-between'>
          <div className='flex flex-col'>
            <Text className='text-xs text-gray-500'>From</Text>
            <div className='flex items-baseline gap-2'>
              <Text className='text-xl font-bold text-gray-900'>
                {currencyFormatter.format(product.pricing.summary.fromPrice)}
              </Text>
              {product.pricing.summary.fromPriceBeforeDiscount >
                product.pricing.summary.fromPrice && (
                <Text className='text-xs text-gray-500 line-through'>
                  {currencyFormatter.format(
                    product.pricing.summary.fromPriceBeforeDiscount
                  )}
                </Text>
              )}
            </div>
          </div>
          <Button>Explore</Button>
        </div>
      </div>
    </div>
  );
}
