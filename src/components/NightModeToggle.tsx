"use client";

import { useEffect, useState } from "react";
import styles from "./NightModeToggle.module.css";

const STORAGE_KEY = "dream-house-night-mode";

export default function NightModeToggle() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const isNight = stored === "1";
    setNight(isNight);
    if (isNight) document.documentElement.classList.add("night-mode");
  }, []);

  const toggle = () => {
    const next = !night;
    setNight(next);
    document.documentElement.classList.toggle("night-mode", next);
    localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
  };

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={toggle}
      aria-label={night ? "Switch to day" : "Switch to night"}
      title={night ? "Gündüz modu" : "Gece modu"}
    >
      <span className={styles.icon} aria-hidden>
        {night ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
