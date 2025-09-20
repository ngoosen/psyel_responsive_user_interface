import { COURS } from "@/app/hooks/useCours";
import { INSCRIPTION } from "@/app/hooks/useInscriptions";
import { NOTE } from "@/app/hooks/useNotes";
import { reportAnomalies } from "@/lib/services/anomalies";
import { NextResponse } from "next/server";

export async function GET() {
  const apiUrls = [
    "https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/inscriptions",
    "https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/cours",
    "https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/notes"
  ];

  const [inscriptions, cours, notes]: [INSCRIPTION[], COURS[], NOTE[]] = await Promise.all([
    fetch(apiUrls[0]).then(res => res.json() as Promise<INSCRIPTION[]>),
    fetch(apiUrls[1]).then(res => res.json() as Promise<COURS[]>),
    fetch(apiUrls[2]).then(res => res.json() as Promise<NOTE[]>),
  ]);

  const results = await reportAnomalies(inscriptions, cours, notes);

  return NextResponse.json(results);
}
