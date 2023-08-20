export const ContactHero = () => {
	const sentence = "N'hésitez pa sà nous contacter pour plus d'informations";
	return (
		<div className="flex">
			<div className="basis-1/2 flex items-center">{sentence}</div>
			<div className="basis-1/2 flex flex-col">
				<a href="">a</a>
				<a href="">b</a>
				<a href="">c</a>
			</div>
		</div>
	);
};
