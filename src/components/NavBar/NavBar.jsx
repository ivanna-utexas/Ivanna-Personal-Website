import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

import HanburgerMenu from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/nav/HamburgerMenu.png";
import XMenu from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/assets/nav/XMenu.png";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const hash = window.location.hash;
    const map = {
      "": 0,
      "#about": 1,
      "#experience": 2,
      "#projects": 3,
      "#contact": 4,
    };
    setActiveIndex(map[hash] ?? 0);
  }, []);

  const indicatorPositions = [
    { left: -10, width: 97 },
    { left: 115, width: 100 },
    { left: 245, width: 170 },
    { left: 445, width: 140 },
    { left: 616, width: 130 },
  ];

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        RESUME
      </a>
      <div className={styles.menu}>
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li onClick={() => setActiveIndex(0)}>
            <a href="/" className={activeIndex === 0 ? styles.active : ""}>
              HOME
            </a>
          </li>
          <li onClick={() => setActiveIndex(1)}>
            <a href="#about" className={activeIndex === 1 ? styles.active : ""}>
              ABOUT
            </a>
          </li>
          <li onClick={() => setActiveIndex(2)}>
            <a
              href="#experience"
              className={activeIndex === 2 ? styles.active : ""}
            >
              EXPERIENCE
            </a>
          </li>
          <li onClick={() => setActiveIndex(3)}>
            <a
              href="#projects"
              className={activeIndex === 3 ? styles.active : ""}
            >
              PROJECTS
            </a>
          </li>
          <li onClick={() => setActiveIndex(4)}>
            <a
              href="#contact"
              className={activeIndex === 4 ? styles.active : ""}
            >
              CONTACT
            </a>
          </li>
          <span
            className={styles.indicator}
            style={{
              left: `${indicatorPositions[activeIndex].left}px`,
              width: `${indicatorPositions[activeIndex].width}px`,
            }}
          ></span>
        </ul>
      </div>
      <span></span>
    </nav>
  );
};
