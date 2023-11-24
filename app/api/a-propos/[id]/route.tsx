import { NextResponse } from "next/server";
import { abouts } from "../data";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const data = abouts.find((about) => about.id === +params.id);
	return NextResponse.json(data ?? {});
}
