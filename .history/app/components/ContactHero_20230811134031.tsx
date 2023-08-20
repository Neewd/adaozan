export const ContactHero = () => {
	const sentence = "N'hésitez pa sà nous contacter pour plus d'informations";
	return (
		<div className="flex">
			<div className="basis-1/2 flex items-center bg-cream-100 z-10">
				<span>{sentence}</span>
			</div>
			<div className="basis-1/2 flex flex-col">
				<a href="" className="p-12 bg-cream-100 z-10">
					a
				</a>
				<a href="" className="p-12  bg-cream-100 z-10">
					b
				</a>
				<a href="" className="p-12  bg-cream-100 z-10">
					c
				</a>
				<a href="" className="p-12  bg-cream-100 z-10">
					d
				</a>
			</div>
		</div>
	);
};
