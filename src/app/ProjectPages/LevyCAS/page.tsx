"use client"; // because you'll be running client-side JS

import { useState } from "react";
import { Client } from "@gradio/client";

export default function CasDemo() {
  const [expr, setExpr] = useState("");
  const [wrt, setWrt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const client = await Client.connect("ajlevy246/levycas-api");
      const res = await client.predict("/calculus/derivative", {
        expr: expr,
        wrt: wrt,
      });
      const data = res.data as string
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult("Error connecting to API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">CAS Derivative Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Expression (e.g. x^2 + 3x)"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Differentiate with respect to (e.g. x)"
          value={wrt}
          onChange={(e) => setWrt(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Computing..." : "Compute Derivative"}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Result:</strong> {JSON.stringify(result)}
        </div>
      )}
    </div>
  );
}
