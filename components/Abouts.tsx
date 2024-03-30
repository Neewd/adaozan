import { AboutHero } from "./AboutHero";
import { abouts } from "./a-propos.data";

export default async function Abouts({
	withDescription = false,
}: {
	withDescription?: boolean;
}) {
	return (
		<>
			<div className="flex z-10 relative flex-col sm:flex-row">
				{abouts.map((about, index) => {
					return (
						<AboutHero
							key={index}
							id={about.id}
							imageUrl={about.imageUrl}
							title={about.title}
							subtitle={about.subtitle}
							descriptions={about.descriptions}
							description={about.description}
							withDescription={withDescription}
						/>
					);
				})}
			</div>
		</>
	);
}
