import Image from "next/image";
import { Metadata } from "next";
import { ProductHero, ProductHeroProps } from "./components/ProductHero";
import { LogoCloud } from "./components/LogoCloud";
import { AboutHero } from "./components/AboutHero";

export const metadata: Metadata = {
	title: "Adaozañ",
	description: "Terme breton, définition: recycler, revaloriser",
};

const products: ProductHeroProps[] = [
	{
		imageUrl: "/img/echantillons.webp",
		title: "Produits",
		subtitle: "Echantillons",
	},
	{
		imageUrl: "/img/broye_solo.webp",
		title: "Produits",
		subtitle: "Objets",
	},
	{
		imageUrl: "/img/credence.webp",
		title: "Produits",
		subtitle: "Projets-sur-mesure",
		objectPosition: "right",
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
		imageUrl: "/img/echantillons.webp",
		title: "Produits",
		subtitle: "Echantillons",
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
					<Image
						className="object-cover"
						src="/img/valorisation-marc-de-pomme.webp"
						fill={true}
						alt="Valorisation marc de pomme"
					/>
				</div>
			</div>

			<div className="flex h-20 border-y border-brown-100 z-20 sticky top-0 ">
				<div className="basis-4/12 border-r px-6 flex items-center bg-cream-100"></div>
				<div className="basis-8/12 flex justify-around items-center h-full bg-cream-100/40 backdrop-blur-md">
					<div className="text-brown-100 text-lg">Produits</div>
					<div className="text-brown-100 text-lg">A propos</div>
					<div className="text-brown-100 text-lg">Contact</div>
				</div>
			</div>

			<div className="flex z-10 relative flex-col">
				{products.map((product) => {
					return (
						<ProductHero
							key={product.title}
							imageUrl={product.imageUrl}
							title={product.title}
							subtitle={product.subtitle}
							objectPosition={product.objectPosition}
						/>
					);
				})}
			</div>
			<div className="border-b border-brown-100">
				<LogoCloud logos={logos} />
			</div>
			<div className="flex z-10 relative flex-col">
				{abouts.map((about) => {
					return (
						<AboutHero
							key={about.title}
							imageUrl={about.imageUrl}
							title={about.title}
							subtitle={about.subtitle}
						/>
					);
				})}
			</div>
		</div>
	);
}
