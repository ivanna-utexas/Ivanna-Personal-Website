import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";

import github from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/contact/GitHub.svg";
import linkedln from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/contact/Linkedln.svg";
import mail from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/contact/Mail.svg";

export const Contact = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "ivannaalemancoronado3@gmail.com";

    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };
  return (
    <section id="contact" className={styles.container}>
      <h3>Ivanna Aleman Coronado</h3>
      <div className={styles.logos}>
        <a href="https://github.com/ivanna-utexas">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/ivanna-aleman-coronado-50b805384/">
          <img src={linkedln} />
        </a>
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              copyToClipboard();
            }}
          >
            <img src={mail} />
          </a>
          {showCopied && (
            <div className={styles.copiedToast}>✓ Copied to clipboard!</div>
          )}
        </div>
      </div>
    </section>
  );
};
