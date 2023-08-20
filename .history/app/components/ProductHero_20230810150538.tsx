import Image from "next/image";

export interface ProductHeroProps {
	imageUrl: string;
	imageAlt?: string;
	title: string;
	subtitle: string;
}

export const ProductHero = ({
	imageUrl,
	imageAlt,
	title,
	subtitle,
}: ProductHeroProps) => {
	return (
		<div className="flex w-full h-[500px] bg-cream-100 cursor-pointer">
			<div className="flex basis-4/12 relative border-b border-brown-100">
				<Image
					className="object-cover border-r border-brown-100"
					src={imageUrl}
					fill={true}
					alt={imageAlt ?? ""}
				/>
			</div>
			<div className="flex basis-8/12 relative gap-3 flex-col border-b border-brown-100">
				<div className="sticky p-12 h-min">
					<div className="text-sm text-brown-100">{title}</div>
					<div className="text-4xl text-brown-100 font-semibold font-heading">
						{subtitle}
					</div>
				</div>
			</div>
		</div>
	);
};
