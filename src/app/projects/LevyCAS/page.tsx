'use client';

// State
import { ButtonHTMLAttributes, useState } from "react";
import { Client } from "@gradio/client";

// Components
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { AnimatePresence, motion } from "motion/react";

// Styles
import "./demo.css";

// Icons
import { BiMath } from "react-icons/bi"; // Simplification
import { FaCalculator } from "react-icons/fa6"; // Numerical
import { MdFunctions } from "react-icons/md"; // Polynomial
import { TbMathIntegralX } from "react-icons/tb"; // Calculus
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa"; // Menu Open/Close

// MENU OPTIONS
// Main: Simplification, Calculus, Polynomial, Numerical
// Simplification: Automatic Simplification, Rationalization, Trigonometric Simplification
// Calculus: Differentiation, Integration
// Polynomial: Greatest Common Divisor, Square Free Factorization
// Numerical: Prime Check, Integer Factorization

export default function LevyCAS() {
    const [navOpen, setNavOpen] = useState(true);
    const [demoOutput, setDemoOutput] = useState('');
    const [userInput, setUserInput] = useState('');
    const [mainOp, setMainOp] = useState('Calculus');
    const [subOp, setSubOp] = useState('/calculus/derivative');
    

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setDemoOutput("Loading...");

        try {
            const client = await Client.connect("ajlevy246/levycas-api");

            // subOp is the API endpoint (e.g., 'calculus/derivative')
            // Each endpoint in a specific category (submenu) should use
            // the same parameters!! otherwise, too much casework
            let result;
            if (mainOp === "Calculus") {
                result = await client.predict(subOp, { expr: userInput, wrt: "x" });
            }
            else {
                result = await client.predict(subOp, { expr: userInput});
            }
            setDemoOutput(result.data as string);
        } 
        
        catch {
            setDemoOutput("failed, try a different expression...")
        }
    }

    return (
        <section className="cas-demo">
        <motion.nav
                initial={{ x: 0 }}
                animate={{ x: navOpen ? 0 : "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30, bounce: 0 }}
            >
                {/* Navbar header */}
                <h1>Menu</h1>

                <hr />

                {/* Main operation menu */}
                <div className="cas-menu">
                    <button
                        className={mainOp === "Simplification" ? "selected" : ""}
                        onClick={() => {setSubOp("/simp/auto"); setMainOp("Simplification")}}
                    >
                        <BiMath /> Simplification
                    </button>
                    <button 
                        className={mainOp === "Calculus" ? "selected" : ""}
                        onClick={() => {setSubOp("/calculus/derivative"); setMainOp("Calculus")}}
                    >
                            <TbMathIntegralX /> Calculus
                    </button>
                    <button 
                        className={mainOp === "Numerical" ? "selected" : ""}
                        onClick={() => {setSubOp("/num/prime"); setMainOp("Numerical")}}
                    >
                            <FaCalculator />Numerical
                    </button>
                    <button 
                        className={mainOp === "Polynomial" ? "selected" : ""}
                        onClick={() => {setSubOp("/poly/gcd"); setMainOp("Polynomial")}}
                    >
                        <MdFunctions />Polynomial
                    </button>
                </div>

                <hr />

                {/* Sub operation menu */}
                <div>
                    <AnimatePresence initial={false} mode="wait">
                        { mainOp == "Simplification" && (
                                    <motion.section className="cas-menu cas-sub-menu"
                                        key="Simplification"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{ duration: 0.35, ease: 'easeIn' }}
                                    >
                                        <button 
                                            className={subOp === "/simp/auto" ? "selected" : ""}
                                            type="button" onClick={() => setSubOp("/simp/auto")}
                                        >
                                            Parse
                                        </button>
                                        <button 
                                            className={subOp === "/simp/rationalize" ? "selected" : ""}
                                            type="button" onClick={() => setSubOp("/simp/rationalize")}
                                        >
                                            Rationalization
                                        </button>
                                        <button
                                            className={subOp === "/simp/trig" ? "selected" : ""}
                                            type="button" onClick={() => setSubOp("/simp/trig")}
                                        >
                                            Trig Simplify
                                        </button>
                                    </motion.section>
                            )
                            
                        }
                        { mainOp == "Calculus" && (
                                <motion.section className="cas-menu cas-sub-menu"
                                    key="Calculus"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.35, ease: 'easeIn' }}
                                >
                                    <button 
                                        className={subOp === "/calculus/derivative" ? "selected" : ""}
                                        type="button" onClick={() => setSubOp("/calculus/derivative")}
                                    >
                                        Differentiate
                                    </button>
                                    <button 
                                        className={subOp === "/calculus/integrate" ? "selected" : ""}
                                        type="button" onClick={() => setSubOp("/calculus/integrate")}
                                    >
                                        Integrate
                                    </button>
                                </motion.section>
                            )
                        }
                    {
                        mainOp == "Polynomial" && (
                            <motion.section className="cas-menu cas-sub-menu"
                                    key="Polynomial"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.35, ease: 'easeIn' }}
                                >
                                <button 
                                    className={subOp === "/poly/gcd" ? "selected" : ""}
                                    type="button" onClick={() => setSubOp("/poly/gcd")}
                                >
                                    Polynomial GCD
                                </button>
                                <button
                                    className={subOp === "/poly/sqf" ? "selected" : ""}
                                    type="button" onClick={() => setSubOp("/poly/sqf")}
                                >
                                    Sq-Free Factor
                                </button>
                            </motion.section>
                        )
                    }
                    {
                        mainOp === "Numerical" && (
                            <motion.section className="cas-menu cas-sub-menu"
                                key="Numerical"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.35, ease: 'easeIn' }}
                            >
                                <button 
                                    className={subOp === "/num/prime" ? "selected" : ""}
                                    type="button" onClick={() => setSubOp("/num/prime")}
                                >
                                    Prime Check
                                </button>
                                <button 
                                    className={subOp === "/num/factor" ? "selected" : ""}
                                    type="button" onClick={() => setSubOp("/num/factor")}
                                >
                                    Integer Factor
                                </button>
                            </motion.section>
                        )
                    }
                    </AnimatePresence>
                </div>

                <button className="open-close" onClick={() => setNavOpen(!navOpen)}>
                    <div className={`${navOpen ? 'open' : ''}`} />
                </button>
            </motion.nav>
             

            <h1>LevyCAS Interactive Demo</h1>
            <form onSubmit={handleSubmit}>
                <h2 className="mb-2 text-xl">Endpoint: {subOp}</h2>
                <div className="cas-demo-output">
                    <TextType
                        text={demoOutput}
                        key={demoOutput} 
                        deletingSpeed={0}
                        typingSpeed={25}
                    />
                </div>
                
                <div className="cas-demo-input">
                    <p>
                        A description of the selected operation will go here. 
                        This is some sample text to help me style the description, 
                        until some more explanatory text is written.
                    </p>
                    <input className="cas-demo-input-field" value={userInput} onChange={e => setUserInput(e.target.value.toLowerCase())} placeholder="Enter expression" />
                    <button type="submit">Calculate</button>
                </div>
            </form>
        </section>
    )
}