import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const API_KEY = process.env.API_KEY;
  const query = 'tesla';
  const movies = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
    .then((res) => res.json());

  return NextResponse.json(movies);
}