import Link from "next/link";
import { ProductHero, ProductHeroProps } from "../components/ProductHero";
import { ContactHero } from "../components/ContactHero";
import { Metadata } from "next";
import { Menu } from "../components/Menu";

export const metadata: Metadata = {
	title: "Adaozañ - Produits",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default function Produits() {
	const products: ProductHeroProps[] = [
		{
			id: 1,
			imageUrl: "/img/echantillons.webp",
			title: "Produits",
			subtitle: "Pack d'échantillons",
			slug: "pack-echantillons",
		},
		{
			id: 2,
			imageUrl: "/img/broye_solo.webp",
			title: "Produits",
			subtitle: "Vide poche",
			slug: "vide-poche",
		},
		{
			id: 3,
			imageUrl: "/img/credence.webp",
			title: "Produits",
			subtitle: "Projet-sur-mesure",
			objectPosition: "right",
			slug: "projet-sur-mesure",
		},
	];

	return (
		<div className="w-full bg-cream-100 relative h-min min-h-full">
			<div className="flex-1 flex w-full h-[60vh] sticky top-0 z-1">
				<div className="flex basis-4/12 text-2xl border-r border-brown-100 font-heading">
					<span className="text-brown-100 p-12 font-bold text-3xl">
						Produits
					</span>
				</div>
				<div className="flex basis-8/12 justify-end flex-col">
					<span className="text-2xl font-heading font-bold p-12 text-brown-100">
						Des objets du quotidien fabriqués en marc de pommes pour
						un avenir durable
					</span>
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
			<ContactHero />
		</div>
	);
}
