"use client";

import { useEffect } from "react";
import { VTURB } from "@/config/site";
import styles from "./VSLPlayer.module.css";

export default function VSLPlayer() {
  useEffect(() => {
    // Evita injetar o script mais de uma vez (StrictMode/dev)
    if (document.querySelector(`script[src="${VTURB.scriptSrc}"]`)) return;

    const s = document.createElement("script");
    s.src = VTURB.scriptSrc;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className={styles.wrapper}>
      <vturb-smartplayer
        id={VTURB.playerId}
        style={{
          display: "block",
          margin: "0 auto",
          width: "100%",
          maxWidth: "400px",
        }}
      ></vturb-smartplayer>
    </div>
  );
}
