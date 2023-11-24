import { ContactHero } from '@/components/ContactHero';
import Carousel from '@/components/Carousel';
import { Menu } from '@/components/Menu';
import { Metadata } from 'next';
import Image from 'next/image';
import Product from '@/components/Product';

export const metadata: Metadata = {
  title: 'Adaozañ - Produit',
  description: 'Terme breton, définition: recycler, revaloriser',
};

export default async function ProductId({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="w-full bg-brown-100 relative h-min min-h-full">
        <Product id={params.id} />
        <ContactHero />
      </div>
    </>
  );
}
