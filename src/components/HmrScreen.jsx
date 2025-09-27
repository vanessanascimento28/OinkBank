import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../blocks/HmrScreen.css";
import RunningPig from "../components/AnimatedRunPig.jsx";
import screamPig from "../images/screamPig.svg";
import backHome from "../images/backHome.svg";
import coin from "../images/coin.svg";

function HmrScreen() {
  const navigate = useNavigate();
  const [smash, setSmash] = useState(false);
  const [fall, setFall] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  const handleSmash = () => {
    if (smash) return;
    setSmash(true);

    timeouts.current.push(
      setTimeout(() => setFall(true), 900),
      setTimeout(() => navigate("/dead"), 2000)
    );
  };

  const onRunnerKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSmash();
    }
  };

  return (
    <div className="hmr-screen">
      <main className="hmr__content">
        <div className="hmr__pig-area">
          {!smash ? (
            <div
              role="button"
              tabIndex={0}
              aria-label="Bater no porquinho"
              onKeyDown={onRunnerKeyDown}
              style={{ outline: "none" }}
            >
              <RunningPig width={300} height={312} onClick={handleSmash} />
            </div>
          ) : (
            <>
              <img
                src={screamPig}
                alt="Porquinho"
                className={`hmr__pig ${smash ? "hmr__pig--shake" : ""} ${
                  fall ? "hmr__pig--fall" : ""
                }`}
                role="img"
                aria-hidden={false}
              />

              <img
                src={coin}
                alt=""
                className="hmr__coin hmr__coin--1"
                aria-hidden="true"
              />
              <img
                src={coin}
                alt=""
                className="hmr__coin hmr__coin--2"
                aria-hidden="true"
              />
              <img
                src={coin}
                alt=""
                className="hmr__coin hmr__coin--3"
                aria-hidden="true"
              />
              <img
                src={coin}
                alt=""
                className="hmr__coin hmr__coin--4"
                aria-hidden="true"
              />
              <img
                src={coin}
                alt=""
                className="hmr__coin hmr__coin--5"
                aria-hidden="true"
              />
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
          <img
            src={backHome}
            alt="Voltar para a Home"
            className="hmr__back-icon"
          />
        </button>
      </main>
    </div>
  );
}

export default HmrScreen;
