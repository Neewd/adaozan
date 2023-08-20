"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { CSSProperties, useState } from "react";

export const ContactHero = () => {
	const email: string = "contact@adaozan.fr";
	const emailSubject: string = "Contact & Informations Adaozan";
	const emailBody: string =
		"Je vous contacte pour avoir de plus amples information sur vos produits et votre entreprise. Pouvons-nous convenir d'un rendez-vous ?";
	const sentence =
		"N'hésitez pas à nous contacter pour plus d'informations 👋";
	const networks = [
		{
			title: "Mail",
			href: `mailto:${email}?subject=${emailSubject}&body=${emailBody}`,
		},
		{
			title: "Instagram",
			href: "#",
		},
		{
			title: "Facebook",
			href: "#",
		},
		{
			title: "LinkedIn",
			href: "#",
		},
	];

	const [hovered, setHovered] = useState(false);

	const handleHover = () => {
		setHovered(!hovered);
	};

	return (
		<>
			<div className="flex border-b border-brown-100">
				<div className="flex-1 flex items-center bg-cream-100 z-10 border-r border-brown-100 flex-col-reverse">
					<span className="self-end items-end p-12 text-brown-100 text-5xl leading-snug">
						{sentence}
					</span>
				</div>
				<div className="flex-1 flex flex-col">
					{networks.map((network, index) => {
						return (
							<div
								key={network.title}
								className="flex relative w-full"
								onMouseEnter={handleHover}
								onMouseLeave={handleHover}
								style={
									{
										"--border-width": hovered
											? "0.5rem"
											: "0", // This is your CSS variable
									} as CSSProperties
								}
							>
								<div className="absolute left-0 h-full bg-brown-100 border-l-4 z-20 border-brown-100 transition-all"></div>
								<motion.a
									href={network.href}
									className={classNames(
										"p-12 flex-1 bg-cream-100 z-10 border-b border-brown-100 text-xl font-bold font-heading text-brown-100 cursor-pointer",
										{
											"border-none":
												index === networks.length - 1,
										}
									)}
								>
									{network.title}
								</motion.a>
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex text-brown-100 text-xl font-bold font-heading">
				<div className="flex py-4 px-12 flex-1 border-r border-brown-100">
					Crédits
				</div>
				<div className="flex py-4 px-12 flex-1">CGV</div>
			</div>
		</>
	);
};
