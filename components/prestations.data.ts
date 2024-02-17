export interface PrestationHeroProps {
	prestationsHeros: PrestationTexts[];
	images: Image[];
}

export interface PrestationTexts {
	id: number;
	title: string;
	descriptions: string[];
}

export interface Image {
	id: number;
	url: string;
	position: "center" | "top" | "bottom";
}

export const prestations: PrestationHeroProps = {
	prestationsHeros: [
		{
			id: 1,
			title: "Étude de faisabilité",
			descriptions: [
				"Définition du cahier des charges",
				"Recherche technique et chiffrage",
				"Propositions visuelle (plans 2D et modélisation 3D)",
			],
		},
		{
			id: 2,
			title: "Prototypage",
			descriptions: [
				"Tests de découpe CN / gravure laser",
				"Tests de finition (cire, vernis...)",
				"Dessin et réalisation d’un prototype",
			],
		},
		{
			id: 3,
			title: "Production",
			descriptions: [
				"Réalisation d’un moule sur-mesure",
				"ou transformation d’un élément existant",
				"Production, découpe, gravure, finition",
			],
		},
	],
	images: [
		{
			id: 11,
			url: "/img/prestations/credence.webp",
			position: "center",
		},
		{
			id: 22,
			url: "/img/prestations/decoupe.webp",
			position: "center",
		},
		{
			id: 33,
			url: "/img/prestations/prix.webp",
			position: "center",
		},
	],
};
