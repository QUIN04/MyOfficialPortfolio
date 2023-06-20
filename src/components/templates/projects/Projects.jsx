import React from "react";

import styles from "./projects.module.css";

import Project from "../../../assets/project.png";
import UI from "../../../assets/UI.png";
import Profile from "../../../assets/profile.png";
import Web from "../../../assets/web.png";
import Game from "../../../assets/game.jpg";
import Sound from "../../../assets/muz.jpg";
import Advert from "../../../assets/ad.jpg";

const Projects = () => {
  return (
    <section id="projects" className={styles.services}>
      <div className={styles.title}>
        <h2>My Projects</h2>
      </div>

      <div className={styles.service__cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Web} alt="Project1" />
          </div>
          <h2>Web Development</h2>
          <p>Blog, E-Commerce</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={UI} alt="Project1" />
          </div>
          <h2>UI/UX Design</h2>
          <p>Mobile App, Website Design</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Sound} alt="Project1" />
          </div>
          <h2>Sound Design</h2>
          <p>Voice Overs, Beat Making</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ Game } alt="Project1" />
          </div>
          <h2>Game Design</h2>
          <p>Voice Overs, Beat Making</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Profile} alt="Project1" />
          </div>
          <h2>Photography</h2>
          <p>Character Design, Props & Objects</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Advert} alt="Project1" />
          </div>
          <h2>Advertising</h2>
          <p>Promotions, E-Commerce</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
