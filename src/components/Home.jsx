import React from "react";
import "../blocks/Home.css";
import blueWallet from "../images/blueWallet.svg";
import addmoneyButton from "../images/addmoneyButton.svg";
import clothesButton from "../images/clothesButton.svg";

function Home({ balance = 0 }) {
  const balanceBRL = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="home">
      <header className="home__header">
        <img
          className="icon-wallet"
          src={blueWallet}
          alt="Carteira"
        />

        <span className="home__balance" aria-label="Saldo">
          R$ {balanceBRL}
        </span>

        <button
          className="icon-btn home__plus"
          type="button"
          aria-label="Adicionar"
          onClick={(e) => e.preventDefault()} 
        >
         <img 
         src={addmoneyButton}
         alt="Adicionar" 
         className="icon-addmoney"/>
        </button>

        <img
          className="icon-clothes"
          src={clothesButton}
          alt="Blusa t-shirt"
        />

      </header>

      <main className="home__content">
        {/* seu conteúdo da Home aqui */}
      </main>
    </div>
  );
}

export default Home;
