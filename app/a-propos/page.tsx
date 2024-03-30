import { Metadata } from "next";
import Abouts from "@/components/Abouts";
import { Menu } from "@/components/Menu";
import { ContactHero } from "@/components/ContactHero";
import Logo from "@/components/Logo";
import Image from "next/image";
import HeaderMobile from "@/components/HeaderMobile";

export const metadata: Metadata = {
	title: "Adaozañ - A propos",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default async function About() {
	return (
		<div className="w-full bg-brown-100 relative h-min min-h-full">
			<div className="hidden sm:flex top-0 sticky w-full z-1 h-[90vh] bg-brown-100 text-cream-100 min-h-full">
				<div className="flex basis-4/12 p-6 flex-col justify-between bg-brown-100">
					<Logo />
					<div className="flex flex-col gap-4 text-xl font-heading">
						<span className="text-cream-100 font-heading-bold font-bold text-2xl">
							À propos
						</span>
						<span className="text-cream-100">
							Un projet à impact environnemental basé en Bretagne,
							prenant part à un éco-système local et participant à
							l’essor de l’économie circulaire et de la transition
							environnementale
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
					À propos
				</span>
			</HeaderMobile>
			<Menu className="hidden sm:flex" />
			<Abouts withDescription={true} />
			<ContactHero />
		</div>
	);
}
