import classNames from "classnames";

export const ContactHero = () => {
	const sentence = "N'hésitez pa sà nous contacter pour plus d'informations";
	const networks = [
		{
			title: "Mail",
			href: "#",
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
			<div className="basis-1/2 flex items-center bg-cream-100 z-10 border-r border-brown-100">
				<span>{sentence}</span>
			</div>
			<div className="basis-1/2 flex flex-col">
				{networks.map((network, index) => {
					console.log("index", index);
					return (
						<a
							href={network.href}
							key={network.title}
							className={classNames(
								"p-12 bg-cream-100 z-10 border-b border-brown-100",
								{
									"border-none": index < networks.length,
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