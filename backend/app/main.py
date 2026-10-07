from contextlib import asynccontextmanager
from typing import AsyncGenerator
from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from app.api.v1.api import api_router
from app.core.config import settings
from app.core.logging import logger, setup_logging


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Enforces enterprise security headers on all HTTP responses."""

    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Strict-Transport-Security"] = (
            "max-age=31536000; includeSubDomains; preload"
        )
        return response


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Manages application lifecycle events (startup and shutdown)."""
    setup_logging()
    logger.info(f"Starting {settings.APP_NAME} v{settings.APP_VERSION} [{settings.ENVIRONMENT}]")
    yield
    logger.info(f"Shutting down {settings.APP_NAME}")


def create_application() -> FastAPI:
    """FastAPI Application Factory."""
    app = FastAPI(
        title=f"{settings.APP_NAME} — ITDR & Attack Path Intelligence",
        description=(
            "Enterprise Identity Threat Detection, Privilege Analysis & Attack Path Graph API. "
            "Exposes deterministic privilege evaluation, transitive reachability discovery, "
            "and grounded AI threat analysis."
        ),
        version=settings.APP_VERSION,
        openapi_url=f"{settings.API_V1_STR}/openapi.json",
        docs_url="/docs",
        redoc_url="/redoc",
        lifespan=lifespan,
    )

    # Security Headers Middleware
    app.add_middleware(SecurityHeadersMiddleware)

    # CORS Middleware
    if settings.BACKEND_CORS_ORIGINS:
        app.add_middleware(
            CORSMiddleware,
            allow_origins=settings.BACKEND_CORS_ORIGINS,
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

    # Global Exception Handler
    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):
        logger.error(f"Unhandled error on {request.method} {request.url.path}: {exc}", exc_info=True)
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={
                "error": "InternalServerError",
                "message": "An unexpected security system error occurred.",
                "path": request.url.path,
            },
        )

    # API Routers
    app.include_router(api_router, prefix=settings.API_V1_STR)

    @app.get("/health", tags=["Health"], include_in_schema=False)
    async def root_health():
        return {"status": "healthy", "service": settings.APP_NAME, "version": settings.APP_VERSION}

    return app


app = create_application()
