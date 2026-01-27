import React from "react";

import styles from "./About.module.css";
import effects from "../../styles/effects.module.css";
import aboutPicture from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/aboutPicture.JPG";
import backendIcon from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/Backend.png";
import bakingIcon from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/baking.png";
import frontendIcon from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/FrontEnd.png";
import musicIcon from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/Music.png";
import robotIcon from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/Robot _D.png";
import runIcon from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/running.png";
import UTLogo from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/UTLogo.png";
import countries from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/about/countries.svg";
import { useState, useEffect } from "react";

export const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(`.${styles.slideIn}`)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(effects.visible); // Use effects module
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(`.${effects.popup}`)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={`${styles.title} ${styles.slideIn}`}>ABOUT ME</h2>
      <div className={styles.colContent}>
        <div className={styles.rowContent}>
          <img
            className={`${styles.aboutPicture} ${effects.floating}`}
            src={aboutPicture}
            alt="A Picture of Me!"
          />
          <div className={styles.colContent}>
            <div className={styles.rowContent}>
              <img
                className={`${styles.utlogo} ${effects.wiggle}`}
                src={UTLogo}
                alt="UT Austin Logo"
              />
              <h1>“What starts here changes the world!”</h1>
            </div>
            <p>
              I'm a computer science student at the University of Texas at
              Austin pursuing a B.S. in Computer Science with a minor in
              Robotics through the Robotics Honors Program. I'm passionate about
              machine learning, autonomous systems, and building impactful
              software solutions. My experience includes developing
              anomaly-based machine learning models for cybersecurity at UT
              Dallas' StaRLiNG Lab and creating educational software tools.
              Currently, I'm conducting research at UT Austin's Freshman
              Research Initiative, working on autonomous vehicle systems with a
              focus on multi-sensor fusion using camera, LiDAR, and IMU data, as
              well as perception, planning, and control algorithms. I'm actively
              seeking internship opportunities where I can apply my technical
              skills to solve real-world problems and contribute to innovative
              projects.
            </p>
          </div>
        </div>
        <div className={styles.rowContentBottom}>
          <div className={styles.otherItemsRow}>
            <div className={styles.colContent}>
              <img
                className={`${styles.countriesOutline} ${effects.popup}`}
                src={countries}
                alt="Countries im from!"
              />
              <p className={effects.wiggle}>
                Outside of computer science I play flute in the UT Symphony
                Band, I am a member of the Latina Run Club, and I love baking!
              </p>
            </div>
          </div>

          <ul className={styles.aboutItems}>
            <li className={`${styles.aboutItem} ${styles.slideIn}`}>
              <svg
                className={styles.robot}
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="76"
                viewBox="0 0 88 76"
                fill="none"
              >
                <g filter="url(#filter0_d_222_139)">
                  <path
                    d="M49 4.97561C49 6.44922 48.3563 7.7732 47.3333 8.68426V14.9268H64C69.523 14.9268 74 19.3822 74 24.878V58.0488C74 63.5448 69.523 68 64 68H24C18.4772 68 14 63.5448 14 58.0488V24.878C14 19.3822 18.4772 14.9268 24 14.9268H40.6667V8.68426C39.6437 7.7732 39 6.44922 39 4.97561C39 2.22765 41.2387 0 44 0C46.7613 0 49 2.22765 49 4.97561ZM4 31.5122H10.6667V51.4146H4V31.5122ZM84 31.5122H77.3333V51.4146H84V31.5122ZM34 46.439C36.7614 46.439 39 44.2113 39 41.4634C39 38.7156 36.7614 36.4878 34 36.4878C31.2386 36.4878 29 38.7156 29 41.4634C29 44.2113 31.2386 46.439 34 46.439ZM59 41.4634C59 38.7156 56.7613 36.4878 54 36.4878C51.2387 36.4878 49 38.7156 49 41.4634C49 44.2113 51.2387 46.439 54 46.439C56.7613 46.439 59 44.2113 59 41.4634Z"
                    fill="#9784B6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_222_139"
                    x="0"
                    y="0"
                    width="88"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_222_139"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_222_139"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className={styles.aboutItemText}>
                <h1>Research</h1>
                <p>
                  I have experience in machine learning and autonomous systems
                  research, from developing ML-based detection systems for
                  cybersecurity and building perception and control algorithms
                  for autonomous vehicles.
                </p>
              </div>
            </li>
            <li className={`${styles.aboutItem} ${styles.slideIn}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="65"
                viewBox="0 0 72 65"
                fill="none"
              >
                <g filter="url(#filter0_d_222_123)">
                  <path
                    d="M61.6 22.1667H10.4V50.6667H61.6V22.1667ZM7.2 0H64.8C66.5674 0 68 1.41778 68 3.16667V53.8333C68 55.5823 66.5674 57 64.8 57H7.2C5.4327 57 4 55.5823 4 53.8333V3.16667C4 1.41778 5.4327 0 7.2 0ZM13.6 9.5V15.8333H20V9.5H13.6ZM26.4 9.5V15.8333H32.8V9.5H26.4ZM13.6 25.3333H23.2V41.1667H13.6V25.3333Z"
                    fill="#9784B6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_222_123"
                    x="0"
                    y="0"
                    width="72"
                    height="65"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_222_123"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_222_123"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className={styles.aboutItemText}>
                <h1>Frontend Developer</h1>
                <p>
                  I can build responsive, interfaces for both web and desktop
                  platforms. My web development experience includes JavaScript,
                  HTML, and CSS for creating dynamic interface. On the desktop
                  side, I've developed complex Java Swing applications.
                </p>
              </div>
            </li>
            <li className={`${styles.aboutItem} ${styles.slideIn}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="57"
                viewBox="0 0 60 57"
                fill="none"
              >
                <g filter="url(#filter0_d_222_7)">
                  <path
                    d="M6.6 0H53.4C54.836 0 56 1.21879 56 2.72222V46.2778C56 47.7813 54.836 49 53.4 49H6.6C5.16407 49 4 47.7813 4 46.2778V2.72222C4 1.21879 5.16407 0 6.6 0ZM41.6077 34.1244L50.8 24.5L41.6077 14.8755L37.9308 18.7253L43.4462 24.5L37.9308 30.2747L41.6077 34.1244ZM16.5539 24.5L22.0693 18.7253L18.3924 14.8755L9.2 24.5L18.3924 34.1244L22.0693 30.2747L16.5539 24.5ZM28.0352 38.1111L37.4984 10.8889H31.9648L22.5015 38.1111H28.0352Z"
                    fill="#9784B6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_222_7"
                    x="0"
                    y="0"
                    width="60"
                    height="57"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_222_7"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_222_7"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className={styles.aboutItemText}>
                <h1>Backend Developer</h1>
                <p>
                  I build efficient backend systems through Java, Python, and C.
                  My experience includes developing machine learning pipelines
                  for cybersecurity applications, implementing custom program
                  interpreters with runtime execution, and designing modular
                  command systems.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
