import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>ServiceNow Enthusiast</h3>
              <p>
                Passionate about developing and customizing ServiceNow applications, automating workflows, and building efficient enterprise solutions that streamline business processes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>React Developer</h3>
              <p>
                Building responsive, modern, and user-friendly web applications with React, JavaScript, and contemporary frontend technologies for seamless user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                Developing scalable end-to-end web applications using Java, Spring Boot, React, MySQL, and REST APIs with a focus on performance and clean architecture.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
