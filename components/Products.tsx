import { ProductHero, ProductHeroProps } from './ProductHero';

export default async function Products({
  products,
}: {
  products: ProductHeroProps[];
}) {
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
