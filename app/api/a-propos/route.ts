import { NextResponse } from 'next/server';
import { abouts } from './data';

export async function GET(request: Request) {
  return NextResponse.json(abouts);
}
