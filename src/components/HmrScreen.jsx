import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../blocks/HmrScreen.css";
import screamPig from "../images/screamPig.svg";  
import backHome from "../images/backHome.svg";    
import coin from "../images/coin.svg"; 

function HmrScreen() {
  const navigate = useNavigate();
  const [smash, setSmash] = useState(false);
  const [fall, setFall] = useState(false);

  const handleSmash = () => {
    if (smash) return;
    setSmash(true);              // começa tremor + moedas

    // dispara a queda um pouco depois do início do tremor
    setTimeout(() => setFall(true), 900); // ~0.9s (após duas “chacoalhadas”)

    // navega após toda a sequência (~2s)
    setTimeout(() => navigate("/dead"), 2000);
  };

  return (
    <div className="hmr-screen">
      <main className="hmr__content">
        <div className="hmr__pig-area">
          <img
            src={screamPig}
            alt="Porquinho"
            className={`hmr__pig ${smash ? "hmr__pig--shake" : ""} ${fall ? "hmr__pig--fall" : ""}`}
            onClick={handleSmash}
            role="button"
            aria-label="Bater no porquinho"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSmash()}
            style={{ pointerEvents: smash ? "none" : "auto" }} // evita cliques repetidos
          />

          {smash && (
            <>
              <img src={coin} alt="" className="hmr__coin hmr__coin--1" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--2" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--3" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--4" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--5" aria-hidden="true" />
            </>
          )}

          <div className="hmr__pig-shadow" aria-hidden="true"></div>
        </div>

        <h1 className="hmr__title">Bata no porquinho!</h1>

        <button className="hmr__back-btn" type="button" onClick={() => navigate("/")} aria-label="Voltar para a Home">
          <img src={backHome} alt="Voltar para a Home" className="hmr__back-icon" />
        </button>
      </main>
    </div>
  );
}

export default HmrScreen;
