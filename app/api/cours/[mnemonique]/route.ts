import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ mnemonique: string }> }) {
  const mnemonique = (await params).mnemonique;
  const response = await fetch(`https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/cours?mnemonique=${mnemonique}`);
  const data = await response.json();

  return new Response(JSON.stringify(data));
}
