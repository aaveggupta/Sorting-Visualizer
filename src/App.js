import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";
import Sort from "./Components/Sort/Sort";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sort/:algoName" element={<Sort />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
