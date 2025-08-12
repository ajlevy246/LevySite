"use client";

import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import "./footer.css";

type FooterItemProps = {
  image: any;
  href: string;
  glow: boolean;
};

function FooterItem({ image, href, glow }: FooterItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`footer-icon transition ${glow ? "backdrop-blur-md bg-white/15 shadow-lg shadow-black/20 border border-white/20" : ""}`}
    >
      {image}
    </a>
  );
}

export default function Footer() {
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  const [isBottom, setIsBottom] = useState(false);
  const [hasGlow, setHasGlow] = useState(true);

  useEffect(() => {
    const snapPoint = window.innerHeight * 0.07;

    // isBottom state ensures animation triggers only once,
    // each time the user passes the snap point.
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > snapPoint && !isBottom) {
        setIsBottom(true);
        setHasGlow(false);
        controls.start({
          y: "90vh",
          x: "2vw",
          scale: 1,
          transition: { type: "spring", bounce: 0.2, duration: 1.5 }
        });
      }
      else if (latest <= snapPoint && isBottom) {
        setIsBottom(false);
        setHasGlow(true);
        controls.start({
          y: "75vh",
          x: "46.5vw",
          scale: 1.5,
          transition: { type: "spring", bounce: 0, duration: 1.5 }
        });
      }
    });

    return () => unsubscribe();
  }, [controls, scrollY, isBottom]);

  return (
    <motion.footer
      animate={controls}
      initial={{ y: "75vh", x: "46.5vw", scale: 1.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
      className="text-white text-center flex flex-col items-center gap-2"
    >
      <div className="flex flex-row flex-wrap gap-6 items-center justify-center text-3xl">
        <FooterItem
          image={<BiLogoLinkedinSquare />}
          href="https://www.linkedin.com/in/alexlevy246"
          glow={hasGlow}
        />
        <FooterItem
          image={<FaGithub />}
          href="https://github.com/ajlevy246"
          glow={hasGlow}
        />
        <FooterItem
          image={<CgMail />}
          href="mailto:ajlevy246@gmail.com"
          glow={hasGlow}
        />
      </div>
    </motion.footer>
  );
}
