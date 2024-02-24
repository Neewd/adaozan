import Carousel from "@/components/Carousel";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import { products } from "./produits.data";
import { ProductHeroProps } from "./ProductHero";

export default async function Product({ id }: { id: string }) {
	const product: ProductHeroProps | undefined = products.find(
		(about) => about.id === +id
	);
	return (
		<>
			{product && (
				<>
					<div className="flex top-0 sticky w-full z-1 h-[90vh]">
						<div className="flex basis-4/12 p-6 h-full flex-col justify-between ">
							<Image
								src="/img/logo-description-white.png"
								width={500}
								height={500}
								alt="Logo Adaozan"
							/>
							<div className="p-8 flex-col flex">
								<span className="text-lg font-heading text-cream-100">
									{product.title}
								</span>
								<span className="text-lg font-bold mb-4 font-heading text-cream-100">
									{product.subtitle}
								</span>
							</div>
						</div>
						<div className="basis-8/12 relative">
							<Image
								className="p-4 object-cover"
								src={product.imageUrl}
								alt={product.imageAlt ?? ""}
								priority={true}
								fill={true}
							/>
						</div>
					</div>

					<Menu />

					<div className="flex border-b border-brown-100 relative bg-cream-100">
						<div className="basis-6/12 flex relative bg-cream-100">
							<Carousel images={product.carousel} />
						</div>
						<div className="flex-1 border-l border-brown-100 font-heading relative">
							<div className="p-8 flex-col text-brown-100 border-b border-brown-100 flex relative z-10 bg-cream-100 gap-2">
								<span className="font-bold">
									{product.subtitle}
								</span>
								<span>{product.content}</span>
								<span className="font-bold">
									{product.subContentTitle}
								</span>
								<span>{product.subContent}</span>
							</div>
							{product.details && (
								<div className="p-8 flex-col text-brown-100 flex border-b border-brown-100 relative z-10 bg-cream-100 gap-2">
									<span className="font-bold">Détails</span>
									<div className="flex flex-col">
										{product.details?.map(
											(detail: string) => {
												return (
													<>
														<span>{detail}</span>
													</>
												);
											}
										)}
									</div>
								</div>
							)}
							<div className="p-8 text-brown-100  flex items-center relative z-10 bg-cream-100 gap-2">
								<span className="font-bold">Prix</span>
								<span>-</span>
								<span>{product.price}</span>
							</div>
							{product.orderButtonUrl && (
								<a
									className="flex bg-brown-100 w-full text-cream-100 p-8 text-left hover:cursor-pointer"
									href={product.orderButtonUrl}
								>
									{product.orderButton}
								</a>
							)}
							{!product.orderButtonUrl && (
								<button className="bg-brown-100 w-full text-cream-100 p-8 text-left hover:cursor-pointer">
									{product.orderButton}
								</button>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
}
