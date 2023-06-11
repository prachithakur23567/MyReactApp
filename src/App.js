import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
import Product from './Product';
import Pricing from './Pricing';
import Download from './Download';
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route exact path="/download" element={<Download />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Routes>


    </>
  )
}

export default App
