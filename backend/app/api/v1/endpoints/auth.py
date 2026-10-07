from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from app.core.config import settings
from app.core.security import create_access_token, verify_password
from app.schemas.auth import LoginRequest, Token, TokenPayload, UserSessionProfile

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/auth/login")


async def get_current_user_token(token: str = Depends(oauth2_scheme)) -> TokenPayload:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        sub: str = payload.get("sub")
        roles: list = payload.get("roles", [])
        if sub is None:
            raise credentials_exception
        return TokenPayload(sub=sub, roles=roles, exp=payload.get("exp"))
    except JWTError:
        raise credentials_exception


@router.post(
    "/login",
    response_model=Token,
    summary="Authenticate User & Issue Access Token",
)
async def login_for_access_token(credentials: LoginRequest) -> Token:
    # Superadmin bootstrap check or database credential verification
    is_superadmin = (
        credentials.email.lower() == settings.INITIAL_SUPERADMIN_EMAIL.lower()
        and credentials.password == settings.INITIAL_SUPERADMIN_PASSWORD
    )

    if not is_superadmin:
        # In later phase this queries DB for user entity
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    roles = ["SUPER_ADMIN", "SECURITY_ANALYST"]
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        subject=credentials.email,
        expires_delta=access_token_expires,
        roles=roles,
    )

    return Token(
        access_token=access_token,
        token_type="bearer",
        expires_in=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        roles=roles,
    )


@router.get(
    "/me",
    response_model=UserSessionProfile,
    summary="Get Active User Session Profile",
)
async def read_users_me(
    current_token: TokenPayload = Depends(get_current_user_token),
) -> UserSessionProfile:
    return UserSessionProfile(
        id="usr_bootstrap_admin",
        email=current_token.sub or "admin@shadowvault.io",
        name="Security Administrator",
        roles=current_token.roles,
        is_active=True,
    )
