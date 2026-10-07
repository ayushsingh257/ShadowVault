# Security Policy — ShadowVault

## 🛡️ Commitment to Security

ShadowVault is an enterprise Identity Threat Detection and Response (ITDR) platform. Security is foundational to every architectural decision, data flow, and code artifact.

---

## 🔒 Security Principles

1. **Least Privilege & Zero Trust**
   - No component or service account possesses unneeded administrative rights.
   - All API endpoints authenticate and authorize requests independently of network perimeter boundaries.

2. **No Hardcoded Secrets**
   - Zero tolerance for credentials, API tokens, passwords, or encryption keys in source control.
   - All sensitive material is loaded through environment variables or secure secret managers.
   - Automated git pre-commit hooks and scanning prevent accidental secret leaks.

3. **Safe Simulation Mode for Remediation**
   - ShadowVault defaults to non-destructive simulation modes.
   - Remediation actions (identity suspension, role revocation, session termination) require explicit dual-authorization and generate immutable audit events.

4. **Defense in Depth**
   - Strict Input Validation using Pydantic schemas.
   - Parameterized queries and ORM protections against SQL injection.
   - Cypher parameter binding against Cypher injection.
   - Cross-Site Scripting (XSS) and CSRF mitigation with secure HTTP response headers (CSP, HSTS, X-Content-Type-Options).
   - Role-Based Access Control (RBAC) enforced on the server layer.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability within ShadowVault, please do NOT file a public issue.

Please report vulnerabilities directly via:
- **Email:** `security@shadowvault.local` (or designated project security contact)
- **PGP Key:** Provided upon request for encrypted disclosure.

### What to include in your report:
- Type of issue (e.g., privilege escalation, authentication bypass, SQL/Cypher injection)
- Step-by-step reproduction instructions or proof-of-concept
- Affected versions / components
- Potential impact on tenant confidentiality, integrity, or availability

### Response Timeline
- **Initial Response:** Within 24 hours of receipt
- **Status Update:** Within 72 hours with triage determination
- **Remediation Target:** Critical vulnerabilities patched within 7 business days

---

## 📜 Audit Logging & Immutability
All sensitive operations within ShadowVault—including user logins, privilege evaluations, configuration modifications, and remediation executions—are written to an append-only, tamper-evident audit store.
Audit records cannot be updated or deleted through standard API workflows.
