import { Metadata } from 'next';
import Abouts from '../components/Abouts';
import { LogoCloud } from '../components/LogoCloud';
import { Menu } from '../components/Menu';
import { ContactHero } from '../components/ContactHero';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Adaozañ - A propos',
  description: 'Terme breton, définition: recycler, revaloriser',
};

export default function About() {
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
            <h1 className="text-3xl font-heading font-bold">A propos</h1>
            <span className=" self-end text-xl font-bold font-heading text-right">
              Un projet à impact environnemental basé en Bretagne, prenant part
              à un éco-système local et participant à l’essor de l’économie
              circulaire et de la transition environnementale
            </span>
          </div>
        </div>
      </div>
      <Menu />
      <Abouts />
      <ContactHero />
    </>
  );
}
