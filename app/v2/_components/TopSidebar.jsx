import { TEXTO_TOPSIDEBAR } from "../_config/site";
import styles from "./TopSidebar.module.css";

export default function TopSidebar() {
  return <div className={styles.topsidebar}>{TEXTO_TOPSIDEBAR}</div>;
}
