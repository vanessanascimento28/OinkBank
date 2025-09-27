import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import pigSVG from "../images/screamPig.svg?raw";

export default function RunningPig({ width = 300, height = 312, onClick }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    const root = scope.current;
    const has = (sel) => !!root.querySelector(sel);
    const animIf = (sel, keyframes, opts) =>
      has(sel) && animate(sel, keyframes, opts);

    animIf(
      "svg",
      { x: [0, -1, 1, -0.5, 0.5, 0], rotate: [0, -0.4, 0.4, -0.2, 0.2, 0] },
      { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
    );

    animIf(
      "#Boca",
      [
        { scaleY: 1.0, transformBox: "fill-box", transformOrigin: "50% 50%" },
        { scaleY: 1.25 },
        { scaleY: 1.0 },
        { scaleY: 1.3 },
        { scaleY: 1.0 },
      ],
      { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
    );

    animIf(
      "#orelha-esquerda",
      {
        rotate: [0, 6, -4, 3, -2, 0],
        transformBox: "fill-box",
        transformOrigin: "50% 100%",
      },
      { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
    );
    animIf(
      "#orelha-direita",
      {
        rotate: [0, -6, 4, -3, 2, 0],
        transformBox: "fill-box",
        transformOrigin: "50% 100%",
      },
      { duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.12 }
    );

    animIf(
      "#corpo",
      { y: [0, -1.5, 0, 1.5, 0] },
      { duration: 0.55, repeat: Infinity, ease: "easeInOut" }
    );

    const pEsqFrente = "#pata-esquerda-frente, #para-esquerda-frente";
    const pDirFrente = "#pata-direita-frente, #para-direita-frente";
    const pEsqFundo = "#pata-esquerda-fundo,  #para-esquerda-fundo";
    const pDirFundo = "#pata-direita-fundo,  #para-direita-fundo";

    const legKF = {
      rotate: [0, 18, -18, 0],
      transformBox: "fill-box",
      transformOrigin: "50% 0%",
    };

    animIf(pEsqFrente, legKF, {
      duration: 0.35,
      repeat: Infinity,
      ease: "easeInOut",
    });
    animIf(pDirFundo, legKF, {
      duration: 0.35,
      repeat: Infinity,
      ease: "easeInOut",
    });

    animIf(pDirFrente, legKF, {
      duration: 0.35,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.175,
    });
    animIf(pEsqFundo, legKF, {
      duration: 0.35,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.175,
    });
  }, [animate]);

  const markup = (pigSVG || "").replace(
    /<svg\b/i,
    '<svg style="overflow:visible"'
  );

  return (
    <div
      ref={scope}
      onClick={onClick}
      style={{
        width,
        height,
        display: "block",
        cursor: onClick ? "pointer" : "default",
      }}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
