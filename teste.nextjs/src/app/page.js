import Image from "next/image";
import styles from "./page.module.css";
import OlaMundo from "./components/OlaMundo";
import Saudacao from "./components/Saudacao";
import Contador from "./components/Contador";

export default function Home() {
  return (
    <section>
      <OlaMundo />
      <Saudacao nome="Caio" />
      <Contador />
    </section>
  );
}
