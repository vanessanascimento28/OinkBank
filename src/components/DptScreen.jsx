import React from "react";
import "../blocks/DptScreen.css";
import blueWallet from "../images/blueWallet.svg";
import blueArrow from "../images/blueArrow.svg";
import petPig from "../images/petPig.svg";

function DptScreen() {
  const balance = 180.0;
  const balanceBRL = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="dpt-screen">
      <header className="dpt__header">
        <img className="icon-wallet" src={blueWallet} alt="Carteira" />

        <span className="dpt__balance" aria-label="Saldo">
          R$ {balanceBRL}
        </span>

        <img src={blueArrow} alt="seta azul" className="icon-arrow" />
        <p className="dpt__avbalance">
          Seu saldo <br /> disponível
        </p>
      </header>
      <main className="dpt__content">
        <div className="dpt__pet-wrapper">
          <img src={petPig} alt="Porquinho mascote" className="dpt__pet" />
          <div className="dpt__pet-shadow" aria-hidden="true"></div>
        </div>
        <h1 className="dpt__title">
          Quanto você quer <br /> guardar no porquinho?
        </h1>
        <input type="text" className="dpt__input" placeholder="R$ 000,00" />
      </main>
      <footer className="dpt__footer">
        <p className="dpt__footer-title">🏦Oink Bank</p>
      </footer>
    </div>
  );
}

export default DptScreen;
