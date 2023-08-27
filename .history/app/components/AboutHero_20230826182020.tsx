"use client";

import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

export interface AboutHeroProps {
	id: string;
	imageUrl: string;
	imageAlt?: string;
	title: string;
	subtitle: string;
}

export const AboutHero = ({
	id: string,
	imageUrl,
	imageAlt,
	title,
	subtitle,
}: AboutHeroProps) => {
	return (
		<div className="flex w-full h-[300px] bg-cream-100 cursor-pointer">
			<Link href={`a-propos/${id}`} className=" flex w-full relative">
				<div className="flex basis-4/12 relative border-b border-brown-100">
					<Image
						className={classNames(
							"object-cover border-r border-brown-100"
						)}
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
						className="bg-cream-100 w-full absolute inset-0 h-full  border-r border-brown-100"
					></motion.div>
				</div>
				<div className="flex basis-8/12 relative gap-3 flex-col border-b border-brown-100">
					<div className="sticky p-12  top-24">
						<div className="text-sm text-brown-100">{title}</div>
						<div className="text-4xl text-brown-100 font-semibold font-heading">
							{subtitle}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
