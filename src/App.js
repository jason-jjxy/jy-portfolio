import React from "react";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="text-gray-400 bg-eerie_black body-font">
      <Navbar />
      <HomePage />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
