import { Metadata } from 'next';
import Abouts from '../components/Abouts';
import { LogoCloud } from '../components/LogoCloud';
import { Menu } from '../components/Menu';
import { ContactHero } from '../components/ContactHero';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Adaozañ - Contact',
  description: 'Terme breton, définition: recycler, revaloriser',
};

export default function Contact() {
  return (
    <>
      <div className="flex top-0 sticky w-full z-1 h-[60vh] bg-brown-100 text-cream-100">
        <div className="basis-4/12 p-12">
          <Image
            src="/img/logo-white.png"
            width={500}
            height={500}
            alt="Logo Adaozan"
          />
        </div>
        <div className="basis-8/12 relative">
          <div className="flex h-full w-full flex-col justify-between text-cream-100 p-12 items-end">
            <h1 className="text-3xl font-heading font-bold">Contact</h1>
            <span className=" self-end text-xl font-bold font-heading text-right">
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
            <span className="font-bold">contact@adaoan.fr</span>
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
            <span className="font-bold">Guillume Bournigal</span>
            <span>06 89 89 00 09</span>
          </div>
        </div>
      </div>
      <ContactHero />
    </>
  );
}