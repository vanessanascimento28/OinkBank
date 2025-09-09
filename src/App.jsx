import { useState } from "react";
import "./blocks/App.css";
import Home from "./components/Home.jsx";

function App() {
  
  const [balance] = useState(125.5);

  return (
    <>
      <Home balance={balance} />
    </>
  );
}

export default App;
