'use client';

// Component Imports
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import LevyCASPopup from "@/components/Projects/popups/LevyCASPopup";
import EarleyParserPopup from "./popups/EarleyParserPopup";
import PersonalSitePopup from "./popups/PersonalSitePopup";

// Style Imports
import "./projects.css";

// Image Imports
import casdemo from "@/assets/projects/levycasdemo.png";
import sitedemo from "@/assets/projects/sitedemo.png";
import earleydemo from "@/assets/projects/earleydemo.png";
import { FaG } from "react-icons/fa6";

function ProjectLink({ href }: { href: string }) {
  return (
    <Link href={href}><FaGithub className="projectIcon"/></Link>
  )
}

function LevyCASCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 85 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="projectCard">
          <h1>LevyCAS <ProjectLink href="https://github.com/ajlevy246/LevyCAS" /></h1>
          <p>A pure python computer algebra system with a Pratt parser, complete with automatic simplification, symbolic integration and differentation, and more.</p>
          <div className="projectImgWrapper"><Image
            className=""
            src={casdemo}
            width="1871"
            height="573" 
            alt="The LevyCAS demo; showing a menu with options for calculus, numerical, and polynomial operations with examples"
          /></div>
        </div>
      </motion.div>

      {/* Project popup */}
      <AnimatePresence>
          {isOpen && (
            <LevyCASPopup isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
      </AnimatePresence>
    </>
  )
}

function PersonalSiteCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 95 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="projectCard">
          <h1>Portfolio Site <ProjectLink href="https://github.com/ajlevy246/LevySite" /></h1>
          <p>You&apos;re looking at it! Built to showcase my experience, this site was developed in Next.js with Typescript and TailwindCSS, and deployed with Docker.</p>
          <div className="projectImgWrapper">
          <Image
            src={sitedemo}
            width="2535"
            height="1314"
            alt="A screenshot of the homepage of my personal site, wiht a background image of Stowe, Vermont and an image of me in the foreground."
          /></div>
        </div>
      </motion.div>

      {/* Project popup */}
      <AnimatePresence>
        {isOpen && (
          <PersonalSitePopup isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
    </>
  )
}

function EarleyParserCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 110 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="projectCard">
          <h1>Earley Parser <ProjectLink href="https://github.com/ajlevy246/" /></h1>
          <p>A powerful python implementation of the Earley algorithm for user-defined context-free grammars.</p>
          <div className="projectImgWrapper"><Image 
            src={earleydemo}
            width="1043"
            height="607"
            alt="Pseudocode for the first steps of the Earley parsing algorithm, taken from wikipedia"
          /></div>
        </div>
      </motion.div>

      {/* Project popup */}
      <AnimatePresence>
        {isOpen && (
          <EarleyParserPopup isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
    </>
  )
}

// function LevyCAS() {
//   return (
//     <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
//       complete with a Pratt Parser for parsing natural language into mathematical expressions. 
//       Comes equipped with operations from calculus and number theory, including symbolic integration and 
//       prime factorization.
//     </div>
//   )
// }

// function EarleyParser() {
//   return (
//     <div>A python package capable of parsing arbitrary user defined context-free grammars.
//       Uses a top-down Earley Parser written in pure python—returns ambiguous parse forests, with methods to extract and modify trees.
//     </div>
//   )
// }

// function PersonalSite() {
//   return (
//     <div>
//       A capable computer algebra system written entirely in python,
//       complete with a Pratt Parser for parsing natural language into mathematical expressions. 
//       Comes equipped with operations from calculus and number theory, including symbolic integration and 
//       prime factorization.
//     </div>
//   )
// }

export default function Projects() {
  function Separator() {
    return (
      <li><hr className="w-[300px] max-w-[300px] justify-self-center border-blue-800"/></li>
    )
  }

  return (
    <section id="projects" className="min-h-screen pt-[25%] md:pt-[8%]">
      <div className="sectionTitle text-5xl text-center mb-[15%] lg:mb-[5%]"> Projects </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[2%] space-y-[10%]">
        <LevyCASCard />
        <PersonalSiteCard />
        <EarleyParserCard />
      </div>
    </section> 
  )
}