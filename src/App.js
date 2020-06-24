import React from "react";
import "./App.css";
import header from "./bg-header-desktop.svg";
import JobFeatures from "./JobFeatures";

function App() {
  return (
    <div className="App">
      <header>
        <img src={header} className="App-logo" alt="header" />
      </header>
      <JobFeatures />
    </div>
  );
}

export default App;
