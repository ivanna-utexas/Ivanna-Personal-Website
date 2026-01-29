import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

import HanburgerMenu from "../../assets/nav/HamburgerMenu.png";
import XMenu from "../../assets/nav/XMenu.png";

import resume from "/public/Ivanna Aleman-Coronado Resume.pdf";

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "", index: 0 },
        { id: "about", index: 1 },
        { id: "experience", index: 2 },
        { id: "projects", index: 3 },
        { id: "contact", index: 4 },
      ];

      // Check if we're at the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // If we're within 50px of the bottom, activate the last section
      if (scrollHeight - scrollTop - clientHeight < 50) {
        setActiveIndex(4); // Contact section
        return;
      }

      // Find which section is currently in view
      let currentIndex = 0;

      for (const section of sections) {
        if (!section.id) continue;

        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the top portion of viewport
          if (rect.top <= 150) {
            currentIndex = section.index;
          }
        }
      }

      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
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
      <a
        className={styles.title}
        href="/Ivanna Aleman-Coronado Resume.pdf"
        download={resume}
      >
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
