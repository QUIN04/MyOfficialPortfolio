import React from "react";

import styles from "./app.module.css";

import Header from "./components/shared/header/Header";
import Hero from "./components/templates/hero/Hero";
import About from "./components/templates/about/About";
import Services from "./components/templates/services/Services";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default App;
