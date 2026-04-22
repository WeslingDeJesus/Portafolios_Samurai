import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

import Navbar from "./components/site/Navbar";
import Hero from "./components/site/Hero";
import About from "./components/site/About";
import Technologies from "./components/site/Technologies";
import Projects from "./components/site/Projects";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";
import ParallaxClouds from "./components/site/ParallaxClouds";

const HomePage = () => (
  <div className="relative bg-[#111111] text-[#F5EFD6] min-h-screen font-body selection:bg-[#F5B700] selection:text-[#1A1A1A] overflow-x-hidden">
    <ParallaxClouds />
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
    <Footer />
    <Toaster />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
