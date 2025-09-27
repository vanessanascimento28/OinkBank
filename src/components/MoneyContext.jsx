import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const MoneyContext = createContext(null);

const STORAGE_KEY = "oink_money_v1";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.wallet === "number" && typeof parsed?.pig === "number") {
      return parsed;
    }
  } catch {}
  return null;
}

function saveToStorage(wallet, pig) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ wallet, pig }));
}

export function MoneyProvider({ children }) {
  const initial = loadFromStorage() ?? { wallet: 125.5, pig: 180.0 };
  const [wallet, setWallet] = useState(initial.wallet);
  const [pig, setPig] = useState(initial.pig);

  useEffect(() => {
    saveToStorage(wallet, pig);
  }, [wallet, pig]);

  const formatBRL = useCallback(
    (n) =>
      n.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    []
  );

  const deposit = useCallback(
    (amount) => {
      const val = Number(amount);
      if (!isFinite(val) || val <= 0) {
        return { ok: false, error: "Informe um valor válido." };
      }
      if (val > wallet) {
        return { ok: false, error: "Saldo Indisponível" };
      }
      setWallet((w) => w - val);
      setPig((p) => p + val);
      return { ok: true };
    },
    [wallet]
  );

  const breakPig = useCallback(() => {
    setWallet((w) => w + pig);
    setPig(0);
  }, [pig]);

  const value = {
    wallet,
    pig,
    formatBRL,
    deposit,
    breakPig,
  };

  return (
    <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>
  );
}

export function useMoney() {
  const ctx = useContext(MoneyContext);
  if (!ctx) throw new Error("useMoney deve ser usado dentro de MoneyProvider");
  return ctx;
}
