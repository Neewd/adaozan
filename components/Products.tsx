import { ProductHero, ProductHeroProps } from './ProductHero';

export const dynamic = 'force-dynamic';

async function getProducts(): Promise<ProductHeroProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produits`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Products() {
  const products: ProductHeroProps[] = await getProducts();
  return (
    <>
      <div className="flex z-10 relative">
        {products.map((product) => {
          return (
            <ProductHero
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              subtitle={product.subtitle}
              objectPosition={product.objectPosition}
              slug={product.slug}
              id={product.id}
            />
          );
        })}
      </div>
    </>
  );
}
