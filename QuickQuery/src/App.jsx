import React from "react";
import Home from "./pages/home";
import QuickQuery from "./pages/quickquery";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Querysnippet from "./pages/querysnippets";
import Features from "./pages/features";



function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="quickquery" element={<QuickQuery />} />
      <Route path="querysnippet" element={<Querysnippet />} />
      <Route path="features" element={<Features />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;