import React from "react";
import { useNavigate } from "react-router-dom";
import "../blocks/BrkScreen.css";
import blueArrow from "../images/blueArrow.svg";
import hammerRed from "../images/hammerRed.svg";
import closeGreen from "../images/closeGreen.svg";
import blueMoney from "../images/blueMoney.svg";
import sadPig from "../images/sadPig.svg";

function BrkScreen() {
  const navigate = useNavigate();
  const balance = 180.0;
  const balanceBRL = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="brk-screen">
      <header className="brk__header">
        <img className="icon-money" src={blueMoney} alt="Dinheiro" />
        <span className="brk__balance" aria-label="SaldoPorco">
          R$ {balanceBRL}
        </span>

        <img src={blueArrow} alt="seta azul" className="icon-arrow" />
        <p className="brk__avbalance">
          Dinheiro no <br /> porquinho
        </p>
      </header>
      <main className="brk__content">
        <div className="brk__pet-wrapper">
          <img src={sadPig} alt="Porquinho triste" className="brk__pet" />
          <div className="brk__pet-shadow" aria-hidden="true"></div>
        </div>
        <h1 className="brk__title">
          Tem certeza que quer <br /> quebrar o porquinho?
        </h1>
        <div className="brk__actions">
          <button
            className="brk__btn"
            type="button"
            aria-label="Quebrar"
            onClick={(e) => e.preventDefault()}
          >
            <img src={hammerRed} alt="Quebrar" className="brk__btn-icon" />
          </button>

          <button
            className="brk__btn"
            type="button"
            aria-label="Desistir"
            onClick={() => navigate("/")}
          >
            <img src={closeGreen} alt="Desistir" className="brk__btn-icon" />
          </button>
        </div>
      </main>
       <footer className="brk__footer">
        <p className="brk__footer-title">🏦Oink Bank</p>
      </footer>
    </div>
  );
}

export default BrkScreen;
