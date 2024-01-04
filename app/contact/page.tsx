import { Metadata } from 'next';
import { Menu } from '@/components/Menu';
import { ContactHero } from '@/components/ContactHero';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Adaozañ - Contact',
  description: 'Terme breton, définition: recycler, revaloriser',
};

export default function Contact() {
  return (
    <>
      <div className="flex top-0 sticky w-full z-1 h-[60vh] bg-brown-100 text-cream-100">
        <div className="basis-4/12 p-6">
          <Link href="/">
            <Image
              src="/img/logo-description-white.png"
              width={500}
              height={500}
              alt="Logo Adaozan"
            />
          </Link>
        </div>
        <div className="basis-8/12 relative">
          <div className="flex h-full w-full flex-col justify-between text-cream-100 p-12 items-end">
            <h1 className="text-3xl font-heading">Contact</h1>
            <span className="self-end text-2xl font-heading font-bold text-right">
              Pour toute demande d’information, commande de produit, étude de
              projet sur-mesure, merci de nous contacter directement par mail ou
              via nos réseaux sociaux
            </span>
          </div>
        </div>
      </div>
      <Menu />
      <div className="flex bg-cream-100 h-96 relative font-heading border-b border-brown-100 text-brown-100">
        <div className="flex flex-1 flex-col p-8 border-r border-brown-100 justify-between">
          <span className="text-lg">Nous écrire</span>
          <div className="flex flex-col">
            <span className="font-bold">contact@adaozan.fr</span>
            <span>instagram/facebook/linkedin</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-8  border-r border-brown-100 justify-between">
          <div className="flex flex-col">
            <span className="text-lg">Nous rendre visite</span>
            <span className="text-lg">(sur rendez-vous)</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Atelier</span>
            <span>4 rue de Quimper</span>
            <span>29300 Quimperlé</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-8 justify-between">
          <div>
            <span className="text-lg">Nous appeler</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Youenn Le Pocréau</span>
            <span>06 67 70 03 48</span>
            <span className="font-bold">Guillaume Bournigal</span>
            <span>06 89 89 00 09</span>
          </div>
        </div>
      </div>
      <ContactHero />
    </>
  );
}
