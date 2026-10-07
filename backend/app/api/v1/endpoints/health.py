from datetime import datetime, timezone
import time
from fastapi import APIRouter, status
from app.core.config import settings
from app.schemas.health import ComponentStatus, HealthCheckResponse

router = APIRouter()


@router.get(
    "/health",
    response_model=HealthCheckResponse,
    status_code=status.HTTP_200_OK,
    summary="System Health & Readiness Probe",
    description="Returns high-level system availability, component status, and runtime environment.",
)
async def get_system_health() -> HealthCheckResponse:
    start_time = time.perf_counter()

    components = {
        "api": ComponentStatus(
            status="healthy",
            latency_ms=round((time.perf_counter() - start_time) * 1000, 2),
            details="ShadowVault REST API operational",
        ),
    }

    return HealthCheckResponse(
        status="healthy",
        version=settings.APP_VERSION,
        environment=settings.ENVIRONMENT,
        timestamp=datetime.now(timezone.utc).isoformat(),
        components=components,
    )
