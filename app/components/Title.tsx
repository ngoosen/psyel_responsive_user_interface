import localFont from "next/font/local";

import styles from "../style/components/Title.module.scss";

const firaSans = localFont({ src: "../assets/fonts/FiraSans-Light.ttf" });

export default function Title() {
  return (
    <section className={styles.main}>
      <h1 className={firaSans.className}>Portail <br/> étudiants</h1>
    </section>
  );
}
