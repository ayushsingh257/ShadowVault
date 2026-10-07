from typing import List, Union
from pydantic import AnyHttpUrl, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    # General
    ENVIRONMENT: str = "development"
    DEBUG: bool = False
    APP_NAME: str = "ShadowVault"
    APP_VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"

    # Security & Auth
    SECRET_KEY: str = "development-secret-key-replace-in-production-must-be-32-chars-long"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # Bootstrap Superadmin
    INITIAL_SUPERADMIN_EMAIL: str = "admin@shadowvault.io"
    INITIAL_SUPERADMIN_PASSWORD: str = "ShadowVault#SecOps2026!"

    # CORS
    BACKEND_CORS_ORIGINS: Union[List[str], str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

    @field_validator("BACKEND_CORS_ORIGINS", mode="before")
    @classmethod
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> List[str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",") if i.strip()]
        elif isinstance(v, list):
            return v
        return []

    # PostgreSQL
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_PORT: int = 5432
    POSTGRES_USER: str = "shadowvault_app"
    POSTGRES_PASSWORD: str = "shadowvault_secure_password_replace"
    POSTGRES_DB: str = "shadowvault"
    DATABASE_URL: str = (
        "postgresql+asyncpg://shadowvault_app:shadowvault_secure_password_replace@localhost:5432/shadowvault"
    )

    # Neo4j
    NEO4J_URI: str = "bolt://localhost:7687"
    NEO4J_USER: str = "neo4j"
    NEO4J_PASSWORD: str = "neo4j_graph_password_replace"

    # Redis & Celery
    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379
    REDIS_PASSWORD: str = ""
    CELERY_BROKER_URL: str = "redis://localhost:6379/0"
    CELERY_RESULT_BACKEND: str = "redis://localhost:6379/1"

    # AI Engine
    AI_PROVIDER: str = "local"
    AI_MODEL_NAME: str = "sentence-transformers/all-MiniLM-L6-v2"
    OLLAMA_BASE_URL: str = "http://localhost:11434"
    OPENAI_API_KEY: str = ""
    OPENAI_MODEL: str = "gpt-4o-mini"


settings = Settings()
