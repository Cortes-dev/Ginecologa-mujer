import React from "react";
import Nav from "./layouts/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services/>
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
