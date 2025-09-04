'use client';

// State
import { ButtonHTMLAttributes, useState } from "react";
import { Client } from "@gradio/client";

// Components
import TextType from "@/blocks/TextAnimations/TextType/TextType";

// Styles
import "./demo.css";

// MENU OPTIONS
// Main: Simplification, Calculus, Polynomial, Numerical
// Simplification: Automatic Simplification, Rationalization, Trigonometric Simplification
// Calculus: Differentiation, Integration
// Polynomial: Greatest Common Divisor, Square Free Factorization
// Numerical: Prime Check, Integer Factorization

export default function LevyCAS() {
    const [demoOutput, setDemoOutput] = useState('');
    // Default choice is differentiation
    const [userInput, setUserInput] = useState('');
    const [mainOp, setMainOp] = useState('Calculus');
    const [subOp, setSubOp] = useState('/calculus/derivative');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setDemoOutput("Loading...");


        try {
            const client = await Client.connect("ajlevy246/levycas-api");

            // subOp is the API endpoint (e.g., 'calculus/derivative')
            const result = await client.predict(subOp, { expr: userInput, wrt: "x" });
            setDemoOutput(result.data as string);
        } 
        
        catch {
            setDemoOutput("failed, try a different expression...")
        }
    }

    return (
        <section id="cas-demo">
            <div id="demo-output">
                <TextType
                    text={demoOutput}
                    key={demoOutput} 
                    deletingSpeed={0}
                    typingSpeed={25}
                />
            </div>
            <form id="demo-input" onSubmit={handleSubmit}>
                {/* Expression input */}
                <div>
                    <input className="text-xl pl-[0.75rem] border-white border-[3px] h-[3rem] rounded-[5px]" value={userInput} onChange={e => setUserInput(e.target.value.toLowerCase())} placeholder="Enter expression" />
                    <button type="submit">Calculate</button>
                </div>
                
                {/* Menu options */}
                <div>
                    <button type="button" onClick={() => setMainOp("Simplification")}>Simplification</button>
                    <button type="button" onClick={() => setMainOp("Calculus")}>Calculus</button>
                    <button type="button" onClick={() => setMainOp("Polynomial")}>Polynomial</button>
                    <button type="button" onClick={() => setMainOp("Numerical")}>Numerical</button>
                </div>

                {/* Operation Options */}
                <div>
                    {
                        mainOp == "Simplification" && (
                            <section className="sub-op-menu">
                                <button type="button" onClick={() => setSubOp("/simp/auto")}>Auto Simplification</button>
                                <button type="button" onClick={() => setSubOp("/simp/rationalize")}>Rationalization</button>
                                <button type="button" onClick={() => setSubOp("/simp/trig")}>Trig Simplification</button>
                            </section>
                        )
                    }
                    {
                        mainOp == "Calculus" && (
                            <section className="sub-op-menu">
                                <button type="button" onClick={() => setSubOp("/calculus/derivative")}>Differentiate</button>
                                <button type="button" onClick={() => setSubOp("/calculus/integrate")}>Integrate</button>
                            </section>
                        )
                    }
                    {
                        mainOp == "Polynomial" && (
                            <section className="sub-op-menu">
                                <button type="button" onClick={() => setSubOp("/poly/gcd")}>Greatest Common Divisor</button>
                                <button type="button" onClick={() => setSubOp("/poly/sqf")}>Square-Free Factor</button>
                            </section>
                        )
                    }
                    {
                        mainOp === "Numerical" && (
                            <section className="sub-op-menu">
                                <button type="button" onClick={() => setSubOp("/num/prime")}>Prime Check</button>
                                <button type="button" onClick={() => setSubOp("/num/factor")}>Integer Factorization</button>
                            </section>
                        )
                    }
                </div>
            </form>
        </section>
    )
}