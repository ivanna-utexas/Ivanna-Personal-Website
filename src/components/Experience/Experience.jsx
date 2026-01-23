import React from "react";
import styles from "./Experience.module.css";

import AutoDriving from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/experience/AutoDrivingLogo.svg";
import Calendar from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/experience/Calendar.svg";
import Google from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/experience/GoogleLogo.svg";
import Location from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/experience/Location.svg";
import Research from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/experience/ResearchLogo.svg";

import experience from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/data/experience.json";

export const Experience = () => {
  const logos = {
    google: {
      src: Google,
      alt: "Google",
    },
    research: {
      src: Research,
      alt: "UT Dallas Research",
    },
    autodriving: {
      src: AutoDriving,
      alt: "Autonomous Driving Lab",
    },
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>EXPERIENCE</h2>

      <svg
        className={styles.arrow}
        xmlns="http://www.w3.org/2000/svg"
        width="263"
        height="12"
        viewBox="0 0 263 12"
        fill="none"
      >
        <path
          d="M263.004 5.81152L253.026 3.96722e-05L252.982 11.547L263.004 5.81152ZM0.00379944 4.81152L-2.81539e-06 5.81152L254 6.7773L254.004 5.7773L254.008 4.77731L0.00760169 3.81153L0.00379944 4.81152Z"
          fill="#A49CA7"
        />
      </svg>

      <svg
        className={styles.timeLine}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 1313"
        fill="none"
      >
        <g filter="url(#filter0_d_23_140)">
          <path
            d="M12 0C7.58172 0 4 3.58172 4 8C4 12.4183 7.58172 16 12 16C16.4183 16 20 12.4183 20 8C20 3.58172 16.4183 0 12 0ZM12 1289C7.58172 1289 4 1292.58 4 1297C4 1301.42 7.58172 1305 12 1305C16.4183 1305 20 1301.42 20 1297C20 1292.58 16.4183 1289 12 1289ZM12 8H10.5L10.5 1297H12H13.5L13.5 8H12Z"
            fill="#9784B6"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_23_140"
            x="0"
            y="0"
            width="24"
            height="1313"
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
              result="effect1_dropShadow_23_140"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_23_140"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <ul className={styles.experienceList}>
        {experience.map((item, id) => {
          const logo = logos[item.logo];

          return (
            <li key={id} className={styles.experienceItem}>
              <div className={styles.experienceCard}>
                <div className={styles.title}>
                  {logo && (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={styles.companyLogo}
                    />
                  )}
                  <h3 className={styles.role}>{item.role}</h3>
                </div>
                <div className={styles.content}>
                  <ul className={styles.bullets}>
                    {item.information.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>

                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <img src={Calendar} alt="Date" />
                      <span>{item.date}</span>
                    </div>

                    <div className={styles.metaItem}>
                      <img src={Location} alt="Location" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.paragraphSkills}>
                <p>{item.paragraph}</p>
                <ul className={styles.skills}>
                  {item.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
