import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../blocks/SavingScreen.css";
import petPig from "../images/petPig.svg";
import coin from "../images/coin.svg";
import okButton from "../images/okButton.svg";

function SavingScreen() {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 3000); // 3s
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="saving-screen">
      <main className="saving__content">
        <div className="saving__pig-area">
          {/* pig “engordando” */}
          <img src={petPig} alt="Porquinho mascote" className="saving__pig" />

          {/* moedinhas caindo */}
          <img src={coin} alt="" className="coin coin--1" aria-hidden="true" />
          <img src={coin} alt="" className="coin coin--2" aria-hidden="true" />
          <img src={coin} alt="" className="coin coin--3" aria-hidden="true" />

          {/* sombra */}
          <div className="saving__pig-shadow" aria-hidden="true"></div>
        </div>

        {/* mensagem fixa */}
        <p className="saving__message">Seu porquinho está engordando!</p>

        {/* loading ou botão OK */}
        {done ? (
          <>
            <p className="saving__message-success" aria-live="polite">
              Dinheiro guardado com sucesso.
            </p>
            <button
              className="saving__ok-btn"
              type="button"
              onClick={() => navigate("/")}
              aria-label="Voltar para a Home"
            >
              <img src={okButton} alt="OK" className="saving__ok-icon" />
            </button>
          </>
        ) : (
          <div className="saving__loader" role="status" aria-label="Carregando" />
        )}
      </main>
    </div>
  );
}

export default SavingScreen;
