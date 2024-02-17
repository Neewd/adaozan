/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Image as PrestationImage } from "./prestations.data";

export type CursorColor = "brown" | "cream";

export default function Carousel({
	images,
	cursorColor = "brown",
}: {
	images: PrestationImage[];
	cursorColor?: CursorColor;
}) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [previousImageIndex, setPreviousImageIndex] = useState(0);
	const [nextImageIndex, setNextImageIndex] = useState(0);

	const [previousImageUrl, setPreviousImageUrl] = useState("");
	const [currentImageUrl, setCurrentImageUrl] = useState("");
	const [nextImageUrl, setNextImageUrl] = useState("");

	useEffect(() => {
		let previousImageIndex = currentImageIndex - 1;
		let nextImageIndex = currentImageIndex + 1;
		setPreviousImageIndex(previousImageIndex);
		setNextImageIndex(nextImageIndex);

		setCurrentImageUrl(images[currentImageIndex]?.url);
		setPreviousImageUrl(images[previousImageIndex]?.url);
		setNextImageUrl(images[nextImageIndex]?.url);

		if (currentImageIndex === 0) {
			previousImageIndex = images.length - 1;
			setPreviousImageIndex(images.length - 1);
			setPreviousImageUrl(images[previousImageIndex]?.url);
		}
		if (currentImageIndex === images.length) {
			setNextImageIndex(0);
			setNextImageUrl(images[0]?.url);
		}
	}, [currentImageIndex]);

	const handleNext = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="bg-cream-100 h-full w-full relative">
			<>
				<Image
					key={previousImageIndex}
					src={previousImageUrl}
					alt=""
					fill={true}
					className="hidden"
				/>
				<Image
					key={currentImageIndex}
					src={currentImageUrl}
					alt=""
					fill={true}
					priority={true}
					className="object-cover min-h-full w-full"
				/>
				<Image
					key={nextImageIndex}
					src={nextImageUrl}
					alt=""
					fill={true}
					className="hidden"
				/>
			</>
			<div className="absolute inset-0 flex items-center justify-between px-4 h-full z-10">
				<div
					className={classNames("hover:cursor-pointer", {
						"fill-brown-100": cursorColor === "brown",
						"fill-cream-100": cursorColor === "cream",
					})}
					onClick={handleNext}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						viewBox="0 96 960 960"
						width="20"
					>
						<path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
					</svg>
				</div>
				<div
					className={classNames("hover:cursor-pointer", {
						"fill-brown-100": cursorColor === "brown",
						"fill-cream-100": cursorColor === "cream",
					})}
					onClick={handlePrevious}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20"
						viewBox="0 96 960 960"
						width="20"
					>
						<path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
					</svg>
				</div>
			</div>
		</div>
	);
}
