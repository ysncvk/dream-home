import Image from "next/image";
import Fireworks from "@/components/Fireworks";
import ScrollReveal from "@/components/ScrollReveal";
import BackToTop from "@/components/BackToTop";
import NightModeToggle from "@/components/NightModeToggle";
import Stars from "@/components/Stars";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Fireworks />
      <NightModeToggle />
      <Stars />
      <div className={styles.bgDecor} aria-hidden>
        <div className={`${styles.cloud} ${styles.cloud1}`} />
        <div className={`${styles.cloud} ${styles.cloud2}`} />
        <div className={`${styles.cloud} ${styles.cloud3}`} />
        <div className={`${styles.cloud} ${styles.cloud4}`} />
        <div className={styles.sun} />
      </div>

      <main className={styles.main}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>My Dream House 🏔️</h1>
          <p className={styles.heroSub}>Hi! My name is Ayaz. Today I will talk about my dream house.</p>
        </header>

        <ScrollReveal>
          <div className={styles.photoWrap}>
            <Image
              src="/ayazhouse.png"
              alt="Ayaz's dream house in the mountains"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <section className={styles.intro}>
            <p>
              <strong>My dream house is small and peaceful in the mountains.</strong> There is a kitchen and a bedroom.
            </p>
            <p>
              There are <strong>three bathrooms</strong> in the house and <strong>two balconies</strong>. There is a{" "}
              <strong>beautiful mountain view</strong>.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🛏️</span>
              <span>Kitchen & Bedroom</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🚿</span>
              <span>3 Bathrooms</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🌅</span>
              <span>2 Balconies</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>⛰️</span>
              <span>Mountain View</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <section className={styles.why}>
            <h3>Why I like this house</h3>
            <p>
              I like this house, because it is <strong>peaceful and comfortable</strong>. I like relaxing and this house
              is perfect for relaxing.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <footer className={styles.footer}>
            — Ayaz 🌲
          </footer>
        </ScrollReveal>
      </main>

      <BackToTop />
    </div>
  );
}
