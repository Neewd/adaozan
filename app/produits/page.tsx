import Image from "next/image";
import { ContactHero } from "@/components/ContactHero";
import { Metadata } from "next";
import { Menu } from "@/components/Menu";
import Products from "@/components/Products";
import Logo from "@/components/Logo";
import HeaderMobile from "@/components/HeaderMobile";

export const metadata: Metadata = {
	title: "Adaozañ - Produits",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default function Produits() {
	return (
		<div className="w-full bg-brown-100 relative h-min min-h-full">
			<div className="hidden sm:flex top-0 sticky w-full z-1 h-[90vh]">
				<div className="basis-4/12 p-6 flex flex-col justify-between">
					<Logo />
					<div className="flex flex-col gap-4 text-xl font-heading">
						<span className="text-cream-100 font-heading-bold font-bold text-2xl">
							Produits
						</span>
						<span className="text-cream-100">
							Des objets naturels fabriqués artisanalement à
							partir de déchets de pommes locaux, comme
							alternative innovante aux produits issus de
							l’industrie petro-chimique
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
					Produits
				</span>
			</HeaderMobile>
			<Menu className="hidden sm:flex" />
			<Products withDescription={true}/>
			<ContactHero/>
		</div>
	);
}
