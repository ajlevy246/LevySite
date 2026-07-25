from fastapi import APIRouter
from models import ExpressionRequest, CASResponse
from cas import factor_expression

router = APIRouter()

@router.post("")
async def factor_route(req: ExpressionRequest):
    try:
        result = factor_expression(
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