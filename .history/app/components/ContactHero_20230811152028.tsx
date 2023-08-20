import classNames from "classnames";

export const ContactHero = () => {
	const sentence = "N'hésitez pa sà nous contacter pour plus d'informations";
	const networks = [
		{
			title: "Mail",
			href: "mailto:clement.bacouelle@gmail.com",
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
			<div className="flex-1 flex items-center bg-cream-100 z-10 border-r border-brown-100">
				<span className="self-end items-end">{sentence}</span>
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
