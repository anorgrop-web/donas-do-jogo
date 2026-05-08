"use client";

import { useEffect, useState } from "react";
import { DELAY_BOTAO_SEGUNDOS, LINK_CHECKOUT, TEXTO_BOTAO } from "../_config/site";
import styles from "./CTAButton.module.css";

export default function CTAButton() {
  const [visivel, setVisivel] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(true);
      requestAnimationFrame(() => setFadeIn(true));
    }, DELAY_BOTAO_SEGUNDOS * 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visivel) return <div className={styles.wrapper} />;

  return (
    <div className={styles.wrapper}>
      <a
        id="cta-comprar"
        href={LINK_CHECKOUT}
        className={`${styles.botao} smartplayer-click-event`}
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        {TEXTO_BOTAO}
      </a>
    </div>
  );
}
