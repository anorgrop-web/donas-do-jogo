import styles from "./page.module.css";

export const metadata = {
  title: "Obrigada! | Jornada Donas do Jogo",
  description: "Compra confirmada. Seu acesso será enviado por e-mail.",
};

export default function Obrigado() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.check}>✓</div>
        <h1 className={styles.titulo}>Compra confirmada!</h1>
        <p className={styles.texto}>
          Em alguns minutos, você vai receber no seu e-mail os dados de acesso à
          <strong> Jornada Donas do Jogo</strong>.
        </p>
        <p className={styles.aviso}>
          Confira também a caixa de <strong>spam</strong> ou <strong>promoções</strong>.
          Se não chegar em até 30 minutos, fale com o nosso suporte.
        </p>
        <a href="mailto:suporte@donasdojogo.com" className={styles.botao}>
          Falar com o suporte
        </a>
      </div>
    </main>
  );
}
