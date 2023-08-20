import classNames from "classnames";

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

	return (
		<div className="flex">
			<div className="flex-1 flex items-center bg-cream-100 z-10 border-r border-brown-100 flex-col-reverse">
				<span className="self-end items-end p-12 text-brown-100 text-5xl">
					{sentence}
				</span>
			</div>
			<div className="flex-1 flex flex-col">
				{networks.map((network, index) => {
					return (
						<a
							href={network.href}
							key={network.title}
							className={classNames(
								"p-12 bg-cream-100 z-10 border-b border-brown-100 text-xl font-bold font-heading text-brown-100 cursor-pointer",
								{
									"border-none":
										index === networks.length - 1,
								}
							)}
						>
							{network.title}
						</a>
					);
				})}
			</div>
		</div>
	);
};
