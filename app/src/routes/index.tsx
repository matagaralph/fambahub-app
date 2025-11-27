import { ProductCard } from '@/components/product-card';
import { fambaApi } from '@/utils/api';
import { createFileRoute, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexPage,
  loader: () => fambaApi.get('/products').then((res) => res.data),
});

function IndexPage() {
  const products = useLoaderData({ from: '/' }) as Product[];
  return (
    <main className='max-w-7xl mx-auto px-4 pt-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 pb-14 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.productCode} product={product} />
        ))}
      </div>
    </main>
  );
}
