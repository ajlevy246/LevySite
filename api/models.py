"""Pydantic response models for each route."""
from pydantic import BaseModel

class ExpressionRequest(BaseModel):
    expression: str
    variable:   str = "x"

class CASResponse(BaseModel):
    success: bool
    result:  str | None = None
    error:   str | None = None