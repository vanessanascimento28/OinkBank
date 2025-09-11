import React from "react";
import { useNavigate } from "react-router-dom";
import "../blocks/DeadScreen.css";

import deadPig from "../images/deadPig.svg";
import okButton from "../images/okButton.svg";

function DeadScreen() {
  const navigate = useNavigate();

  return (
    <div className="dead-screen">
      <main className="dead__content">
        <div className="dead__pig-area">
          <img src={deadPig} alt="Porquinho quebrado" className="dead__pig" />
          <div className="dead__pig-shadow" aria-hidden="true"></div>
        </div>

        <h1 className="dead__title">Porquinho Quebrado!</h1>
        <p className="dead__subtitle">Seu dinheiro está na conta.</p>

        <button
          className="dead__ok-btn"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Voltar para a Home"
        >
          <img src={okButton} alt="OK" className="dead__ok-icon" />
        </button>
      </main>
    </div>
  );
}

export default DeadScreen;

