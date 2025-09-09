import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./blocks/App.css";
import Home from "./components/Home.jsx";
import DptScreen from "./components/DptScreen.jsx";
import BrkScreen from "./components/BrkScreen.jsx";

function App() {
  const [balance] = useState(90.00);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home balance={balance} />} />
        <Route path="/deposit" element={<DptScreen />} />
        <Route path="/break" element={<BrkScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

