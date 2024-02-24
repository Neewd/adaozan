import { ProductHeroProps } from "./ProductHero";

export const products: ProductHeroProps[] = [
	{
		id: 1,
		imageUrl: "/img/produits/decouverte.webp",
		imageAlt: "Coffret échantillon",
		title: "Produits",
		subtitle: "Coffret échantillon",
		slug: "pack-decouverte",
		price: "18€ (frais de port compris)",
		details: ["Diamètre : 8cm", "Épaisseur : 5mm"],
		content: `Les premiers échantillons de notre éco-matériau local et responsable, composés exclusivement de déchets de pommes revalorisés.`,
		subContent: `Contenu du pack : deux échantillons ronds, une fiole de marc de pommes et une notice explicative`,
		description:
			"Les premiers échantillons de notre éco-matériau local et responsable, composés exclusivement de déchets de pommes revalorisés.",
		orderButton: "Commande",
		carousel: [
			{
				id: 1,
				url: "/img/produits/decouverte/carousel/1.webp",
				position: "center",
			},
			{
				id: 2,
				url: "/img/produits/decouverte/carousel/2.webp",
				position: "center",
			},
			{
				id: 3,
				url: "/img/produits/decouverte/carousel/3.webp",
				position: "center",
			},
			{
				id: 4,
				url: "/img/produits/decouverte/carousel/4.webp",
				position: "center",
			},
			{
				id: 5,
				url: "/img/produits/decouverte/carousel/5.webp",
				position: "center",
			},
		],
	},
	{
		id: 2,
		imageUrl: "/img/produits/premieres-creations.webp",
		imageAlt: "Les objets réalisés par Adaozan",
		title: "Vide poche",
		subtitle: "Premières créations",
		slug: "objets",
		price: "32€ TTC",
		details: [
			"Dimensions : longueur 22cm x largeur10cm",
			"Épaisseur : 3cm",
		],
		content:
			"Tout premier objet de notre série auto-éditiée d’objets du quotidien au design simple et élégant, fabriqués à la main dans notre atelier breton",
		subContent:
			"Composition : 100% marc de pommes Finition : Cire artisanale naturelle",
		description: `Tout premier objet de notre série auto-éditiée d’objets du quotidien au design simple et élégant, fabriqués à la main dans notre atelier breton
      `,
		orderButton: "Commande",
		orderButtonUrl: "https://buy.stripe.com/dR68x62Tm52PdIQ7su",
		carousel: [
			{
				id: 1,
				url: "/img/produits/premieres-creations/carousel/1.webp",
				position: "center",
			},
			{
				id: 2,
				url: "/img/produits/premieres-creations/carousel/2.webp",
				position: "center",
			},
			{
				id: 3,
				url: "/img/produits/premieres-creations/carousel/3.webp",
				position: "center",
			},
			{
				id: 4,
				url: "/img/produits/premieres-creations/carousel/4.webp",
				position: "center",
			},
			{
				id: 5,
				url: "/img/produits/premieres-creations/carousel/5.webp",
				position: "center",
			},
		],
	},
	{
		id: 3,
		imageUrl: "/img/produits/sur-mesure.webp",
		imageAlt: "Image d'exemple de projet sur mesure réalisés par Adaozan",
		title: "Produits",
		subtitle: "Coffret découverte",
		objectPosition: "right",
		slug: "projet-sur-mesure",
		price: "48€ TTC",
		content:
			"Coffret permettant de découvrir différentes facettes de notre capacité de transformation de notre matière.",
		subContent:
			"Un vide-poche texture au choix, un échantillon gravé au laser et une lettre découpée à la commande numérique.",
		subContentTitle: "Contenu",
		description:
			"Un vide-poche texture au choix, un échantillon gravé au laser et une lettre découpée à la commande numérique.",
		orderButton: "Commande",
		orderButtonUrl: "https://buy.stripe.com/aEUcNmbpS9j55ck289",
		carousel: [
			{
				id: 1,
				url: "/img/produits/sur-mesure/carousel/1.webp",
				position: "center",
			},
			{
				id: 2,
				url: "/img/produits/sur-mesure/carousel/2.webp",
				position: "center",
			},
			{
				id: 3,
				url: "/img/produits/sur-mesure/carousel/3.webp",
				position: "center",
			},
			{
				id: 4,
				url: "/img/produits/sur-mesure/carousel/4.webp",
				position: "center",
			},
		],
	},
];
