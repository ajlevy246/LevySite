'use client';

import { AnimatePresence, motion } from "motion/react";

import "./projects.css";

function LevyCASCard() {
  return (
    <motion.div
      className="projectCard"
      initial={{ opacity: 0, y: 65 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1>LevyCAS</h1>
    </motion.div>
  )
}

function PersonalSiteCard() {
  return (
    <motion.div
      className="projectCard"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1>Personal Site</h1>
    </motion.div>
  )
}

function EarleyParserCard() {
  return (
    <motion.div
      className="projectCard"
      initial={{ opacity: 0, y: 95 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1>Earley Parser</h1>
    </motion.div>
  )
}

function LevyCAS() {
  return (
    <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
      complete with a Pratt Parser for parsing natural language into mathematical expressions. 
      Comes equipped with operations from calculus and number theory, including symbolic integration and 
      prime factorization.
    </div>
  )
}

function EarleyParser() {
  return (
    <div>A python package capable of parsing arbitrary user defined context-free grammars.
      Uses a top-down Earley Parser written in pure python—returns ambiguous parse forests, with methods to extract and modify trees.
    </div>
  )
}

function PersonalSite() {
  return (
    <div>
      A capable computer algebra system written entirely in python,
      complete with a Pratt Parser for parsing natural language into mathematical expressions. 
      Comes equipped with operations from calculus and number theory, including symbolic integration and 
      prime factorization.
    </div>
  )
}

export default function Projects() {
  function Separator() {
    return (
      <li><hr className="w-[300px] max-w-[300px] justify-self-center border-blue-800"/></li>
    )
  }

  return (
    <section id="projects" className="min-h-screen pt-[25%] md:pt-[8%]">
      <div className="sectionTitle text-5xl text-center mb-[5%]"> Projects </div>
      <div className="flex flex-col md:flex-row justify-center space-x-[5%]">
        <LevyCASCard />
        <PersonalSiteCard />
        <EarleyParserCard />
      </div>
    </section> 
  )
}