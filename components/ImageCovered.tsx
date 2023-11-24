"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ImageCoveredProps {
	imageUrl: string;
	imageAlt?: string;
	priority?: boolean;
}

export default function ImageCovered({
	imageUrl,
	imageAlt,
	priority = false,
}: ImageCoveredProps) {
	return (
		<>
			<Image
				className="object-cover"
				src={imageUrl}
				fill={true}
				priority={priority}
				alt={imageAlt ?? ""}
			/>
			<motion.div
				initial={{ width: "100%" }}
				whileInView={{ width: "0%" }}
				viewport={{ once: true }}
				transition={{
					duration: ".3",
				}}
				className="bg-cream-100 w-full absolute inset-0 h-ful"
			></motion.div>
		</>
	);
}
