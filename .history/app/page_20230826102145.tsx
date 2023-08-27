import { Metadata } from "next";
import { ProductHero, ProductHeroProps } from "./components/ProductHero";
import { LogoCloud } from "./components/LogoCloud";
import { AboutHero } from "./components/AboutHero";
import { ContactHero } from "./components/ContactHero";
import Link from "next/link";
import Image from "next/image";
import ImageCovered from "./components/ImageCovered";

export const metadata: Metadata = {
	title: "Adaozañ",
	description: "Terme breton, définition: recycler, revaloriser",
};

const products: ProductHeroProps[] = [
	{
		id: 1,
		imageUrl: "/img/echantillons.webp",
		title: "Produits",
		subtitle: "Echantillons",
		slug: "echantillons",
	},
	{
		id: 2,
		imageUrl: "/img/broye_solo.webp",
		title: "Produits",
		subtitle: "Objets",
		slug: "objets",
	},
	{
		id: 3,
		imageUrl: "/img/credence.webp",
		title: "Produits",
		subtitle: "Projets-sur-mesure",
		objectPosition: "right",
		slug: "projet-sur-mesure",
	},
];

const logos: string[] = [
	"/img/region_bretagne.png",
	"/img/fondation_france.png",
	"/img/grdf.png",
	"/img/quimperle.png",
	"/img/technopole.png",
];

const abouts = [
	{
		imageUrl: "/img/marc-de-pomme-sec.webp",
		title: "A propos",
		subtitle: "Marc de pommes",
	},
	{
		imageUrl: "/img/transformation.webp",
		title: "A propos",
		subtitle: "Matière",
	},
	{
		imageUrl: "/img/equipe.jpg",
		title: "A propos",
		subtitle: "Origines",
	},
];

export default function Home() {
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
			<div className="flex z-10 relative flex-col">
				{abouts.map((about, index) => {
					return (
						<AboutHero
							key={index}
							imageUrl={about.imageUrl}
							title={about.title}
							subtitle={about.subtitle}
						/>
					);
				})}
			</div>
			<ContactHero />
		</div>
	);
}
