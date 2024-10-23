import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Trainers from "./components/Trainers";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import Registration from "./components/Register";
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Trainers />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
