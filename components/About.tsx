import { AboutHeroProps } from "./AboutHero";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import classNames from "classnames";
import { abouts } from "./a-propos.data";

export default async function About({ id }: { id: string }) {
	const about: AboutHeroProps | undefined = abouts.find(
		(about) => about.id === +id
	);
	return (
		<>
			{about && (
				<>
					<div className="flex top-0 sticky w-full z-1 h-[40vh]">
						<div className="flex-1 ">
							<div className="flex basis-4/12 p-6 flex-col justify-between h-full relative">
								<Image
									className="object-cover"
									src="/img/logo-description-white.png"
									width={500}
									height={500}
									alt="Logo Adaozan"
								/>
								<div className="px-8 py-4 flex-col flex bottom-0">
									<span className="text-lg font-heading text-cream-100">
										{about.title}
									</span>
									<span className="text-lg font-bold font-heading text-cream-100">
										{about.subtitle}
									</span>
								</div>
							</div>
						</div>
						<div className=" basis-8/12 relative p-4">
							<Image
								src={about.imageUrl}
								alt={about.imageAlt ?? ""}
								priority={true}
								fill={true}
								className="p-4 object-cover"
							/>
						</div>
					</div>

					<Menu />

					<div className="flex relative bg-cream-100">
						{about.descriptions.map((description, index) => {
							return (
								<div
									className={classNames(
										"flex flex-1 border-b border-brown-100 flex-col",
										{
											"border-r":
												index !==
												about.descriptions.length - 1,
										}
									)}
									key={description.id}
								>
									<div className="w-full p-4">
										{description.imageUrl && (
											<Image
												className="object-cover w-full aspect-square"
												src={description.imageUrl}
												width={700}
												height={700}
												alt={description.imageAlt}
											/>
										)}
									</div>
									<div className="flex-1 flex text-brown-100">
										<div className="pb-4 pr-4 pl-4 flex flex-col">
											<span className="font-bold mb-2">
												{description.title}
											</span>
											<span>{description.content}</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					{about.cards && (
						<div
							className={classNames(
								"flex relative bg-cream-100 "
							)}
						>
							{about.cards.map((card, index) => {
								return (
									<div
										className={classNames(
											`flex flex-1 relative bg-cream-100 border-b border-brown-100 p-8 flex-col text-brown-100 items-center
					justify-center`,
											{
												"border-r":
													index !==
														about.cards?.length ??
													0 - 1,
											}
										)}
										key={card.id}
									>
										<span className="font-bold whitespace-nowrap text-center">
											{card.title}
										</span>
										<span className="text-center">
											{card.content}
										</span>
										{card.content2 && (
											<span>{card.content2}</span>
										)}
									</div>
								);
							})}
						</div>
					)}
				</>
			)}
		</>
	);
}
