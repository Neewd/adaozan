import ImageCovered from "@/app/components/ImageCovered";
import { Menu } from "@/app/components/Menu";
import Image from "next/image";
import Link from "next/link";

async function getAbout(id: string) {
	const res = await fetch(`http://localhost:3000/api/abouts/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function About({ params }: { params: { id: string } }) {
	const about = await getAbout(params.id);

	return (
		<>
			<div className="w-full bg-cream-100 relative h-min min-h-full">
				<div className="flex top-0 sticky w-full z-1 h-[90vh]">
					<div className="flex-1 border-r border-brown-100 ">
						<div className="p-12 flex-col flex">
							<span className="text-6xl mb-4 font-heading text-brown-100">
								{about.subtitle}
							</span>
							<span className="text-base text-brown-100">
								{about.title}
							</span>
						</div>
					</div>
					<div className="flex-1 relative">
						<ImageCovered
							imageUrl={about.imageUrl}
							imageAlt={about.imageAlt}
							priority={true}
						/>
					</div>
				</div>

				<Menu />

				<div className="flex border-b border-brown-100 relative">
					<div className="flex-1 overflow-hidden relative">
						<Image
							className="object-cover "
							src={about.imageUrl}
							fill={true}
							alt={about.imageAlt}
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
