"use client";

import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ProductHeroProps {
	id: number;
	imageUrl: string;
	imageAlt?: string;
	title: string;
	subtitle: string;
	slug: string;
	objectPosition?: string;
	description?: string;
	carousel: string[];
	content: string;
	subContent: string;
	price: string;
	details?: string[];
	orderButton: string;
}

export const ProductHero = ({
	id,
	imageUrl,
	imageAlt,
	title,
	subtitle,
	objectPosition = "center",
	slug,
	description,
}: ProductHeroProps) => {
	return (
		<Link
			href={`produits/${id}`}
			className=" flex w-full relative p-4 bg-cream-100 border-r border-b border-brown-100"
		>
			<div className="flex flex-col w-full bg-cream-100 cursor-pointer aspect-square">
				<div className="flex h-full w-full relative ">
					<Image
						className={classNames("object-cover object-center", {
							"object-right": objectPosition === "right",
						})}
						src={imageUrl}
						fill={true}
						alt={imageAlt ?? ""}
					/>
					<motion.div
						initial={{ width: "100%" }}
						whileInView={{ width: "0%" }}
						viewport={{ once: true }}
						transition={{
							duration: ".5",
						}}
						className="bg-cream-100 w-full absolute inset-0 h-full "
					></motion.div>
				</div>
				<div className="flex relative gap-3 flex-col">
					<div className="sticky py-4 top-24">
						{!description && (
							<>
								<div className="text-sm text-brown-100">
									{title}
								</div>
								<div className="text-4xl text-brown-100 font-semibold font-heading">
									{subtitle}
								</div>
							</>
						)}
						{description && (
							<>
								<div className="text-lg text-brown-100  font-semibold">
									{subtitle}
								</div>
								<div className="text-xl text-brown-100 font-heading">
									{description}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};
