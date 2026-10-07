import pytest
from httpx import AsyncClient
from app.core.config import settings


@pytest.mark.asyncio
async def test_successful_superadmin_login(async_client: AsyncClient):
    payload = {
        "email": settings.INITIAL_SUPERADMIN_EMAIL,
        "password": settings.INITIAL_SUPERADMIN_PASSWORD,
    }
    response = await async_client.post("/api/v1/auth/login", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"
    assert "SUPER_ADMIN" in data["roles"]

    # Verify /me endpoint with received token
    token = data["access_token"]
    me_response = await async_client.get(
        "/api/v1/auth/me",
        headers={"Authorization": f"Bearer {token}"},
    )
    assert me_response.status_code == 200
    me_data = me_response.json()
    assert me_data["email"] == settings.INITIAL_SUPERADMIN_EMAIL
    assert "SUPER_ADMIN" in me_data["roles"]


@pytest.mark.asyncio
async def test_failed_login_invalid_password(async_client: AsyncClient):
    payload = {
        "email": settings.INITIAL_SUPERADMIN_EMAIL,
        "password": "WrongPassword999!",
    }
    response = await async_client.post("/api/v1/auth/login", json=payload)
    assert response.status_code == 401
    data = response.json()
    assert data["detail"] == "Incorrect email or password"


@pytest.mark.asyncio
async def test_me_endpoint_requires_auth(async_client: AsyncClient):
    response = await async_client.get("/api/v1/auth/me")
    assert response.status_code == 401
