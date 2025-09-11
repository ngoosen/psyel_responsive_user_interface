export async function GET() {
  const response = await fetch("https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/cours");
  const data = await response.json();

  return new Response(JSON.stringify(data));
}
