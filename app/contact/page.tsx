import { ContactHero } from "@/components/ContactHero";
import HeaderMobile from "@/components/HeaderMobile";
import Logo from "@/components/Logo";
import { Menu } from "@/components/Menu";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Adaozañ - Contact",
  description: "Terme breton, définition: recycler, revaloriser",
};

export default function Contact() {
  return (
    <div className="w-full bg-brown-100 relative h-min min-h-full">
      <div className="hidden sm:flex top-0 sticky w-full z-1 h-[90vh] bg-brown-100 text-cream-100 min-h-full">
        <div className="basis-4/12 p-6 flex flex-col justify-between">
          <Logo />
          <div className="flex flex-col gap-4 text-xl font-heading">
            <span className="text-cream-100 font-heading-bold font-bold text-2xl">
              Contact
            </span>
            <span className="text-cream-100">
              Pour toute demande d’information, commande de produit, étude de
              projet sur-mesure, merci de nous contacter directement par mail ou
              via nos réseaux sociaux
            </span>
          </div>
        </div>
        <div className="basis-8/12 relative p-12">
          <Image
            className="p-4 object-cover"
            src="/img/valorisation-marc-de-pomme.webp"
            alt="Valorisation marc de pomme"
            fill={true}
          />
        </div>
      </div>
      <HeaderMobile>
        <span className="text-cream-100 font-heading-bold py-2 text-2xl">
          Contact
        </span>
      </HeaderMobile>
      <Menu className="hidden sm:flex" />

      <div className="flex sm:flex-row flex-col bg-cream-100 sm:h-96 relative font-heading border-b border-brown-100 text-brown-100">
        <div className="flex flex-1 flex-col p-8 border-b sm:border-r border-brown-100 justify-between">
          <span className="text-lg ">Nous écrire</span>
          <div className="flex flex-col">
            <span className="font-bold italic">contact@adaozan.fr</span>
            <span>instagram/facebook/linkedin</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-8   border-b sm:border-r border-brown-100 justify-between">
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
    </div>
  );
}
