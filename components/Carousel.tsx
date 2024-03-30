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
	const [previousImageIndexKey, setPreviousImageIndexKey] = useState("0");
	const [currentImageUrl, setCurrentImageUrl] = useState("");
	const [currentImageIndexKey, setCurrentImageIndexKey] = useState("1");
	const [nextImageUrl, setNextImageUrl] = useState("");
	const [nextImageIndexKey, setNextImageIndexKey] = useState("2");

	useEffect(() => {
		let previousImageIndex = currentImageIndex - 1;
		let nextImageIndex = currentImageIndex + 1;

		setCurrentImageUrl(images[currentImageIndex]?.url);
		setCurrentImageIndexKey(`${images[currentImageIndex]?.url}-1`);

		if (currentImageIndex === 0) {
			previousImageIndex = images.length - 1;
			setPreviousImageIndex(images.length - 1);
			setPreviousImageUrl(images[previousImageIndex]?.url);
			setPreviousImageIndexKey(`${images[previousImageIndex]?.url}-0`);
		} else {
			setPreviousImageIndex(previousImageIndex);
			setPreviousImageUrl(images[previousImageIndex]?.url);
			setPreviousImageIndexKey(`${images[previousImageIndex]?.url}-0`);
		}

		if (currentImageIndex === images.length) {
			setNextImageIndex(0);
			setNextImageUrl(images[0]?.url);
			setNextImageIndexKey(`${images[nextImageIndex]?.url}-2`);
		} else {
			setNextImageUrl(images[nextImageIndex]?.url);
			setNextImageIndex(nextImageIndex);
			setNextImageIndexKey(`${images[nextImageIndex]?.url}-2`);
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
				{ previousImageUrl &&
					<Image
						key={previousImageIndexKey}
						src={previousImageUrl}
						alt="previous image"
						fill={true}
						className="hidden"
					/>
				}
				{ currentImageUrl &&
					<Image
						key={currentImageIndexKey}
						src={currentImageUrl}
						alt="current image"
						fill={true}
						priority={true}
						className="object-cover min-h-full w-full"
					/>
				}
				{ nextImageUrl &&
					<Image
						key={nextImageIndexKey}
						src={nextImageUrl}
						alt="next image"
						fill={true}
						className="hidden"
					/>
				}



			</>
			<div className="absolute inset-0 flex items-center justify-between px-4 h-full z-10">
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
						<path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
					</svg>
				</div>
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
						<path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
					</svg>
				</div>
			</div>
		</div>
	);
}
