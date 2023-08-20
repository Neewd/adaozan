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
			href: "https://www.instagram.com/adaozan.fr",
		},
		{
			title: "Facebook",
			href: "https://www.facebook.com/adaozan.fr",
		},
		{
			title: "LinkedIn",
			href: "https://www.linkedin.com/company/adaoza%C3%B1",
		},
	];

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
								className="flex relative w-full group"
							>
								<div className="absolute left-0 h-full bg-brown-100 z-20 border-l-0 group-hover:border-l-8 border-brown-100 transition-all duration-200"></div>
								<motion.a
									href={network.href}
									target="_blank"
									rel="noopener noreferrer"
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
