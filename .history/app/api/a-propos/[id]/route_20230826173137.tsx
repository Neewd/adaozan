import { NextResponse } from "next/server";

const abouts = [
	{
		imageUrl: "/img/marc-de-pomme-sec.webp",
		title: "A propos",
		subtitle: "Marc de pommes",
	},
	{
		imageUrl: "/img/transformation.webp",
		title: "A propos",
		subtitle: "Matière",
	},
	{
		imageUrl: "/img/equipe.jpg",
		title: "A propos",
		subtitle: "Origines",
	},
];

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const data = products.find((product) => product.id === +params.id);
	return NextResponse.json(data ?? {});
}
