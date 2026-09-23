"use client";

import { useState } from "react";
import { integrate, differentiate, factor, simplify } from "./actions";
import styles from "./CASDemo.module.css";

type Operation = "integrate" | "differentiate" | "factor" | "simplify";

const OPERATIONS: { id: Operation; label: string; symbol: string; fn: typeof integrate }[] = [
  { id: "integrate", label: "Integrate", symbol: "∫", fn: integrate },
  { id: "differentiate", label: "Differentiate", symbol: "d/dx", fn: differentiate },
  { id: "factor", label: "Factor", symbol: "( )", fn: factor },
  { id: "simplify", label: "Simplify", symbol: "≡", fn: simplify },
];

// Backend response shape isn't nailed down yet — try the likely keys,
// fall back to the raw payload so nothing silently disappears.
function readableResult(data: unknown): string {
  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    for (const key of ["result", "output", "simplified", "expression", "latex", "value"]) {
      if (typeof record[key] === "string") return record[key] as string;
    }
  }
  return JSON.stringify(data, null, 2);
}

export default function CASDemo() {
  const [operation, setOperation] = useState<Operation>("integrate");
  const [expression, setExpression] = useState("x^2 + 2*x + 1");
  const [variable, setVariable] = useState("x");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);
  const [showRaw, setShowRaw] = useState(false);
  const [revealNonce, setRevealNonce] = useState(0);

  const active = OPERATIONS.find((op) => op.id === operation)!;

  async function run() {
    setLoading(true);
    setError(null);
    try {
      const data = await active.fn(expression, variable);
      setResult(data);
      setRevealNonce((n) => n + 1);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.panel} aria-label="LevyCAS interactive demo">
      <div className={styles.tabs} role="tablist" aria-label="CAS operation">
        {OPERATIONS.map((op) => (
          <button
            key={op.id}
            role="tab"
            aria-selected={op.id === operation}
            className={`${styles.tab} ${op.id === operation ? styles.tabActive : ""}`}
            onClick={() => setOperation(op.id)}
          >
            <span className={styles.tabSymbol}>{op.symbol}</span>
            {op.label}
          </button>
        ))}
      </div>

      <div className={styles.board}>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel} htmlFor="expression">
            f({variable}) =
          </label>
          <input
            id="expression"
            className={styles.input}
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            spellCheck={false}
            autoComplete="off"
          />
          <label className={styles.varLabel} htmlFor="variable">
            d/d
          </label>
          <input
            id="variable"
            className={styles.varInput}
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
            maxLength={3}
            spellCheck={false}
            autoComplete="off"
          />
        </div>

        <button className={styles.run} onClick={run} disabled={loading || !expression.trim()}>
          {loading ? "Working it out…" : `Run ${active.label.toLowerCase()}`}
        </button>

        {error && <p className={styles.error}>{error}</p>}

        {result !== null && !error && (
          <div key={revealNonce} className={styles.result}>
            <p className={styles.resultLabel}>{active.symbol} result</p>
            <p className={styles.resultValue}>{readableResult(result)}</p>
          </div>
        )}

        {result !== null && (
          <div className={styles.rawWrap}>
            <button className={styles.rawToggle} onClick={() => setShowRaw((v) => !v)}>
              {showRaw ? "hide raw response ▴" : "view raw response ▾"}
            </button>
            {showRaw && <pre className={styles.rawBlock}>{JSON.stringify(result, null, 2)}</pre>}
          </div>
        )}
      </div>
    </section>
  );
}
