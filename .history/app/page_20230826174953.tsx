import { Metadata } from "next";
import { ProductHero, ProductHeroProps } from "./components/ProductHero";
import { LogoCloud } from "./components/LogoCloud";
import { ContactHero } from "./components/ContactHero";
import { Menu } from "./components/Menu";

import Image from "next/image";
import ImageCovered from "./components/ImageCovered";
import About from "./a-propos/page";

export const metadata: Metadata = {
	title: "Adaozañ",
	description: "Terme breton, définition: recycler, revaloriser",
};

async function getProducts(): Promise<ProductHeroProps[]> {
	const res = await fetch(`http://localhost:3000/api/produits`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const logos: string[] = [
	"/img/region_bretagne.png",
	"/img/fondation_france.png",
	"/img/grdf.png",
	"/img/quimperle.png",
	"/img/technopole.png",
];

export default async function Home() {
	const products: ProductHeroProps[] = await getProducts();

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
			<div className="flex z-10 relative flex-col">
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
						/>
					);
				})}
			</div>
			<div className="flex relative border-b border-brown-100 z-10">
				<LogoCloud logos={logos} />
			</div>
			<About />
			<ContactHero />
		</div>
	);
}
