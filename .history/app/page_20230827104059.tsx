import { Metadata } from "next";
import { LogoCloud } from "./components/LogoCloud";
import { ContactHero } from "./components/ContactHero";
import { Menu } from "./components/Menu";

import Image from "next/image";
import ImageCovered from "./components/ImageCovered";
import Products from "./components/Products";
import Abouts from "./components/Abouts";

export const metadata: Metadata = {
	title: "Adaozañ",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default async function Home() {
	return (
		<div className="w-full bg-cream-100 relative h-min min-h-full">
			<div className="flex top-0 sticky w-full z-1 h-[90vh]">
				<div className="basis-4/12 p-12 border-r border-brown-100">
					<Image
						src="/img/logo.png"
						width={500}
						height={500}
						alt="Logo Adaozan"
					/>
				</div>
				<div className="basis-8/12 relative">
					<ImageCovered
						imageUrl="/img/valorisation-marc-de-pomme.webp"
						imageAlt="Valorisation marc de pomme"
					/>
				</div>
			</div>
			<Menu />
			<Products />
			<LogoCloud />
			<Abouts />
			<ContactHero />
		</div>
	);
}
