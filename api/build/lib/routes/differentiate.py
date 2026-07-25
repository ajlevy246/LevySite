from fastapi import APIRouter
from models import ExpressionRequest, CASResponse
from cas import differentiate_expression

router = APIRouter()

@router.post("/")
async def differentiate_route(req: ExpressionRequest):
    try:
        result = differentiate_expression(
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