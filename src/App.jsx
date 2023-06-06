import React from "react";

import styles from "./app.module.css";

import Header from "./components/shared/header/Header";
import Hero from "./components/templates/hero/Hero";
import About from "./components/templates/about/About";
import Services from "./components/templates/services/Services";
import Projects from "./components/templates/projects/Projects";
import Testimonials from "./components/templates/testimonials/Testimonials";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default App;
