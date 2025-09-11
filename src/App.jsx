// src/App.jsx
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home.jsx";
import DptScreen from "./components/DptScreen.jsx";
import BrkScreen from "./components/BrkScreen.jsx";
import SavingScreen from "./components/SavingScreen.jsx";
import HmrScreen from "./components/HmrScreen.jsx";
import DeadScreen from "./components/DeadScreen.jsx";

// variantes de página (fade + leve slide)
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -12 },
};

const pageTransition = { duration: 0.28, ease: "easeInOut" };

// Wrapper que aplica a animação a cada rota
function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ height: "100%" }} // ajuda a evitar “saltos”
    >
      {children}
    </motion.div>
  );
}

function RoutesWithAnimation({ balance }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home balance={balance} />
            </AnimatedPage>
          }
        />
        <Route
          path="/deposit"
          element={
            <AnimatedPage>
              <DptScreen />
            </AnimatedPage>
          }
        />
        <Route
          path="/break"
          element={
            <AnimatedPage>
              <BrkScreen />
            </AnimatedPage>
          }
        />
        <Route path="/saving" element={<SavingScreen />} />
        <Route path="/hammer" element={<HmrScreen />} />
        <Route path="/dead" element={<DeadScreen />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [balance] = useState(30.0);

  return (
    <Router>
      <RoutesWithAnimation balance={balance} />
    </Router>
  );
}
