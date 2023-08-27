import { NextResponse } from "next/server";
import { products } from "../data";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const data = products.find((product) => product.id === +params.id);
	return NextResponse.json(data ?? {});
}
