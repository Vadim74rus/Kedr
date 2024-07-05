import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import './App.css';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(parseFloat(localStorage.getItem('count') || '0'));
  const [isCounting, setIsCounting] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    tg.ready();
    getUsername();
  }, []);

  const getUsername = () => {
    if (tg.auth) {
      tg.auth.getUserInfo((user) => {
        setUsername(user.first_name);
      });
    }
  };

  const incrementCount = () => {
    if (!isCounting) {
      setIsCounting(true);
      let increment = 0.001;
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + increment);
        increment += 0.001;
      }, 1000);
      setTimeout(() => {
        clearInterval(intervalId);
        setIsCounting(false);
      }, 10000);
    }
  };

  return (
    <div className="App">
      <div className="app-container"></div>
      <div style={{ textAlign: "center" }}>
        <h1 className="title">KEDR Community!</h1>
        <p className="count-text">K: {count.toFixed(3)}</p>
        <p className="username">Username: {username}</p>
      </div>
      <div className="button-container">
        <button
          className={`start-button ${isCounting ? 'counting' : ''}`}
          disabled={isCounting}
          onClick={incrementCount}
        >
          {isCounting ? "Counting..." : "Start"}
        </button>
      </div>
      <button onClick={() => tg.close()}>Закрыть</button>
    </div>
  );
}

export default App;