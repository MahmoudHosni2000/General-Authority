import React from "react";
import Home from "./Pages/Home";
import Complaints from "./Pages/Complaints";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Contact from "./Pages/Conatct";
import Header from "./Components/Header";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/image.jpg')",
      }}
    >
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
