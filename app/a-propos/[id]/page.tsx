import { Metadata } from 'next';
import { ContactHero } from '@/components/ContactHero';
import About from '@/components/About';

export const metadata: Metadata = {
  description: 'Terme breton, définition: recycler, revaloriser',
  title: 'Adaozañ - A propos',
};

export default async function AboutId({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-full bg-brown-100 relative h-min min-h-full">
        <About id={params.id} />
        <ContactHero />
      </div>
    </>
  );
}
