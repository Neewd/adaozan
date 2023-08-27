import { ContactHero } from "@/app/components/ContactHero";
import { AboutHeroProps } from "@/app/components/AboutHero";
import ImageCovered from "@/app/components/ImageCovered";
import { Menu } from "@/app/components/Menu";
import Image from "next/image";

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
	const about: AboutHeroProps = await getAbout(params.id);

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

				<div className="flex relative flex-col bg-cream-100 border-b border-brown-100">
					{about.descriptions.map((description) => {
						return (
							<div
								className="flex border-b border-brown-100"
								key={description.id}
							>
								<div className="flex-1 flex relative">
									{description.imageUrl && (
										<Image
											src={description.imageUrl}
											fill={true}
											alt="Logo Adaozan"
										/>
									)}
								</div>
								<div className="flex-1 flex p-12 text-brown-100">
									<span>{description.title}</span>
									<span>{description.content}</span>
								</div>
							</div>
						);
					})}
				</div>
				<ContactHero />
			</div>
		</>
	);
}
