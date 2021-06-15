import React from "react";

import "./styles/App.css";
import Routes from "./Routes";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes />
      </div>
    </>
  );
};

export default App;
