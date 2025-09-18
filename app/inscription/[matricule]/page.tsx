import InscriptionPage from "@/app/components/inscriptions/inscription_page/InscriptionPage";
import DataContextProvider from "@/app/components/ui/DataContextProvider";

export default function Inscription() {
  return (
    <DataContextProvider>
      <InscriptionPage />
    </DataContextProvider>
  )
}
