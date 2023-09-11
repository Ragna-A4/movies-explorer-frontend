import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "../NotFound/NotFound";
import Main from '../Main/Main';

function App() {
  return (
    <div className="app">
      <div className="page">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
