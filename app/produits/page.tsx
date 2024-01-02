import Image from "next/image";
import { ContactHero } from "@/components/ContactHero";
import { Metadata } from "next";
import { Menu } from "@/components/Menu";
import Products from "@/components/Products";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Adaozañ - Produits",
	description: "Terme breton, définition: recycler, revaloriser",
};

export default async function Produits() {
	return (
		<div className="w-full bg-brown-100 relative h-min min-h-full">
			<div className="flex-1 flex w-full h-[60vh] sticky top-0 z-1">
				<div className="flex basis-4/12 p-12 text-2xl font-heading">
					<Link href="/">
						<Image
							src="/img/logo-white.png"
							width={500}
							height={500}
							alt="Logo Adaozan"
						/>
					</Link>
				</div>
				<div className="flex basis-8/12  flex-col justify-between">
					<span className="text-cream-100 p-12 text-3xl text-right">
						Produits
					</span>
					<span className="text-2xl font-heading font-bold p-8 text-cream-100 text-right">
						Des objets naturels fabriqués artisanalement à partir de
						déchets de pommes locaux, comme alternative innovante
						aux produits issus de l’industrie petro-chimique
					</span>
				</div>
			</div>
			<Menu />
			<Products />
			<ContactHero />
		</div>
	);
}
