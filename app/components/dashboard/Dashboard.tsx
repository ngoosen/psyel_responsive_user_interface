import styles from "../../style/components/dashboard/Dashboard.module.scss";

import Cours from "../cours/Cours";
import Inscriptions from "../inscriptions/Inscriptions";
import DataContextProvider from "../ui/DataContextProvider";

export default function Dashboard() {
  return (
    <DataContextProvider>
      <main className={styles.main}>
        <section className={styles.dashboard_container}>
          <Inscriptions />
          <Cours />
        </section>
      </main>
    </DataContextProvider>
  );
}
