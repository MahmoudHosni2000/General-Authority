import React from "react";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <div
      className="App bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "url('/image.jpg')",
      }}
    >
      <Header />
      <Features />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
