import { describe } from "node:test";

export const abouts = [
	{
		id: 1,
		imageUrl: "/img/marc-de-pomme-sec.webp",
		title: "A propos",
		subtitle: "Marc de pommes",
		descriptions: [
			{
				id: 1,
				type: "text",
				imageUrl: "",
				title: "Le cidre",
				description:
					"Chaque automne, 125 000 tonnes de pommes sont récoltées, broyées et pressées pour en extraire leurs jus afin de produire les millions de litres de cidre produits en France.",
			},
			{
				id: 2,
				type: "text",
				imageUrl: "",
				title: "Le marc de pomme",
				description:
					"De ce processus résulte d'un côté le moût, liquide destiné à la fermentation qui donnera le cidre, et de l'autre une masse compacte et humide composée de chair, peaux et pépins : le marc de pommes. En grande quantité, ce déchet devient rapidement encombrant pour les producteurs du territoire.",
			},
			{
				id: 3,
				type: "number",
				numbers: [
					{
						number: 0,
						unit: "%",
						title: "Number 1",
					},
					{
						number: 0,
						unit: "%",
						title: "Number 2",
					},
					{
						number: 0,
						unit: "%",
						title: "Number 3",
					},
				],
			},
			{
				id: 4,
				type: "text",
				imageUrl: "",
				title: "Du déchet au co-produit",
				description:
					"Notre objectif avec Adaozañ (qui signifie recycler ou valoriser en Breton) est de transformer le déchet marc de pommes en co-produit, valorisant ainsi l’intégralité des éléments de la production de cidre.",
			},
		],
	},
	{
		id: 2,
		imageUrl: "/img/transformation.webp",
		title: "A propos",
		subtitle: "Matière",
		descriptions: [
			{
				id: 1,
				type: "text",
				imageUrl: "",
				title: "Origines",
				description:
					"Adaozañ, qui signifie “recycler” en Breton, est un projet de valorisation du marc de pommes, déchet de l’industrie du cidre.Lors d’une visite dans une cidrerie locale en 2021, Youenn & Guillaume découvrent l’existence du marc de pommes. Youenn & Guillaume, duo breton de designer/artisan, partagent la vision commune que l’évolution des rapports aux déchets constitue une réponse aux enjeux environnementaux.",
			},
		],
	},
	{
		id: 3,
		imageUrl: "/img/equipe.jpg",
		title: "A propos",
		subtitle: "Origines",
		descriptions: [],
	},
];
