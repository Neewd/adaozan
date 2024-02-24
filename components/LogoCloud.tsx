import Image from "next/image";
import Link from "next/link";

const logos: { imageUrl: string; linkUrl: string }[] = [
	{
		imageUrl: "/img/partenaires/region-bretagne.webp",
		linkUrl: "https://www.bretagne.bzh/",
	},
	{
		imageUrl: "/img/partenaires/technopole.webp",
		linkUrl: "https://www.tech-quimper.bzh/",
	},
	{
		imageUrl: "/img/partenaires/grdf.png",
		linkUrl: "https://fondationgrdf.fr/",
	},
	{
		imageUrl: "/img/partenaires/live-for-good.webp",
		linkUrl: "https://www.live-for-good.org/",
	},
	{
		imageUrl: "/img/partenaires/banque-postale.webp",
		linkUrl: "https://www.labanquepostale.fr/",
	},
	{
		imageUrl: "/img/partenaires/makesense.webp",
		linkUrl: "https://makesense.org/",
	},
	{
		imageUrl: "/img/partenaires/fondation-de-france.webp",
		linkUrl: "https://www.fondationdefrance.org/fr/",
	},
];

export const LogoCloud = () => {
	return (
		<div className="flex relative border-b border-brown-100 z-10">
			<div className="flex w-full bg-cream-100">
				{logos.map((logo) => {
					return (
						<div
							className="px-12 flex-1 py-4 flex-1bg-cream-100  z-20 flex items-center justify-center"
							key={logo.imageUrl}
						>
							<Link href={logo.linkUrl} target="_blank">
								<Image
									className="flex items-center justify-center"
									src={logo.imageUrl}
									width={200}
									height={200}
									alt=""
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};
