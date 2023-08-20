import Image from "next/image";
import classNames from "classnames";

export type ObjectPosition = "right" | "center";

export interface ProductHeroProps {
	imageUrl: string;
	imageAlt?: string;
	title: string;
	subtitle: string;
	objectPosition?: ObjectPosition;
}

export const ProductHero = ({
	imageUrl,
	imageAlt,
	title,
	subtitle,
	objectPosition,
}: ProductHeroProps) => {
	console.log("objectPosition", objectPosition);
	return (
		<div className="flex w-full h-[400px] bg-cream-100 cursor-pointer">
			<div className="flex basis-4/12 relative border-b border-brown-100">
				<Image
					className={classNames(
						"object-cover border-r border-brown-100",
						{
							"object-right": objectPosition === "right",
						}
					)}
					src={imageUrl}
					fill={true}
					alt={imageAlt ?? ""}
				/>
			</div>
			<div className="flex basis-8/12 relative gap-3 flex-col border-b border-brown-100">
				<div className="sticky p-12  top-24">
					<div className="text-sm text-brown-100">{title}</div>
					<div className="text-4xl text-brown-100 font-semibold font-heading">
						{subtitle}
					</div>
				</div>
			</div>
		</div>
	);
};
