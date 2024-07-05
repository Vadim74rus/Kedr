import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Button/Header/Header";

function App() {
  const { onToggleButton, onClose, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;