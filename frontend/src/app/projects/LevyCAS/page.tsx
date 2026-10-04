import CASDemo from "./CASDemo";
import styles from "./page.module.css";
import { STIX_Two_Text, JetBrains_Mono, Inter } from "next/font/google";

const stix = STIX_Two_Text({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
  variable: "--font-stix",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export default function LevyCAS() {
  return (
    <main className={`${styles.shell} ${stix.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>LevyCAS — computer algebra system</p>
        <h1 className={styles.title}>Let&apos;s do some math!</h1>
        <p className={styles.subtitle}>
          Select an operation and enter an expression in terms of x.
        </p>
      </div>
      <CASDemo />
    </main>
  );
}