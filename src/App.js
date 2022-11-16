import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Bookings from "./Pages/Bookings";
import Navbar from "../src/component/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
