import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import HeaderMain from "../Header/HeaderMain";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="page">
        <HeaderMain />
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
