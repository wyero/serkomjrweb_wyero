import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Scholarship, Register, Result } from "./views";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scholarship />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
