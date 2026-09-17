"""FastAPI App - Assembles backend routes."""
from fastapi import FastAPI

from routes.integrate     import router as integrate_router
from routes.factor        import router as factor_router
from routes.simplify      import router as simplify_router
from routes.differentiate import router as differentiate_router

app = FastAPI(
    title="LevyCAS API",
    version="1.0.0",
)

app.include_router(integrate_router,     prefix="/integrate")
app.include_router(factor_router,        prefix="/factor")
app.include_router(simplify_router,      prefix="/simplify")
app.include_router(differentiate_router, prefix="/differentiate")
