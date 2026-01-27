import React from "react";
import { useState, useEffect } from "react";
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
import terminalClick from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/hero/terminalClick.svg";

const TypingText = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <h1 className={styles.typingText}>
      {displayText}
      <span className={styles.cursor}> |</span>
    </h1>
  );
};

export const Hero = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "ivannaalemancoronado3@gmail.com";

    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
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
            <a href="https://github.com/ivanna-utexas">
              <img src={GitHubApp} alt="GitHub App" className={styles.app} />
            </a>

            <img
              src={folderIcon}
              alt="Folder Icon"
              className={styles.folderIcon}
            />
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard();
                }}
              >
                <img src={EmailApp} alt="Email App" className={styles.app} />
              </a>

              {showCopied && (
                <div className={styles.copiedToast}>✓ Copied to clipboard!</div>
              )}
            </div>
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
        <div className={`${styles.Terminals} ${effects.floating}`}>
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
                  <p>Hi! I'm</p>
                  <TypingText text="Ivanna Aleman-Coronado"/>
                  <p>i’m a CS Student at the University of Texas at Austin!</p>
                </div>
              </div>
            </div>
            <div className={styles.backTerminal}>
              <img
                className={styles.backTerminal}
                src={Back}
                alt="Welcome Terminal"
              />
              <img
                className={`${styles.terminalClick} ${styles.cursor}`}
                src={terminalClick}
                alt="|"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
