import Image from "next/image";
import Link from "next/link";

const logos: { imageUrl: string; linkUrl: string }[] = [
	{
		imageUrl: "/img/partenaires/region-bretagne.png",
		linkUrl: "https://aides.bretagne.bzh/aides/#/crbr/",
	},
	{
		imageUrl: "/img/partenaires/technopole.png",
		linkUrl: "https://7technopoles-bretagne.bzh/",
	},
	{
		imageUrl: "/img/partenaires/grdf.png",
		linkUrl: "https://www.grdf.fr/",
	},
	{
		imageUrl: "/img/partenaires/live-for-good.png",
		linkUrl: "https://www.live-for-good.org/",
	},
	{
		imageUrl: "/img/partenaires/banque-postale.png",
		linkUrl: "https://www.labanquepostale.fr/",
	},
	{
		imageUrl: "/img/partenaires/makesense.png",
		linkUrl: "https://makesense.org/",
	},
	{
		imageUrl: "/img/partenaires/fondation-de-france.png",
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
