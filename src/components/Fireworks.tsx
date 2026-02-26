"use client";

import { useEffect, useState } from "react";
import styles from "./Fireworks.module.css";

const THEME_COLORS = [
  "#2d5a3d",
  "#4a7c59",
  "#87ceeb",
  "#ffd93d",
  "#e0f4ff",
  "#fff",
];

const BURST_COUNT = 3;
const PARTICLES_PER_BURST = 28;
const BURST_DELAY_MS = 320;

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

type Particle = {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
};

export default function Fireworks() {
  const [bursts, setBursts] = useState<Array<{ id: number; particles: Particle[] }>>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const burstPositions = [
      { x: 30, y: 25 },
      { x: 70, y: 20 },
      { x: 50, y: 35 },
    ];

    let burstId = 0;

    burstPositions.forEach((pos, i) => {
      setTimeout(() => {
        const particles: Particle[] = [];
        for (let p = 0; p < PARTICLES_PER_BURST; p++) {
          const angle = (p / PARTICLES_PER_BURST) * Math.PI * 2 + random(0, 0.5);
          const velocity = random(80, 180);
          const tx = Math.cos(angle) * velocity;
          const ty = Math.sin(angle) * velocity - 40;
          particles.push({
            id: burstId * 1000 + p,
            x: pos.x,
            y: pos.y,
            tx,
            ty,
            color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
            size: random(4, 10),
            duration: random(800, 1200),
            delay: random(0, 80),
          });
        }
        setBursts((prev) => [...prev, { id: burstId++, particles }]);
      }, i * BURST_DELAY_MS);
    });

    const cleanup = setTimeout(() => setDone(true), 2500);
    return () => clearTimeout(cleanup);
  }, []);

  if (done) return null;

  return (
    <div className={styles.wrap} aria-hidden>
      {bursts.map((burst) => (
        <div key={burst.id} className={styles.burst}>
          {burst.particles.map((p) => (
            <div
              key={p.id}
              className={styles.particle}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                ["--tx" as string]: `${p.tx}px`,
                ["--ty" as string]: `${p.ty}px`,
                ["--dur" as string]: `${p.duration}ms`,
                ["--delay" as string]: `${p.delay}ms`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
