import { ContactHero } from "@/app/components/ContactHero";
import ImageCovered from "@/app/components/ImageCovered";
import { Menu } from "@/app/components/Menu";
import Image from "next/image";
import Link from "next/link";

async function getProduct(id: string) {
	const res = await fetch(`http://localhost:3000/api/produits/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Product({ params }: { params: { id: string } }) {
	const product = await getProduct(params.id);

	return (
		<>
			<div className="w-full bg-cream-100 relative h-min min-h-full">
				<div className="flex top-0 sticky w-full z-1 h-[90vh]">
					<div className="flex-1 border-r border-brown-100 ">
						<div className="p-12 flex-col flex">
							<span className="text-6xl mb-4 font-heading text-brown-100">
								{product.subtitle}
							</span>
							<span className="text-base text-brown-100">
								{product.title}
							</span>
						</div>
					</div>
					<div className="flex-1 relative">
						<ImageCovered
							imageUrl={product.imageUrl}
							imageAlt={product.imageAlt}
							priority={true}
						/>
					</div>
				</div>

				<Menu />

				<div className="flex border-b border-brown-100 relative">
					<div className="flex-1 overflow-hidden relative">
						<Image
							className="object-cover "
							src={product.imageUrl}
							fill={true}
							alt={product.imageAlt}
						/>
					</div>
					<div className="flex-1 border-l border-brown-100 font-heading">
						<div className="p-12 text-brown-100 border-b border-brown-100 flex items-center relative z-10 bg-cream-100 gap-2">
							<span className="font-bold">Produit</span>
							<span>-</span>
							<span>{product.subtitle}</span>
						</div>
						<div className="p-12 text-brown-100 border-b border-brown-100 flex items-center relative z-10 bg-cream-100 gap-2">
							<span className="font-bold ">Contenu</span>
							<span>-</span>
							<span>{product.content}</span>
						</div>
						<div className="p-12 text-brown-100 border-b border-brown-100 flex items-center relative z-10 bg-cream-100 gap-2">
							<span className="font-bold">Prix</span>
							<span>-</span>
							<span>{product.price}</span>
						</div>
						<div className="p-12 text-brown-100 flex items-center relative z-10 bg-cream-100 gap-2">
							<span className="font-bold">Disponibilité</span>
							<span>-</span>
							<span>{product.availability}</span>
						</div>
					</div>
				</div>
				<ContactHero />
			</div>
		</>
	);
}
