import React from "react";
import { Link } from "react-router-dom";
import "../blocks/Home.css";
import blueWallet from "../images/blueWallet.svg";
import addmoneyButton from "../images/addmoneyButton.svg";
import clothesButton from "../images/clothesButton.svg";
import editButton from "../images/editButton.svg";
import bankNote from "../images/bankNote.svg";
import chartSpline from "../images/chartSpline.svg";
import petPig from "../images/petPig.svg";
import yellowDeposit from "../images/yellowDeposit.svg";
import yellowHammer from "../images/yellowHammer.svg";

function Home({ balance = 0 }) {
  const balanceBRL = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="home">
      <header className="home__header">
        <img className="icon-wallet" src={blueWallet} alt="Carteira" />

        <span className="home__balance" aria-label="Saldo">
          R$ {balanceBRL}
        </span>

        <button
          className="icon-btn home__plus"
          type="button"
          aria-label="Adicionar"
          onClick={(e) => e.preventDefault()}
        >
          <img src={addmoneyButton} alt="Adicionar" className="icon-addmoney" />
        </button>

        <img className="icon-clothes" src={clothesButton} alt="Blusa t-shirt" />
      </header>

      <main className="home__content">
        <div className="home__title-wrapper">
          <h1 className="home__title">Nome do porco</h1>
          <button
            className="edit-btn"
            type="button"
            aria-label="Editar nome do porco"
            onClick={(e) => e.preventDefault()}
          >
            <img src={editButton} alt="Editar" className="icon-edit" />
          </button>
        </div>

        <div className="home__stats">
          <div className="stat-box">
            <img src={bankNote} alt="Cash" className="stat-icon" />
            <span className="stat-value">R$ 180,00</span>
          </div>

          <div className="stat-box">
            <img src={chartSpline} alt="Rendimento" className="stat-icon" />
            <span className="stat-value">R$ 15,00</span>
          </div>
        </div>
        <div className="home__pet-wrapper">
          <img src={petPig} alt="Porquinho mascote" className="home__pet" />
          <div className="home__pet-shadow" aria-hidden="true"></div>
        </div>
        <div className="home__actions">
         <Link to="/deposit" className="action-btn" aria-label="Depositar">
            <img src={yellowDeposit} alt="Depositar" className="action-icon" />
          </Link>
          <Link to="/break" className="action-btn" aria-label="Quebrar o porquinho">
            <img
              src={yellowHammer}
              alt="Quebrar o porquinho"
              className="action-icon"
            />
          </Link>
        </div>
      </main>
      <footer className="home__footer">
        <p className="home__footer-title">🏦Oink Bank</p>
      </footer>
    </div>
  );
}

export default Home;
