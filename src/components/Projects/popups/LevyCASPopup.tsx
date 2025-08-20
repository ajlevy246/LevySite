'use client';

import { motion } from "motion/react";
import { Client } from "@gradio/client";
import { useState } from "react";

import TextType from "@/blocks/TextAnimations/TextType/TextType";

import "./popups.css";

type LevyCASPopupProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

export default function LevyCASPopup({ isOpen, setIsOpen }: LevyCASPopupProps) {
    const [ expr, setExpr ] = useState('');
    const [ derivativeOutput, setDerivativeOutput ] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setDerivativeOutput("Loading...");

        try {
            const client = await Client.connect("ajlevy246/levycas-api");
            const result = await client.predict("/calculus/derivative", { expr, wrt: "x" });

            setDerivativeOutput(result.data as string);
        } 
        
        catch {
            setDerivativeOutput("failed, try a different expression...")
        }
    }

    return (
        // Popup container
        <motion.div
            className="projectPopup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
        >
            {/* Popup content */}
            <motion.div
                className="projectBox"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <section>
                    <h1>LevyCAS</h1>
                    <p>
                        LevyCAS is a computer algebra system written in pure python and developed as a python package. 
                        LevyCAS uses a built-in Pratt parser capable of turning natural language mathematical
                        expressions into Python objects that can be manipulated. 
                    </p>
                    <p className="hidden xl:flex">
                        The system comes equipped with a set of powerful operations, including automatic simplification, 
                        symbolic integration and differentation, polynomial greatest common divisors, integer 
                        factorization, and more.
                    </p>
                    <p className="hidden xl:flex">
                        Use the demo below by entering a mathematical expression in plain language (like &quot;2x + 3&quot; or &quot;2xsin(x)&quot;)
                        and press the calculate button to compute the derivative with respect to x.
                    </p>
                    <form className="mt-[7rem]" onSubmit={handleSubmit}>
                        <input className="text-xl pl-3 border-white border-[3px] h-[3rem] rounded-[5px] mr-10 mb-10" value={expr} onChange={e => setExpr(e.target.value)} placeholder="Expression" />
                        <button className="mb-10" type="submit">Calculate</button>
                        <div className="text-2xl">
                            <TextType deletingSpeed={0} typingSpeed={5} key={derivativeOutput} text={derivativeOutput} />
                        </div>
                    </form>
                </section>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}

// Desc:

// function LevyCAS() {
//   return (
//     <div className="text-md md:text-2xl text-gray-400">A capable computer algebra system written entirely in python,
//       complete with a Pratt Parser for parsing natural language into mathematical expressions. 
//       Comes equipped with operations from calculus and number theory, including symbolic integration and 
//       prime factorization.
//     </div>
//   )
// }