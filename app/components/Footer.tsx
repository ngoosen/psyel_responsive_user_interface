import Link from "next/link";

import styles from "../style/components/Footer.module.scss";

import localFont from "next/font/local";
import Image from "next/image";
import FooterEdging from "./ui/FooterEdging";

const openSans400 = localFont({ src: "../assets/fonts/OpenSans400.woff", });
const firaSansRegular = localFont({ src: "../assets/fonts/FiraSans-Regular.ttf", });

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${openSans400.className}`}>
      <FooterEdging />

      <section className={styles.links}>
        <article className={styles.your_are}>
          <h3 className={firaSansRegular.className}>Vous êtes</h3>

          <ul>
            <li>
              <Link href={"https://psycho.ulb.be/futur-etudiant"}>
                <p>Futur étudiant</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/etudiant"}>
                <p>Étudiant</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/doctorant"}>
                <p>Doctorant</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/chercheur"}>
                <p>Chercheur</p>
              </Link>
            </li>
          </ul>
        </article>

        <article className={styles.about}>
          <h3 className={firaSansRegular.className}>À propos</h3>

          <ul>
            <li>
              <Link href={"https://psycho.ulb.be/les-etudes-1"}>
                <p>Les études</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/catalogue-des-formations"}>
                <p>Catalogue des formations</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/mobilite"}>
                <p>Mobilité</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/vie-sur-les-campus"}>
                <p>Vie sur le campus</p>
              </Link>
            </li>
          </ul>
        </article>

        <article className={styles.faculties}>
          <h3 className={firaSansRegular.className}>Facultés, instituts et écoles</h3>

          <ul>
            <li>
              <Link href={"https://phisoc.ulb.be/"}>
                <p>Faculté de Philosophie et Sciences sociales</p>
              </Link>
            </li>
            <li>
              <Link href={"https://ltc.ulb.be/"}>
                <p>Faculté de Lettres, Traduction et Communication</p>
              </Link>
            </li>
            <li>
              <Link href={"https://droit.ulb.be/"}>
                <p>Faculté de Droit et de Criminologie</p>
              </Link>
            </li>
            <li>
              <Link href={"https://sbsem.ulb.be/"}>
                <p>Solvay Brussels School of Economics and Management</p>
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/"}>
                <p>Faculté de Psychologie, des Sciences de l&apos;Éducation et de Logopédie</p>
              </Link>
            </li>
            <li>
              <Link href={"psycho.ulb.be/faculte-d-architecture-la-cambre-horta"}>
                <p>Faculté d&apos;Architecture La Cambre Horta</p>
              </Link>
            </li>
            <li>
              <Link href={"psycho.ulb.be/faculte-des-sciences"}>
                <p>Faculté des Sciences</p>
              </Link>
            </li>
            <li>
              <Link href={"https://polytech.ulb.be/"}>
                <p>École polytechnique de Bruxelles</p>
              </Link>
            </li>
            <li>
              <Link href={"https://medecine.ulb.be/"}>
                <p>Faculté de Médecine</p>
              </Link>
            </li>
            <li>
              <Link href={"https://pharmacie.ulb.be/"}>
                <p>Faculté de Pharmacie</p>
              </Link>
            </li>
            <li>
              <Link href={"psycho.ulb.be/ecole-de-sante-publique"}>
                <p>École de Santé publique</p>
              </Link>
            </li>
            <li>
              <Link href={"https://fsm.ulb.be/"}>
                <p>Faculté des Sciences de la Motricité</p>
              </Link>
            </li>
            <hr />
            <li>
              <Link href={"https://ltc.ulb.be/nos-departements-d-enseignement/ecole-de-traduction-et-interpretation-isti-cooremans-1"}>
                <p>École de Traduction et Interprétation ISTI - Cooremans</p>
              </Link>
            </li>
            <li>
              <Link href={"https://bioing.ulb.be/"}>
                <p>École de Bioingénierie de Bruxelles</p>
              </Link>
            </li>
            <li>
              <Link href={"psycho.ulb.be/pole-sante"}>
                <p>Pôle Santé</p>
              </Link>
            </li>
            <li>
              <Link href={"https://iee.ulb.be/"}>
                <p>Institut d&apos;études européennes</p>
              </Link>
            </li>
            <li>
              <Link href={"https://education.ulb.be/"}>
                <p>Pôle éducation</p>
              </Link>
            </li>
          </ul>
        </article>

        <article className={styles.socials}>
          <h3 className={firaSansRegular.className}>Réseaux sociaux</h3>

          <ul>
            <li>
              <Link href={"https://psycho.ulb.be/facebook"}>
                <Image
                  src={"/img/footer/fa-facebook.png"}
                  width={100}
                  height={100}
                  alt="Facebook logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/instagram"}>
                <Image
                  src={"/img/footer/fa-instagram.png"}
                  width={100}
                  height={100}
                  alt="Instagram logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/linkedin"}>
                <Image
                  src={"/img/footer/fa-linkedin.png"}
                  width={100}
                  height={100}
                  alt="LinkedIn logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/ulb-tv"}>
                <Image
                  src={"/img/footer/fa-Youtube.png"}
                  width={100}
                  height={100}
                  alt="YouTube logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://psycho.ulb.be/scoop-it"}>
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
            <Link href={"https://psycho.ulb.be/contacts"}>
              <Image
                src={"/img/footer/illustration-footer-contacts.png"}
                width={100}
                height={100}
                alt="Conversation bubbles"
              />
              <p>Contacts</p>
            </Link>
            <Link href={"https://psycho.ulb.be/emploi"}>
              <Image
                src={"/img/footer/illustration-footer-emploi.png"}
                width={100}
                height={100}
                alt="CV pile"
              />
              <p>Emploi</p>
            </Link>
          </div>
        </article>
      </section>
    </footer>
  );
}
