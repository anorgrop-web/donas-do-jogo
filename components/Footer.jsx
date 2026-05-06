import { ANO_FOOTER } from "@/config/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      © {ANO_FOOTER} Jornada Donas do Jogo | Todos os direitos reservados.
    </footer>
  );
}
