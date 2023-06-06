import React from "react";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.left}>
        <h2>
          I&apos;m Quinuel Ndip-Agbor, <br /> a <span>Front-end</span> Developer.
        </h2>
        <h3>
          Hello! I am a tech enthusiast and developer. Being a student in the
          Faculty of Engineering and Technology in the University of Buea and
          having learnt so much till date, I am always ready to accept
          challenges and solve like the Engineer I truly am.
        </h3>
        <button>Know More</button>
      </div>
      <div className={styles.right}></div>
    </section>
  );
};

export default Hero;
