import React from "react";
import "./App.css";
import { TestQR } from "./components/QR";
import qrBattleship from "./qrBattleship.png";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <h1>***Miguelangel*** </h1>
      <h2>Escanea el QR para Jugar!</h2>
      {window.screen.width < 768 ? (
        <div className="App" style={{ textAlign: "center" }}>
          <header className="App-header">
            <TestQR></TestQR>
          </header>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "black",
          }}
        >
          <img alt="QR" src={qrBattleship} />
        </div>
      )}
    </div>
  );
}

export default App;
