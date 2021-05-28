import React from "react";

import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";

import {} from "@material-ui/core";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Home />
    </div>
  );
};

export default App;
