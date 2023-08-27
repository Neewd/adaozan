import { NextResponse } from "next/server";

const abouts = [
	{
		id: 1,
		imageUrl: "/img/marc-de-pomme-sec.webp",
		title: "A propos",
		subtitle: "Marc de pommes",
	},
	{
		id: 2,
		imageUrl: "/img/transformation.webp",
		title: "A propos",
		subtitle: "Matière",
	},
	{
		id: 3,
		imageUrl: "/img/equipe.jpg",
		title: "A propos",
		subtitle: "Origines",
	},
];

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const data = abouts.find((about) => about.id === +params.id);
	return NextResponse.json(data ?? {});
}
