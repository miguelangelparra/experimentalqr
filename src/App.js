import React from 'react';
import './App.css';
import {TestQR} from "./components/QR"
import qrBattleship from "./qrBattleship.png"


function App() {
  return (
    <div>        <h1>Miguelangel ----- Escanea el QR para Jugar!</h1>
   
    <div className="App">
      <header className="App-header">
        <img src={qrBattleship} />

     <TestQR></TestQR>
         
      </header>
    </div>
    </div>
  );
}

export default App;
