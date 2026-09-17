"use server";

async function callCAS(operation: string, expression: string, variable: string) {
  const backendUrl = process.env.API_URL;
  console.log("[LevyCAS] API_URL binding =", backendUrl)

  if (!backendUrl) throw new Error("API_URL binding is not configured");

  const url = new URL(`${operation}/`, backendUrl);
  console.log("[LevyCAS] request URL =", url.toString());
  
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expression, variable }),
  });

  if (!res.ok) throw new Error(`CAS request failed: ${res.status}`);
  return res.json();
}

export async function integrate(expression: string, variable = "x") {
  return callCAS("integrate", expression, variable);
}
export async function differentiate(expression: string, variable = "x") {
  return callCAS("differentiate", expression, variable);
}
export async function factor(expression: string, variable = "x") {
  return callCAS("factor", expression, variable);
}
export async function simplify(expression: string, variable = "x") {
  return callCAS("simplify", expression, variable);
}