import React from "react";
import App from "../../App";

import HeroPFP from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/ProfilePic.png";
import folderIcon from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/FolderIcon.svg";
import GitHubApp from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/GitHubApp.svg";
import LinkedInApp from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/LinkedLnApp.svg";
import EmailApp from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/GmailApp.svg";
import Back from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/Terminal.svg";
import Main from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/WelcomeTerminal.svg";
import styles from "./Hero.module.css";
import effects from "../../styles/effects.module.css";

export const Hero = () => {
  const copyToClipboard = () => {
    const email = "ivannaalemancoronado3@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.desktop}>
          <div className={styles.leftApps}>
            <img
              src={folderIcon}
              alt="Folder Icon"
              className={styles.folderIcon}
            />
            <a href="https://github.com/ivanna-aleman">
              <img src={GitHubApp} alt="GitHub App" className={styles.app} />
            </a>

            <img
              src={folderIcon}
              alt="Folder Icon"
              className={styles.folderIcon}
            />
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                copyToClipboard();
              }}
            >
              <img src={EmailApp} alt="Email App" className={styles.app} />
            </a>
          </div>
          <div className={styles.rightApps}>
            <img
              src={folderIcon}
              alt="Folder Icon"
              className={styles.folderIcon}
            />
            <a href="https://www.linkedin.com/in/ivanna-aleman-coronado-50b805384/">
              <img
                src={LinkedInApp}
                alt="LinkedIn App"
                className={styles.app}
              />
            </a>

            <img
              src={folderIcon}
              alt="Folder Icon"
              className={styles.folderIcon}
            />
          </div>
        </div>
        <div className={styles.Terminals}>
          <div className={styles.terminalsInner}>
            <div className={styles.MainTerminal}>
              <img
                src={Main}
                alt="Welcome Terminal"
                className={styles.mainStyle}
              />
              <div className={styles.insideTermial}>
                <img
                  src={HeroPFP}
                  alt="Hero Profile"
                  className={styles.heroPFP}
                />
                <div className={styles.textStack}>
                  <p>Hi! i’m</p>
                  <h1>Ivanna Aleman Coronado</h1>
                  <p>i’m a CS Student at the University of Texas at Austin!</p>
                </div>
              </div>
            </div>
            <div className={styles.backTerminal}>
              <img src={Back} alt="Welcome Terminal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
