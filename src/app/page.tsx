import Image from "next/image";
import Link from "next/link";
import styles from "./recipe.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Easy Cake Recipe 🍰 | Delicious & Quick",
  description: "Learn how to make the perfect, delicious cake at home with this easy 180°C recipe. Perfect for beginners and expert bakers alike!",
  keywords: ["cake recipe", "easy baking", "homemade cake", "delicious cake", "quick dessert"],
  openGraph: {
    title: "The Ultimate Easy Cake Recipe 🍰",
    description: "First-time baker? No problem! Follow our simple steps for a perfect cake.",
    images: ["/delicious_cake_hero_1777322515232.png"],
  },
};

export default function RecipePage() {
  const steps = [
    {
      title: "Preheat & Prepare",
      text: "First, turn on the oven to 180°C and get your cake pan ready.",
      icon: "🌡️",
    },
    {
      title: "Sweet Base",
      text: "Then, put eggs and sugar in a bowl and mix them really well until delicious.",
      icon: "🥣",
    },
    {
      title: "Liquid Gold",
      text: "After that, add milk and oil to the mixture and mix again.",
      icon: "🥛",
    },
    {
      title: "The Dry Mix",
      text: "Next, add flour and baking powder. Mix everything until it looks smooth and perfect.",
      icon: "🌾",
    },
    {
      title: "Into the Pan",
      text: "Pour the mixture into a cake pan. Make sure it's spread evenly!",
      icon: "🥘",
    },
    {
      title: "Bake Time",
      text: "Put it in the oven and bake it for about 30 minutes. The smell will be amazing!",
      icon: "⏲️",
    },
    {
      title: "The Toothpick Test",
      text: "Check it with a toothpick. If it comes out clean, it’s done!",
      icon: "✨",
    },
    {
      title: "Rest & Enjoy",
      text: "Take it out, let it cool down, and then you can finally eat it!",
      icon: "😋",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Floating 3D Emojis */}
      <span className={styles.floatingEmoji} style={{ top: '10%', left: '5%', animationDelay: '0s' }}>🍰</span>
      <span className={styles.floatingEmoji} style={{ top: '20%', right: '10%', animationDelay: '1s' }}>🥚</span>
      <span className={styles.floatingEmoji} style={{ bottom: '30%', left: '10%', animationDelay: '2s' }}>🥛</span>
      <span className={styles.floatingEmoji} style={{ bottom: '15%', right: '5%', animationDelay: '3s' }}>🍓</span>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>My Easy Cake Recipe 🍰</h1>
          <p className={styles.heroSub}>
            Simple steps for a perfect, delicious cake that everyone will love.
          </p>
        </div>
      </section>

      <main className={styles.main}>
        {/* Ingredients / Summary Card */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>What You'll Need</h2>
          <div className={styles.ingredientsGrid}>
            <div className={styles.ingredientCard}>
              <span className={styles.ingredientIcon}>🥚</span>
              <h4 style={{ margin: '0.5rem 0' }}>Fresh Eggs</h4>
              <p style={{ fontSize: '0.9rem', color: '#636e72' }}>For that perfect rise</p>
            </div>
            <div className={styles.ingredientCard}>
              <span className={styles.ingredientIcon}>🧂</span>
              <h4 style={{ margin: '0.5rem 0' }}>Sugar</h4>
              <p style={{ fontSize: '0.9rem', color: '#636e72' }}>For natural sweetness</p>
            </div>
            <div className={styles.ingredientCard}>
              <span className={styles.ingredientIcon}>🥛</span>
              <h4 style={{ margin: '0.5rem 0' }}>Milk & Oil</h4>
              <p style={{ fontSize: '0.9rem', color: '#636e72' }}>For a moist texture</p>
            </div>
            <div className={styles.ingredientCard}>
              <span className={styles.ingredientIcon}>🍞</span>
              <h4 style={{ margin: '0.5rem 0' }}>Flour & Baking Powder</h4>
              <p style={{ fontSize: '0.9rem', color: '#636e72' }}>The foundation of it all</p>
            </div>
          </div>

          <div style={{ borderRadius: '30px', overflow: 'hidden', marginTop: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Image
              src="/cake_mixing_ingredients_1777322532942.png"
              alt="Mixing cake ingredients"
              width={1000}
              height={550}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Steps Section */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>The Process</h2>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepItem}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#d35400', fontSize: '1.4rem' }}>
                    {step.icon} {step.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', color: '#2d3436' }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tip Section */}
        <section className={styles.tipsSection}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>✨ Make it Extra Special!</h3>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
            Don't forget to add fresh cream or fruits on top.
            The powdered sugar makes it beautiful, like a cake in a cafe.
            Enjoy your homemade masterpiece!
          </p>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <Link href="/dream-home" className={styles.navLink}>
            🏠 Back to My Dream House
          </Link>
          <p style={{ marginTop: '3rem', color: '#b2bec3', fontWeight: '600' }}>Created with ❤️ by Ayaz</p>
        </footer>
      </main>
    </div>
  );
}
