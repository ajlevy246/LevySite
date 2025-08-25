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
                    {/* Project Title */}
                    <h1>LevyCAS</h1>
                    
                    {/* Project Description */}
                    <p>
                        LevyCAS is a computer algebra system written in pure python and developed as a python package. 
                        <span className="hidden xl:contents"> LevyCAS uses a built-in Pratt parser capable of turning natural language mathematical
                            expressions into Python objects that can be manipulated.
                        </span>
                    </p>
                    <p className="xl:hidden"> LevyCAS uses a Pratt parser to turn natural language expressions into python objects.
                         Check out the demo below by entering a math expression in terms of the variable x, and watch as its derivative is computed.</p>
                    <p className="hidden xl:flex">
                        The system comes equipped with a set of powerful operations, including automatic simplification, 
                        symbolic integration and differentation, polynomial greatest common divisors, integer 
                        factorization, and more.
                    </p>
                    <p className="hidden xl:flex">
                        Use the demo below by entering a mathematical expression in plain language (like &quot;2x + 3&quot; or &quot;2xsin(x)&quot;)
                        and press the calculate button to compute the derivative with respect to x.
                    </p>

                    {/* Project demo */}
                    <form className="mt-[3rem]" onSubmit={handleSubmit}>
                        <input className="text-xl pl-3 border-white border-[3px] h-[3rem] rounded-[5px] mr-10 mb-10" value={expr} onChange={e => setExpr(e.target.value.toLowerCase())} placeholder="Enter expression" />
                        <button className="mb-5" type="submit">Calculate</button>
                        <div className="text-2xl derivative-output">
                            <TextType deletingSpeed={0} typingSpeed={25} key={derivativeOutput} text={derivativeOutput} />
                        </div>
                    </form>
                </section>

                {/* Close button */}
                <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
        </motion.div>
    )
}