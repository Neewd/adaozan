import Image from "next/image";
import Link from "next/link";
import { partners } from "./partners.data";
import classNames from "classnames";

export const LogoCloud = () => {
	return (
		<div className="flex relative border-b border-brown-100 z-10">
			<div className="grid grid-cols-12 sm:grid-cols-7 gap-3 p-2 sm:grid-row-1 w-full bg-cream-100">
				{partners.map(
					(partner: { imageUrl: string; linkUrl: string }, index) => {
						return (
							<div
								className={classNames("px-2 py-1 sm:px-12 sm:py-4 flex-1 bg-cream-100  z-20 flex items-center justify-center sm:col-span-1", {
									"col-span-3 ": index <= 3,
									"col-span-4": index > 3,
								})}
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
