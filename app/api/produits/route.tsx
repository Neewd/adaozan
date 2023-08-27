import { NextResponse } from "next/server";
import { products } from "./data";

export async function GET(request: Request) {
	return NextResponse.json(products);
}
