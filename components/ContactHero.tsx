"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ContactHero = () => {
	const email: string = "contact@adaozan.fr";
	const emailSubject: string = "Contact & Informations Adaozan";
	const emailBody: string =
		"Je vous contacte pour avoir de plus amples information sur vos produits et votre entreprise. Pouvons-nous convenir d'un rendez-vous ?";
	const sentence =
		"Pour plus d'informations, n'hésitez pas à nous contacter directement par mail juste ici 🍎";
	const mail = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
	const networks = [
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
			<div className="flex border-b border-brown-100 relative">
				<div className="basis-9/12 flex items-center bg-cream-100 z-10 border-r border-brown-100 flex-col-reverse">
					<a
						className="h-full p-8 text-brown-100 text-3xl leading-snug flex flex-col justify-between"
						href={mail}
					>
						{" "}
						<span>{sentence}</span>
						<span>{email}</span>
					</a>
				</div>
				<div className="basis-3/12 flex flex-col">
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
			<div className="flex  bg-brown-100 h-24">
				<Link
					href="/"
					className="flex items-center px-4 w-24 h-full relative flex-1"
				>
					<Image
						className="block"
						src="/img/logo-tilde-white.webp"
						alt="Link to home page"
						width={25}
						height={35}
					/>
				</Link>
				<div className="flex flex-col text-cream-100 flex-1 items-end px-4 py-6 font-heading relative">
					<Link
						href="/legal"
						className="flex items-center h-full relative flex-1 "
					>
						Mentions légales
					</Link>
					<Link
						href="/cgv"
						className="flex items-center h-full relative flex-1 "
					>
						Condtions générales
					</Link>
				</div>
			</div>
		</>
	);
};
