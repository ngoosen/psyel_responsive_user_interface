import Image from "next/image";
import Link from "next/link";

import styles from "../style/components/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.link_container}>
        <Link href={"/"}>
          <Image
            src={"/img/logo_fac_psycho.svg"}
            className={styles.logo_img}
            width={100}
            height={100}
            alt="Logo"
            />
        </Link>
      </div>

      <div className={styles.user_profile_container}>
        <Image
          src={"/img/default_profile_picture.jpg"}
          className={styles.profile_picture}
          width={100}
          height={100}
          alt="User profile picture"
        />
      </div>
    </header>
  );
}
