from fastapi import APIRouter
from models import ExpressionRequest, CASResponse
from cas import simplify_expression

router = APIRouter()

@router.post("/")
async def simplify_route(req: ExpressionRequest):
    try:
        result = simplify_expression(
            req.expression,
            req.variable
        )

        return CASResponse(
            success=True,
            result=result,
        )

    except Exception as e:
        return CASResponse(
            success=False,
            error=str(e)
        )