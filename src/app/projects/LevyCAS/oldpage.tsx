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
        <section className="cas-demo-page">
            <h1 className="cas-demo-title">LevyCAS Interactive Demo</h1>
            <form className="cas-demo-form" onSubmit={handleSubmit}>
                {/* Menu options */}
                <div className="cas-demo-main">
                    <button type="button" onClick={() => setMainOp("Simplification")}>Simplification</button>
                    <button type="button" onClick={() => setMainOp("Calculus")}>Calculus</button>
                    <button type="button" onClick={() => setMainOp("Polynomial")}>Polynomial</button>
                    <button type="button" onClick={() => setMainOp("Numerical")}>Numerical</button>
                </div>

                {/* Dynamic output */}
                <h2 className="mb-2 text-xl">Endpoint: {subOp}</h2>
                <div className="cas-demo-output">
                    <TextType
                        text={demoOutput}
                        key={demoOutput} 
                        deletingSpeed={0}
                        typingSpeed={25}
                    />
                </div>
             
                {/* Operation Options */}
                <div>
                    {
                        mainOp == "Simplification" && (
                            <section className="cas-demo-sub">
                                <button type="button" onClick={() => setSubOp("/simp/auto")}>Auto Simplification</button>
                                <button type="button" onClick={() => setSubOp("/simp/rationalize")}>Rationalization</button>
                                <button type="button" onClick={() => setSubOp("/simp/trig")}>Trig Simplification</button>
                            </section>
                        )
                    }
                    {
                        mainOp == "Calculus" && (
                            <section className="cas-demo-sub">
                                <button type="button" onClick={() => setSubOp("/calculus/derivative")}>Differentiate</button>
                                <button type="button" onClick={() => setSubOp("/calculus/integrate")}>Integrate</button>
                            </section>
                        )
                    }
                    {
                        mainOp == "Polynomial" && (
                            <section className="cas-demo-sub">
                                <button type="button" onClick={() => setSubOp("/poly/gcd")}>Greatest Common Divisor</button>
                                <button type="button" onClick={() => setSubOp("/poly/sqf")}>Square-Free Factor</button>
                            </section>
                        )
                    }
                    {
                        mainOp === "Numerical" && (
                            <section className="cas-demo-sub">
                                <button type="button" onClick={() => setSubOp("/num/prime")}>Prime Check</button>
                                <button type="button" onClick={() => setSubOp("/num/factor")}>Integer Factorization</button>
                            </section>
                        )
                    }

                    {/* Expression input */}
                    <div className="cas-demo-input">
                        <input className="cas-demo-input-field" value={userInput} onChange={e => setUserInput(e.target.value.toLowerCase())} placeholder="Enter expression" />
                        <button type="submit">Calculate</button>
                    </div>
                </div>
            </form>
        </section>
    )
}