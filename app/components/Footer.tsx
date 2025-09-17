import Link from "next/link";

import styles from "../style/components/Footer.module.scss";

import localFont from "next/font/local";
import Image from "next/image";
import FooterEdging from "./ui/FooterEdging";

const openSans400 = localFont({ src: "../assets/fonts/OpenSans400.woff", });
const firaSansRegular = localFont({ src: "../assets/fonts/FiraSans-Regular.ttf", });
const firaSansSemiBold = localFont({ src: "../assets/fonts/FiraSans-SemiBold.ttf", });

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${openSans400.className}`}>
      <FooterEdging />

      <section className={styles.links}>
        <article className={styles.your_are}>
          <h3 className={firaSansRegular.className}>Vous êtes</h3>

          <ul>
            <li>
              <Link href={"https://psycho.ulb.be/futur-etudiant"} className={styles.link}>
                <p>Futur étudiant</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/etudiant"} className={styles.link}>
                <p>Étudiant</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/doctorant"} className={styles.link}>
                <p>Doctorant</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/chercheur"} className={styles.link}>
                <p>Chercheur</p>
              </Link>
            </li>
          </ul>
        </article>

        <article className={styles.about}>
          <h3 className={firaSansRegular.className}>À propos</h3>

          <ul>
            <li>
              <Link href={"https://psycho.ulb.be/les-etudes-1"} className={styles.link}>
                <p>Les études</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/catalogue-des-formations"} className={styles.link}>
                <p>Catalogue des formations</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/mobilite"} className={styles.link}>
                <p>Mobilité</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/vie-sur-les-campus"} className={styles.link}>
                <p>Vie sur le campus</p>
              </Link>
            </li>
          </ul>
        </article>

        <article className={styles.faculties}>
          <h3 className={firaSansRegular.className}>Facultés, instituts et écoles</h3>

          <ul>
            <li id={styles.phisoc}>
              <Link href={"https://phisoc.ulb.be/"} className={styles.link}>
                <p>Faculté de Philosophie et Sciences sociales</p>
              </Link>
            </li>
            <li id={styles.ltc}>
              <Link href={"https://ltc.ulb.be/"} className={styles.link}>
                <p>Faculté de Lettres, Traduction et Communication</p>
              </Link>
            </li>
            <li id={styles.droit}>
              <Link href={"https://droit.ulb.be/"} className={styles.link}>
                <p>Faculté de Droit et de Criminologie</p>
              </Link>
            </li>
            <li id={styles.sbsem}>
              <Link href={"https://sbsem.ulb.be/"} className={styles.link}>
                <p>Solvay Brussels School of Economics and Management</p>
              </Link>
            </li>
            <li id={styles.psycho}>
              <Link href={"https://psycho.ulb.be/"} className={styles.link}>
                <p>Faculté de Psychologie, des Sciences de l&apos;Éducation et de Logopédie</p>
              </Link>
            </li>
            <li id={styles.psycho_cambre}>
              <Link href={"psycho.ulb.be/faculte-d-architecture-la-cambre-horta"} className={styles.link}>
                <p>Faculté d&apos;Architecture La Cambre Horta</p>
              </Link>
            </li>
            <li id={styles.psycho_sciences}>
              <Link href={"psycho.ulb.be/faculte-des-sciences"} className={styles.link}>
                <p>Faculté des Sciences</p>
              </Link>
            </li>
            <li id={styles.polytech}>
              <Link href={"https://polytech.ulb.be/"} className={styles.link}>
                <p>École polytechnique de Bruxelles</p>
              </Link>
            </li>
            <li id={styles.medecine}>
              <Link href={"https://medecine.ulb.be/"} className={styles.link}>
                <p>Faculté de Médecine</p>
              </Link>
            </li>
            <li id={styles.pharmacie}>
              <Link href={"https://pharmacie.ulb.be/"} className={styles.link}>
                <p>Faculté de Pharmacie</p>
              </Link>
            </li>
            <li id={styles.psycho_sante_publique}>
              <Link href={"psycho.ulb.be/ecole-de-sante-publique"} className={styles.link}>
                <p>École de Santé publique</p>
              </Link>
            </li>
            <li id={styles.fsm}>
              <Link href={"https://fsm.ulb.be/"} className={styles.link}>
                <p>Faculté des Sciences de la Motricité</p>
              </Link>
            </li>
            <hr />
            <li id={styles.ltc_cooremans}>
              <Link href={"https://ltc.ulb.be/nos-departements-d-enseignement/ecole-de-traduction-et-interpretation-isti-cooremans-1"} className={styles.link}>
                <p>École de Traduction et Interprétation ISTI - Cooremans</p>
              </Link>
            </li>
            <li id={styles.bioing}>
              <Link href={"https://bioing.ulb.be/"} className={styles.link}>
                <p>École de Bioingénierie de Bruxelles</p>
              </Link>
            </li>
            <li id={styles.psycho_pole_sante}>
              <Link href={"psycho.ulb.be/pole-sante"} className={styles.link}>
                <p>Pôle Santé</p>
              </Link>
            </li>
            <li id={styles.iee}>
              <Link href={"https://iee.ulb.be/"} className={styles.link}>
                <p>Institut d&apos;études européennes</p>
              </Link>
            </li>
            <li id={styles.education}>
              <Link href={"https://education.ulb.be/"} className={styles.link}>
                <p>Pôle éducation</p>
              </Link>
            </li>
          </ul>
        </article>

        <article className={styles.socials}>
          <h3 className={firaSansRegular.className}>Réseaux sociaux</h3>

          <ul>
            <li>
              <Link href={"https://psycho.ulb.be/facebook"} className={styles.link}>
                <Image
                  src={"/img/footer/fa-facebook.png"}
                  width={100}
                  height={100}
                  alt="Facebook logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/instagram"} className={styles.link}>
                <Image
                  src={"/img/footer/fa-instagram.png"}
                  width={100}
                  height={100}
                  alt="Instagram logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/linkedin"} className={styles.link}>
                <Image
                  src={"/img/footer/fa-linkedin.png"}
                  width={100}
                  height={100}
                  alt="LinkedIn logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/ulb-tv"} className={styles.link}>
                <Image
                  src={"/img/footer/fa-Youtube.png"}
                  width={100}
                  height={100}
                  alt="YouTube logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/scoop-it"} className={styles.link}>
                <Image
                  src={"/img/footer/ksup-scoopit.png"}
                  width={100}
                  height={100}
                  alt="Scoop it logo"
                />
              </Link>
            </li>
          </ul>

          <div className={styles.contacts}>
            <Link href={"https://psycho.ulb.be/contacts"} className={styles.link}>
              <Image
                src={"/img/footer/illustration-footer-contacts.png"}
                width={100}
                height={100}
                alt="Conversation bubbles"
              />
              <p className={firaSansSemiBold.className}>Contacts</p>
            </Link>
            <Link href={"https://psycho.ulb.be/emploi"} className={styles.link}>
              <Image
                src={"/img/footer/illustration-footer-emploi.png"}
                width={100}
                height={100}
                alt="CV pile"
              />
              <p className={firaSansSemiBold.className}>Emploi</p>
            </Link>
          </div>
        </article>
      </section>

      <section className={`${styles.legal} ${firaSansSemiBold.className}`}>
        <Link href={"https://www.ulb.be/fr/mentions-legales"} className={styles.link}>
          <p>Mentions légales</p>
        </Link>
        <Link href={"/"} className={styles.link}>
          <p>Gestionnaire de cookies</p>
        </Link>
        <Link href={"/"} className={styles.accesses}>
          <p>Accès restreints ▴</p>
        </Link>
      </section>
    </footer>
  );
}
