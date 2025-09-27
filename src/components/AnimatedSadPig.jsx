// src/components/AnimatedSadPig.jsx
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import sadPigSVG from "../images/sadPig.svg?raw";

export default function AnimatedSadPig({ width = 200, height = 215 }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    const has = (sel) => !!scope.current.querySelector(sel);
    const animIf = (sel, keyframes, opts) =>
      has(sel) && animate(sel, keyframes, opts);

    animIf(
      "svg",
      { x: [0, -2, 2, -1, 1, 0], rotate: [0, -1, 1, -0.5, 0.5, 0] },
      { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
    );

    animIf(
      "#orelha-direita, #orelha_direita",
      {
        rotate: [0, -6, 4, -4, 2, 0],
        transformBox: "fill-box",
        transformOrigin: "50% 100%",
      },
      { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
    );
    animIf(
      "#orelha-esquerda, #orelha_esquerda",
      {
        rotate: [0, 5, -4, 3, -2, 0],
        transformBox: "fill-box",
        transformOrigin: "50% 100%",
      },
      { duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }
    );

    const patasFrente =
      "#pata-direita-frente, #pata_esquerda_frente, #pata-esquerda-frente, #pata_direita_frente";
    const patasFundo =
      "#pata-direita-fundo, #pata_esquerda_fundo, #pata-esquerda-fundo, #pata_direita_fundo";

    const patasSel = has(patasFrente) ? patasFrente : patasFundo;

    animIf(
      patasSel,
      {
        y: [0, 1.5, -1, 0],
        transformBox: "fill-box",
        transformOrigin: "50% 100%",
      },
      { duration: 0.7, repeat: Infinity, ease: "easeInOut" }
    );

    const L =
      '#choro-esquerda, use[href="#choro-esquerda"], use[xlink\\:href="#choro-esquerda"]';
    const R =
      '#choro-direita,  use[href="#choro-direita"],  use[xlink\\:href="#choro-direita"]';

    const drop = (sel, delay = 0) =>
      animIf(
        sel,
        [
          {
            opacity: 0,
            x: 0,
            y: 0,
            scale: 0.92,
            transformBox: "fill-box",
            transformOrigin: "50% 0%",
          },
          { opacity: 1, x: 1, y: 12, scale: 1.0 },
          { opacity: 0, x: 2, y: 34, scale: 1.08 },
        ],
        { duration: 1.5, delay, repeat: Infinity, ease: "easeIn" }
      );

    drop(L, 0.0);
    drop(R, 0.35);
  }, [animate]);

  const markup = (sadPigSVG || "").replace(
    /<svg\b/i,
    '<svg style="overflow:visible"'
  );

  return (
    <div
      ref={scope}
      style={{ width, height, display: "block" }}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
