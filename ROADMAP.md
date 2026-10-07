# ShadowVault — Engineering Roadmap & Phase Tracker

## Project Overview
**ShadowVault** is an enterprise-grade AI-Powered Identity Threat Detection, Privilege Analysis & Attack Path Intelligence Platform (ITDR + Zero Trust + Graph Security).

---

## Phase Execution Checklist (60 Phases)

| Phase | Description | Status | Dependencies | Notes / Deliverables |
|---|---|---|---|---|
| ✅ **Phase 1** | Repository foundation & architecture blueprint | [x] Completed | None | Directory structure, .env.example, .gitignore, ROADMAP.md, README.md, SECURITY.md, docker-compose.yml, infrastructure configs |
| ✅ **Phase 2** | FastAPI backend skeleton & application factory | [x] Completed | Phase 1 | Pydantic v2 settings, structlog/logging, health checks, auth endpoints, security headers middleware, verified pytest suite |
| ✅ **Phase 3** | Next.js frontend workspace setup | [x] Completed | Phase 1 | Next.js 14 App Router, Tailwind CSS dark SOC theme, sidebar, header, dashboard, attack paths, findings, timeline, remediation, AI views |
| **Phase 4** | PostgreSQL & async SQLAlchemy / Alembic setup | [ ] Pending | Phase 2 | Async engine, session management, migration harness |
| **Phase 5** | Redis cache & Celery task worker infrastructure | [ ] Pending | Phase 2 | Celery app, broker connection, background queue configuration |
| **Phase 6** | Docker & multi-container Docker Compose setup | [ ] Pending | Phases 2-5 | Containerized Postgres, Neo4j, Redis, Backend, Frontend |
| **Phase 7** | Structured logging, security middleware & config | [ ] Pending | Phase 2 | Request ID tracing, security headers (CSP, HSTS), rate limiting scaffolding |
| **Phase 8** | CI workflow & code quality automation | [ ] Pending | Phase 1-7 | GitHub Actions lint, test, format, security vulnerability scanning |
| **Phase 9** | Core identity relational models | [ ] Pending | Phase 4 | User, Group, Role, Permission, Resource, Application, ServiceAccount, Session, Credential |
| **Phase 10** | Enterprise RBAC & API Authorization engine | [ ] Pending | Phase 9 | SUPER_ADMIN, SECURITY_ANALYST, AUDITOR, VIEWER roles and decorators |
| **Phase 11** | User identity management API & services | [ ] Pending | Phase 9, 10 | User CRUD, status filtering, metadata, auth states |
| **Phase 12** | Group & nested group management | [ ] Pending | Phase 9, 10 | Group hierarchies, membership tracking |
| **Phase 13** | Role management & assignment engine | [ ] Pending | Phase 9, 10 | Role definitions, direct vs inherited assignments |
| **Phase 14** | Permission catalog & privilege mapping | [ ] Pending | Phase 9, 10 | Fine-grained permissions, action/resource mapping |
| **Phase 15** | Resource registry & classification (sensitive/critical) | [ ] Pending | Phase 9, 10 | Production resources, tiering (Tier 0, Tier 1, etc.) |
| **Phase 16** | Identity relationship mapping service | [ ] Pending | Phase 11-15 | User->Group, Group->Role, Role->Permission, etc. |
| **Phase 17** | Neo4j graph driver, schema & constraints | [ ] Pending | Phase 6 | Neo4j async client, constraints, node labels, relationship types |
| **Phase 18** | Relational-to-Graph sync & reconciliation pipeline | [ ] Pending | Phase 16, 17 | Sync engine mapping SQL entities to Cypher graph nodes & edges |
| **Phase 19** | Graph visualization API & React Flow canvas | [ ] Pending | Phase 3, 18 | Interactive canvas, node inspector, path highlighting, dark SOC styling |
| **Phase 20** | Identity Attack-Path Discovery engine | [ ] Pending | Phase 18 | Shortest path, sensitive target reachability, Cypher path traversals |
| **Phase 21** | Excessive privilege detector | [ ] Pending | Phase 16, 20 | Unused permissions vs granted permissions analysis |
| **Phase 22** | Dormant account detector | [ ] Pending | Phase 11 | Inactivity window analysis, stale interactive logins |
| **Phase 23** | Orphaned account detector | [ ] Pending | Phase 11, 12 | Accounts without managers, owners, or department references |
| **Phase 24** | Credential & stale password analysis | [ ] Pending | Phase 9 | Age, rotation cadence, weak hashing flag, MFA absence |
| **Phase 25** | API key exposure & excessive scope detector | [ ] Pending | Phase 9 | Stale keys, unconstrained API scopes, high blast radius |
| **Phase 26** | Risky service account analyzer | [ ] Pending | Phase 9, 20 | Non-human accounts with admin roles or interactive login |
| **Phase 27** | Privilege escalation detection (direct & indirect) | [ ] Pending | Phase 20 | Self-assignable roles, group modification vectors |
| **Phase 28** | Toxic permission & dangerous combinations detector | [ ] Pending | Phase 14 | Separation-of-duties violations (e.g. create + approve prod keys) |
| **Phase 29** | Explainable Risk Scoring Engine | [ ] Pending | Phase 20-28 | 0-100 deterministic scoring with transparent factor breakdown |
| **Phase 30** | Executive Security & Risk Dashboard | [ ] Pending | Phase 3, 29 | High-density SOC dashboard, KPIs, distribution charts |
| **Phase 31** | Identity event ingestion pipeline | [ ] Pending | Phase 4, 5 | Real-time event receiver (logins, privilege changes, role bindings) |
| **Phase 32** | Authentication anomaly detection | [ ] Pending | Phase 31 | Brute force, off-hours access, abnormal user agents |
| **Phase 33** | Impossible-travel detection engine | [ ] Pending | Phase 31 | Geo-velocity calculations between consecutive authentication events |
| **Phase 34** | Privilege change & drift detector | [ ] Pending | Phase 31 | Sudden elevation alerts, out-of-band role additions |
| **Phase 35** | Identity timeline investigation interface | [ ] Pending | Phase 3, 31 | Interactive filterable security timeline with event drilldown |
| **Phase 36** | Grounded AI retrieval layer (RAG) | [ ] Pending | Phase 20, 29 | Context retriever for graph paths, findings, entities |
| **Phase 37** | AI Security Analyst conversational copilot | [ ] Pending | Phase 36 | Grounded Q&A strictly constrained to verified ShadowVault telemetry |
| **Phase 38** | AI Attack-Path Explainer | [ ] Pending | Phase 20, 36 | Plain-language attack step breakdown with MITRE ATT&CK mapping |
| **Phase 39** | AI Remediation Recommender | [ ] Pending | Phase 29, 36 | Context-aware, least-privilege remediation proposals |
| **Phase 40** | Remediation simulation & approval workflow | [ ] Pending | Phase 39 | Safe simulation mode, impact assessment, blast radius reduction |
| **Phase 41** | Immutable security audit logging system | [ ] Pending | Phase 4, 10 | Tamper-evident audit trail for all admin and remediation actions |
| **Phase 42** | AWS IAM collector provider architecture | [ ] Pending | Phase 16 | Extensible connector interface + AWS IAM parser contract |
| **Phase 43** | GitHub organization & token collector provider | [ ] Pending | Phase 16 | GitHub org permissions, teams, PAT and repo access parser |
| **Phase 44** | Kubernetes RBAC connector architecture | [ ] Pending | Phase 16 | Roles, ClusterRoles, RoleBindings, ServiceAccounts parser |
| **Phase 45** | Microsoft Entra ID connector architecture | [ ] Pending | Phase 16 | Entra ID tenant users, directory roles, app registrations |
| **Phase 46** | Active Directory dataset & parser support | [ ] Pending | Phase 16 | AD LDAP schema, BloodHound-compatible graph ingestion |
| **Phase 47** | Threat model documentation & STRIDE analysis | [ ] Pending | All previous | Documented attack vectors, trust boundaries, mitigations |
| **Phase 48** | Security hardening & defensive controls | [ ] Pending | Phase 47 | Content Security Policy, strict cookie configs, brute force throttling |
| **Phase 49** | Database indexing & graph query optimization | [ ] Pending | Phase 18, 20 | Cypher index optimization, query execution plan tuning |
| **Phase 50** | Integration testing suite | [ ] Pending | All modules | End-to-end API and engine verification tests |
| **Phase 51** | Playwright frontend E2E testing | [ ] Pending | Phase 3, 19, 30 | Automated browser testing of core investigation journeys |
| **Phase 52** | Production CI/CD pipelines & release manifests | [ ] Pending | Phase 50, 51 | Build pipelines, docker vulnerability scans (Trivy) |
| **Phase 53** | Production Docker & Nginx orchestration | [ ] Pending | Phase 6, 52 | Production compose, reverse proxy, SSL termination ready |
| **Phase 54** | Observability, health telemetry & Prometheus metrics | [ ] Pending | Phase 2 | Metrics endpoints, structured traces, operational health |
| **Phase 55** | Complete technical & API documentation suite | [ ] Pending | All | Architecture guides, API reference, developer onboarding |
| **Phase 56** | Realistic synthetic enterprise demo dataset | [ ] Pending | Phase 18 | Multi-tier enterprise dataset with embedded privilege flaws |
| **Phase 57** | Security validation test dataset | [ ] Pending | Phase 20-28 | Adversarial benchmark datasets for detector validation |
| **Phase 58** | Final UI polish & SOC user experience refinement | [ ] Pending | Phase 19, 30, 35 | Micro-animations, responsive layout, keyboard shortcuts |
| **Phase 59** | Release candidate verification & audit | [ ] Pending | All previous | Full validation checklist, regression testing |
| **Phase 60** | Production-quality v1 release & completion report | [ ] Pending | Phase 59 | PROJECT_COMPLETION_REPORT.md and production handoff |
