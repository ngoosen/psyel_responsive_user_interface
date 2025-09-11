import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const params = new URLSearchParams(searchParams);

  const response = await fetch("https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/notes?" + params);
  const data = await response.json();

  return new Response(JSON.stringify(data));
}
