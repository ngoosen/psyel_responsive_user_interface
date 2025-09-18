import CoursPage from "@/app/components/cours/cours_page/CoursPage";
import DataContextProvider from "@/app/components/ui/DataContextProvider";

export default function Cours() {
  return (
    <DataContextProvider>
      <CoursPage />
    </DataContextProvider>
  );
}
