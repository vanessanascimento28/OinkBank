import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../blocks/HmrScreen.css";
import screamPig from "../images/screamPig.svg";  
import backHome from "../images/backHome.svg";    
import coin from "../images/coin.svg"; 

function HmrScreen() {
  const navigate = useNavigate();
  const [smash, setSmash] = useState(false);

  const handleSmash = () => {
    if (smash) return; 
    setSmash(true);
    setTimeout(() => navigate("/dead"), 2000);
  };

  return (
    <div className="hmr-screen">
      <main className="hmr__content">
        <div className="hmr__pig-area">
          <img
            src={screamPig}
            alt="Porquinho"
            className={`hmr__pig ${smash ? "hmr__pig--shake" : ""}`}
            onClick={handleSmash}
            role="button"
            aria-label="Bater no porquinho"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSmash()}
          />

          {/* moedas “explodindo” do porco por 2s */}
          {smash && (
            <>
              <img src={coin} alt="" className="hmr__coin hmr__coin--1" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--2" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--3" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--4" aria-hidden="true" />
              <img src={coin} alt="" className="hmr__coin hmr__coin--5" aria-hidden="true" />
            </>
          )}
        </div>

        <h1 className="hmr__title">Bata no porquinho!</h1>

        <button
          className="hmr__back-btn"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Voltar para a Home"
        >
          <img src={backHome} alt="Voltar para a Home" className="hmr__back-icon" />
        </button>
      </main>
    </div>
  );
}

export default HmrScreen;
