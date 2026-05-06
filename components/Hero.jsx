import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <h1 className={styles.headline}>
        Foi descoberto o <span className={styles.hlVerde}>padrão oculto</span> do app que{" "}
        <span className={styles.hlSublinhada}>você já tem no celular</span>{" "}
        <span className={styles.hlVerde}>está pagando comissões</span> para aquelas que{" "}
        <span className={styles.hlVerde}>conseguem ativar</span>.
      </h1>

      <p className={styles.subheadline}>
        Você não precisa aparecer se não quiser, não precisa de seguidores e faz tudo pelo celular.
      </p>
    </>
  );
}
