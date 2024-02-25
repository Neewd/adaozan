import Image from "next/image";
import Link from "next/link";
import { partners } from "./partners.data";

export const LogoCloud = () => {
	return (
		<div className="flex relative border-b border-brown-100 z-10">
			<div className="flex w-full bg-cream-100">
				{partners.map(
					(partner: { imageUrl: string; linkUrl: string }) => {
						return (
							<div
								className="px-12 flex-1 py-4 flex-1bg-cream-100  z-20 flex items-center justify-center"
								key={partner.imageUrl}
							>
								<Link href={partner.linkUrl} target="_blank">
									<Image
										className="flex items-center justify-center"
										src={partner.imageUrl}
										width={200}
										height={200}
										alt=""
									/>
								</Link>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};
