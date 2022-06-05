import React from "react";
import Master from './Master';
import AppOne from "./AppOne";
import { Routes, Route, HashRouter } from "react-router-dom";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={ <Master/>}></Route>
        <Route path="/days" element={ <AppOne />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
