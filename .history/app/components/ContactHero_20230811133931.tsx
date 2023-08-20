export const ContactHero = () => {
	const sentence = "N'hésitez pa sà nous contacter pour plus d'informations";
	return (
		<div className="flex">
			<div className="basis-1/2 flex items-center">
				<span>{sentence}</span>
			</div>
			<div className="basis-1/2 flex flex-col">
				<a href="" className="p-12">
					a
				</a>
				<a href="" className="p-12">
					b
				</a>
				<a href="" className="p-12">
					c
				</a>
				<a href="" className="p-12">
					d
				</a>
			</div>
		</div>
	);
};
