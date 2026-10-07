from typing import Dict, Optional
from pydantic import BaseModel, Field


class ComponentStatus(BaseModel):
    status: str = Field(..., description="Component state: 'healthy', 'degraded', or 'unreachable'")
    latency_ms: Optional[float] = Field(None, description="Response latency in milliseconds")
    details: Optional[str] = Field(None, description="Optional diagnostic details")


class HealthCheckResponse(BaseModel):
    status: str = Field(..., json_schema_extra={"example": "healthy"})
    version: str = Field(..., json_schema_extra={"example": "1.0.0"})
    environment: str = Field(..., json_schema_extra={"example": "development"})
    timestamp: str
    components: Dict[str, ComponentStatus] = Field(default_factory=dict)
