import React from 'react';
import './App.css';
import { getAvailablePrinter } from './printeLabels';

function App() {

  const getPrinters = () => {
    const printer = getAvailablePrinter()
    console.log(printer)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          style={{ width: '200px', height: '48px', cursor: 'pointer', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: 4 }}
          onClick={getPrinters}
        >Generate Label</button>
      </header>
    </div>
  );
}

export default App;
