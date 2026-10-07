from app.core.config import Settings


def test_config_defaults():
    config = Settings()
    assert config.APP_NAME == "ShadowVault"
    assert config.ALGORITHM == "HS256"
    assert config.ACCESS_TOKEN_EXPIRE_MINUTES > 0
    assert len(config.BACKEND_CORS_ORIGINS) > 0


def test_cors_origins_parsing():
    config = Settings(BACKEND_CORS_ORIGINS="http://test.com, https://app.example.com")
    assert "http://test.com" in config.BACKEND_CORS_ORIGINS
    assert "https://app.example.com" in config.BACKEND_CORS_ORIGINS
