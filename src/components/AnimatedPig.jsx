import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import pigSVG from "../images/petPig.svg?raw";

export default function AnimatedPig({ active = true, width = 300, height = 312 }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (active) {
      // Loop: aumenta um pouco e volta (sem elasticidade)
      animate(
        "#corpo",
        {
          scaleX: [1, 1.04, 1],
          scaleY: [1, 1.02, 1],
          transformOrigin: "50% 60%",
          transformBox: "fill-box",
        },
        {
          duration: 0.8,            // ritmo de “mastigar”
          ease: "easeInOut",        // sem bounce
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],       // segura brevemente nos extremos
        }
      );

      // Garantia: outras partes ficam estáticas
      animate("#orelha_direita, #orelha_esquerda, #fucinho", 
        { rotate: 0, y: 0, scale: 1 }, 
        { duration: 0.2 }
      );
    } else {
      // Parar/voltar ao estado neutro
      animate("#corpo", { scaleX: 1, scaleY: 1 }, { duration: 0.2 });
    }
  }, [active, animate]);

  return (
    <div
      ref={scope}
      style={{ width, height, display: "block" }}
      dangerouslySetInnerHTML={{ __html: pigSVG }}
    />
  );
}
