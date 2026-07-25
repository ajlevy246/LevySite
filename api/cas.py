"""Core LevyCAS interface, all the mathematical logic is here.

The logic here allows the routes to be completely independent from the 
 CAS library.
"""
from levycas import (
    UNDEFINED, parse, 
    integrate, derivative,
    factor,
    rationalize, trig_simplify, exp_simplify, log_expand,
)

def integrate_expression(expr: str, variable: str) -> str:
    expr, var = parse(expr), parse(variable)
    return str(integrate(expr, var))

def differentiate_expression(expr: str, variable: str) -> str:
    expr, var = parse(expr), parse(variable)
    return str(derivative(expr, var))

def factor_expression(expr: str, variable: str) -> str:
    expr, var = parse(expr), parse(variable)
    factors = factor(expr, var)
    if factors is not None:
        return ", ".join(str(factor) for factor in factors)
    return "None"

def simplify_expression(expr: str, variable: str) -> str:
    expr = parse(expr)
    for op in (trig_simplify, exp_simplify, log_expand, rationalize):
        expr = op(expr)
    return str(expr)