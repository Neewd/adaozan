import Image from 'next/image';
import { ProductHero, ProductHeroProps } from '@/components/ProductHero';
import { ContactHero } from '@/components/ContactHero';
import { Metadata } from 'next';
import { Menu } from '@/components/Menu';

export const metadata: Metadata = {
  title: 'Adaozañ - Produits',
  description: 'Terme breton, définition: recycler, revaloriser',
};

async function getProducts(): Promise<ProductHeroProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produits`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Produits() {
  const products: ProductHeroProps[] = await getProducts();

  return (
    <div className="w-full bg-brown-100 relative h-min min-h-full">
      <div className="flex-1 flex w-full h-[60vh] sticky top-0 z-1">
        <div className="flex basis-4/12 text-2xl border-r border-cream-100 font-heading">
          <Image
            src="/img/logo-white.png"
            width={500}
            height={500}
            alt="Logo Adaozan"
          />
        </div>
        <div className="flex basis-8/12  flex-col justify-between">
          <span className="text-cream-100 p-12 text-3xl text-right">
            Produits
          </span>
          <span className="text-2xl font-heading font-bold p-8 text-cream-100 text-right">
            Des objets naturels fabriqués artisanalement à partir de déchets de
            pommes locaux, comme alternative innovante aux produits issus de
            l’industrie petro-chimique
          </span>
        </div>
      </div>
      <Menu />
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
              description={product.description}
              carousel={product.carousel}
              content={product.content}
              subContent={product.subContent}
              details={product.details}
              price={product.price}
              orderButton={product.orderButton}
            />
          );
        })}
      </div>
      <ContactHero />
    </div>
  );
}
