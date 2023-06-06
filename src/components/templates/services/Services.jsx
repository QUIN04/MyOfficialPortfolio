import React from "react";

import styles from "./services.module.css";

import { SvgRepo } from "../../../assets/SvgRepo";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.title}>
        <h2>My Services</h2>
      </div>

      <div className={styles.service__cards}>
        <div className={styles.card}>
          <SvgRepo.Service1 />
          <h2>Web Development</h2>
          <p>Blog, E-Commerce</p>
        </div>

        <div className={styles.card}>
          <SvgRepo.Service2 />
          <h2>UI/UX Design</h2>
          <p>Mobile App, Website Design</p>
        </div>

        <div className={styles.card}>
          <SvgRepo.Service3 />
          <h2>Sound Design</h2>
          <p>Voice Overs, Beat Making</p>
        </div>

        <div className={styles.card}>
          <SvgRepo.Service4 />
          <h2>Game Design</h2>
          <p>Voice Overs, Beat Making</p>
        </div>

        <div className={styles.card}>
          <SvgRepo.Service5 />
          <h2>Photography</h2>
          <p>Character Design, Props & Objects</p>
        </div>

        <div className={styles.card}>
          <SvgRepo.Service2 />
          <h2>Advertising</h2>
          <p>Promotions, E-Commerce</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
