import React from "react";
import styles from "./Contact.module.css";

import github from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/contact/GitHub.svg";
import linkedln from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/contact/Linkedln.svg";
import mail from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/contact/Mail.svg";

export const Contact = () => {
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
    <section id="contact" className={styles.container}>
      <h3>Designed by Ivanna Aleman Coronado 2025</h3>
      <div className={styles.logos}>
        <a href="https://github.com/ivanna-aleman">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/ivanna-aleman-coronado-50b805384/">
          <img src={linkedln} />
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            copyToClipboard();
          }}
        >
          <img src={mail} />
        </a>
      </div>
    </section>
  );
};
