import React, { useState, useRef, useEffect } from "react";
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
  const [pigName, setPigName] = useState("Nome do porco");
  const [isEditing, setIsEditing] = useState(false);
  const [warning, setWarning] = useState("");
  const titleRef = useRef(null);

  const balanceBRL = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Carrega o nome salvo (se houver) ao montar
  useEffect(() => {
    const savedName = localStorage.getItem("pigName");
    if (savedName) setPigName(savedName);
  }, []);

  // Quando entrar em modo edição, focar o H1 e colocar o cursor no fim
  useEffect(() => {
    if (isEditing && titleRef.current) {
      const el = titleRef.current;
      el.focus();
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [isEditing]);

  const startEditing = () => {
    setWarning("");
    setIsEditing(true);
  };

  const finishEditingIfValid = () => {
    const raw = (titleRef.current?.innerText || "").trim();
    if (raw.length === 0) {
      setWarning("Oink, você não pode deixar aqui vazio!");
      return; // permanece em edição
    }
    if (raw.length > 20) {
      setWarning("nome muito longo, diminua oink oink!");
      return; // permanece em edição
    }
    setPigName(raw);
    localStorage.setItem("pigName", raw); // ⇦ persiste o nome
    setIsEditing(false);
    setWarning("");
  };

  const onTitleKeyDown = (e) => {
    // Evita quebra de linha no H1
    if (e.key === "Enter") {
      e.preventDefault();
      finishEditingIfValid();
    } else if (e.key === "Escape") {
      // cancelar: reverte texto e sai do modo edição
      e.preventDefault();
      if (titleRef.current) titleRef.current.innerText = pigName;
      setIsEditing(false);
      setWarning("");
    }
  };

  const onTitleInput = () => {
    // valida em tempo real só o limite (sem salvar)
    const txt = titleRef.current?.innerText || "";
    if (txt.length > 20) {
      setWarning("nome muito longo, diminua oink oink!");
    } else if (txt.trim().length > 0) {
      setWarning("");
    }
  };

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
          <h1
            className="home__title"
            ref={titleRef}
            contentEditable={isEditing}
            suppressContentEditableWarning={true}
            onKeyDown={isEditing ? onTitleKeyDown : undefined}
            onInput={isEditing ? onTitleInput : undefined}
            spellCheck={false}
          >
            {pigName}
          </h1>

          <button
            className="edit-btn"
            type="button"
            aria-label={isEditing ? "Salvar nome" : "Editar nome do porco"}
            onClick={() => (isEditing ? finishEditingIfValid() : startEditing())}
          >
            <img src={editButton} alt="Editar" className="icon-edit" />
          </button>
        </div>

        {warning && <span className="home__warning">{warning}</span>}

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
