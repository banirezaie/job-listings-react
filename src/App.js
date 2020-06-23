import React from "react";
import "./App.css";
import header from "./bg-header-desktop.svg";

function App() {
  return (
    <div className="App">
      <img src={header} className="App-logo" alt="header" />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
