from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int
    roles: List[str]


class TokenPayload(BaseModel):
    sub: Optional[str] = None
    roles: List[str] = []
    exp: Optional[int] = None


class LoginRequest(BaseModel):
    email: EmailStr = Field(..., json_schema_extra={"example": "admin@shadowvault.io"})
    password: str = Field(..., min_length=8, json_schema_extra={"example": "ShadowVault#SecOps2026!"})


class UserSessionProfile(BaseModel):
    id: str
    email: str
    name: str
    roles: List[str]
    is_active: bool
