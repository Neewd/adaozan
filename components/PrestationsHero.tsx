import { PrestationTexts, prestations } from "./prestations.data";
import Carousel from "./Carousel";

export const PrestationsHero = () => {
	return (
		<div className="flex flex-col sm:flex-row relative border-b border-brown-100 z-10 bg-cream-100">
			<div className="flex flex-col basis-4/12">
				<div className="bg-brown-100 px-8 py-4 flex text-cream-100 uppercase text-lg font-heading">
					Prestations
				</div>
				{prestations.prestationsHeros.map((text: PrestationTexts) => (
					<div
						className="w-full border-b border-brown-100 border-r last:border-b-0 px-8 py-4 text-brown-100 font-heading"
						key={text.id}
					>
						<div className="font-xl text-brown-100 font-semibold">
							{text.title}
						</div>
						{text.descriptions.map((description) => (
							<div key={description}>{description}</div>
						))}
					</div>
				))}
			</div>
			<div className="flex flex-col sm:basis-8/12 relative h-[250px] sm:h-auto basis-auto">
				<Carousel images={prestations.images} cursorColor="cream" />
			</div>
		</div>
	);
};
