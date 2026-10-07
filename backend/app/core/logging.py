import logging
import sys
from app.core.config import settings


def setup_logging() -> None:
    """Configures structured logging for ShadowVault backend services."""
    log_level = logging.DEBUG if settings.DEBUG else logging.INFO

    logging.basicConfig(
        level=log_level,
        format="%(asctime)s [%(levelname)s] [%(name)s:%(lineno)d] - %(message)s",
        handlers=[
            logging.StreamHandler(sys.stdout),
        ],
    )

    # Suppress verbose third-party logging
    logging.getLogger("uvicorn.access").setLevel(logging.INFO)
    logging.getLogger("asyncio").setLevel(logging.WARNING)


logger = logging.getLogger("shadowvault")
