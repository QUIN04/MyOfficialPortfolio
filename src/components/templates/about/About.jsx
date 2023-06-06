import React from "react";

import styles from "./about.module.css";

import Profile from "../../../assets/profile.png";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.title}>
        <h2>About Me</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src={Profile} alt="Profile" />
        </div>
        <div className={styles.details}>
          <div className={styles.data}>
            <h2>Primary Education</h2>
            <p>PARENTS MOUNTAIN SCHOOL, BUEA.</p>
            <p> 2012 - 2014</p>
          </div>

          <div className={styles.data}>
            <h2>Secondary Education</h2>
            <p>BILINGUAL GRAMMAR SCHOOL, BUEA.</p>
            <p> 2014 - 2019</p>
          </div>

          <div className={styles.data}>
            <h2>High School</h2>
            <p>BILINGUAL GRAMMAR SCHOOL,BUEA</p>
            <p>2019 - 2021</p>
          </div>

          <div className={styles.data}>
            <h2>University Education</h2>
            <p>UNIVERSITY OF BUEA</p>
            <p>2021 - 2025</p>
          </div>

          <div className={styles.data}>
            <h2>Work Experience</h2>
            <p>
              FET SCHOOL PROJECTS
            </p>
            <p>
             WTM BUEA TECHNICAL PROJECTS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
