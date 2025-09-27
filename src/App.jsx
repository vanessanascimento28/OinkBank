import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./blocks/Global.css";
import Home from "./components/Home.jsx";
import DptScreen from "./components/DptScreen.jsx";
import BrkScreen from "./components/BrkScreen.jsx";
import HmrScreen from "./components/HmrScreen.jsx";
import SavingScreen from "./components/SavingScreen.jsx";
import DeadScreen from "./components/DeadScreen.jsx";
import { MoneyProvider } from "./components/MoneyContext.jsx";

export default function App() {
  const [balance] = useState(125.5);

  return (
    <MoneyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home balance={balance} />} />
          <Route path="/deposit" element={<DptScreen />} />
          <Route path="/saving" element={<SavingScreen />} />
          <Route path="/break" element={<BrkScreen />} />
          <Route path="/hammer" element={<HmrScreen />} />
          <Route path="/dead" element={<DeadScreen />} />
        </Routes>
      </Router>
    </MoneyProvider>
  );
}
