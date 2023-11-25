import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Scholarship, Main } from "./views";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scholarship />} />
        <Route path="/register" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
