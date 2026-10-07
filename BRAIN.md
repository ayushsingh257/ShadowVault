# BRAIN.md — ShadowVault Architectural Memory & Cognitive State

> **ShadowVault**: AI-Powered Identity Threat Detection, Privilege Analysis & Attack Path Intelligence Platform  
> **Repository**: [https://github.com/ayushsingh257/ShadowVault](https://github.com/ayushsingh257/ShadowVault)  
> **Classification**: Enterprise ITDR • Zero Trust • Graph Security • Blast Radius Intelligence  
> **Last Synchronized**: Phase 2 Completion (FastAPI Backend + Tests Verified)

---

## 1. System Identity & Mission

ShadowVault is an enterprise-grade Identity Threat Detection and Response (ITDR) and privilege analysis platform. Unlike generic vulnerability scanners or network monitoring tools, ShadowVault specializes exclusively in:

$$\text{Identity Security} + \text{ITDR} + \text{Zero Trust} + \text{Privilege Analysis} + \text{Graph Security}$$

Its defining core capability is an **Identity Attack Path Graph** that models direct and transitive privilege relationships, calculates blast radius, flags toxic permission combinations, simulates safe remediations, and explains security implications through grounded AI.

```
       [USER]
         │ (MEMBER_OF)
         ▼
      [GROUP]
         │ (INHERITS / ASSIGNED_TO)
         ▼
       [ROLE]
         │ (HAS_PERMISSION)
         ▼
    [PERMISSION]
         │ (CAN_ACCESS)
         ▼
[PRODUCTION RESOURCE]
```

---

## 2. Directory Layout & Synchronization Paradigm

To maintain synchronization and clean separation of concerns, the project contains **only two primary runtime directories** (`backend/` and `frontend/`) alongside markdown governance files:

```
ShadowVault/
├── backend/               # Complete backend engine (FastAPI, graph, collectors, workers, ai)
│   ├── app/
│   │   ├── api/v1/        # REST API endpoints (health, auth, identities, graph, etc.)
│   │   ├── core/          # Config, logging, security, celery
│   │   ├── schemas/       # Pydantic v2 validation contracts
│   │   ├── models/        # SQLAlchemy relational entities (Phase 4, 9)
│   │   ├── graph/         # Neo4j Cypher drivers and graph traversals (Phase 17, 20)
│   │   ├── detectors/     # ITDR detection engines (Phases 21-28, 32-34)
│   │   ├── risk/          # Explainable 0-100 Risk Engine (Phase 29)
│   │   ├── ai/            # Grounded RAG & LLM provider abstraction (Phases 36-39)
│   │   └── collectors/    # Identity ingestors (AWS, Entra, K8s, Synthetic) (Phases 42-46)
│   ├── infrastructure/    # Neo4j Cypher constraints & Nginx reverse proxy configs
│   ├── tests/             # Backend pytest suite (8 tests passing)
│   ├── Dockerfile         # Secure non-root container
│   └── pyproject.toml     # Python dependencies & packaging
├── frontend/              # Next.js 14 SOC dashboard (App Router, Tailwind CSS, shadcn/ui, React Flow)
│   ├── src/               # UI components, state stores, graph canvas, dashboard
│   ├── public/            # Static assets
│   ├── package.json       # Node dependencies
│   └── Dockerfile         # Frontend container
├── docker-compose.yml     # Multi-container orchestration (Postgres, Neo4j, Redis, API, Worker, UI)
├── .env.example           # Secure configuration defaults
├── .gitignore             # Comprehensive VCS exclusion rules
├── README.md              # Executive overview, architecture & quickstart
├── ROADMAP.md             # 60-phase execution tracker
├── BRAIN.md               # Continuous architectural memory & cognitive state (this document)
└── SECURITY.md            # Security policy, safe simulation & disclosure guidelines
```

---

## 3. Cognitive State & Phase Progress Matrix

| Phase Range | Scope | Status | Notes / Decisions |
|---|---|---|---|
| **Phase 1** | Repository Foundation & Architecture Blueprint | **COMPLETED** | Root layout, clean 2-folder structure (`backend/`, `frontend/`), configs, docker-compose, initial cypher schema. |
| **Phase 2** | FastAPI Backend Skeleton & Application Factory | **COMPLETED** | Pydantic v2 settings, structured logging, JWT auth & password hashing, security headers middleware, unit tests passing. |
| **Phase 3** | Next.js Frontend Workspace Setup | **COMPLETED** | Next.js 14 App Router, dark SOC cybersecurity design system, sidebar, header, dashboard, attack paths, findings, timeline, remediation, AI views. |
| **Phases 4–8** | Storage & Infrastructure (Postgres, Redis, Docker, Logging, CI) | **QUEUED** | Asyncpg SQLAlchemy 2.0, Celery broker, container checks, GitHub actions. |
| **Phases 9–16** | Core Identity Relational Models & RBAC | **QUEUED** | User, Group, Role, Permission, Resource, Application, ServiceAccount, Session, Credential. |
| **Phases 17–20** | Neo4j Graph Engine & Attack Path Traversal | **QUEUED** | Transitive paths, shortest-path Cypher traversals, React Flow canvas integration. |
| **Phases 21–28** | Identity Threat Detectors (ITDR) | **QUEUED** | Excessive privilege, dormant/orphaned accounts, toxic combos, privilege escalation. |
| **Phases 29–30** | Explainable Risk Engine & SOC Dashboard | **QUEUED** | 0-100 deterministic scoring with factor weights and executive metrics. |
| **Phases 31–35** | Real-time Ingestion & Identity Event Timeline | **QUEUED** | Authentication anomalies, impossible travel, privilege drift. |
| **Phases 36–40** | Grounded AI Security Analyst & Safe Remediation | **QUEUED** | Zero-hallucination RAG, MITRE ATT&CK mapping, safe simulation approvals. |
| **Phases 41–46** | Audit Ledger & Multi-Provider Connectors | **QUEUED** | Immutable audit logs, AWS, Entra, K8s, GitHub, and realistic synthetic demo sets. |
| **Phases 47–60** | Hardening, Testing, Documentation & v1 Release | **QUEUED** | STRIDE threat model, E2E tests, PROJECT_COMPLETION_REPORT.md. |

---

## 4. Graph Engine & Data Models (Neo4j + PostgreSQL)

### Primary Entities & Node Labels
- `(:User)`: Human identity (attributes: `id`, `email`, `name`, `is_active`, `mfa_enabled`, `department`, `last_login`).
- `(:Group)`: Identity grouping (attributes: `id`, `name`, `type`, `is_nested`).
- `(:Role)`: Privilege container (attributes: `id`, `name`, `is_privileged`, `cloud_provider`).
- `(:Permission)`: Granular action capability (attributes: `id`, `action`, `resource_pattern`, `risk_weight`).
- `(:Resource)`: Protected enterprise asset (attributes: `id`, `arn`, `name`, `tier`, `is_sensitive`, `data_classification`).
- `(:ServiceAccount)`: Non-human identity (attributes: `id`, `name`, `owner`, `interactive_login_allowed`).
- `(:Application)`: OAuth/SaaS client (attributes: `id`, `client_id`, `verified_publisher`).
- `(:Credential)` / `(:APIKey)`: Auth secret (attributes: `id`, `age_days`, `last_used_at`, `is_exposed`).
- `(:Session)`: Active authentication state (attributes: `id`, `ip_address`, `geo_country`, `created_at`).

### Relationship Types & Semantics
- `(User)-[:MEMBER_OF]->(Group)`
- `(Group)-[:MEMBER_OF]->(Group)` *(Nested group inheritance)*
- `(User)-[:HAS_ROLE]->(Role)` *(Direct assignment)*
- `(Group)-[:HAS_ROLE]->(Role)` *(Inherited assignment)*
- `(Role)-[:INHERITS]->(Role)` *(Role hierarchy)*
- `(Role)-[:HAS_PERMISSION]->(Permission)`
- `(Permission)-[:CAN_ACCESS]->(Resource)`
- `(User)-[:CAN_ACCESS]->(Resource)` *(Direct resource entitlement)*
- `(ServiceAccount)-[:CAN_ACCESS]->(Resource)`
- `(Application)-[:HAS_PERMISSION]->(Permission)`
- `(User)-[:AUTHENTICATES_TO]->(Session)`
- `(User)-[:OWNS]->(APIKey)`

---

## 5. Explainable Risk Scoring Engine Formulation

The overall Risk Score $R(i) \in [0, 100]$ for any identity $i$ is calculated deterministically:

$$R(i) = \min\left(100, \sum_{k} W_k \cdot F_k(i)\right)$$

### Risk Factor Weights ($W_k$):
1. **Administrative Privilege Tier ($W = 25$):** Role permissions (`AdministratorAccess`, `Owner`, `Global Administrator`).
2. **Attack Path to Sensitive/Tier 0 Resource ($W = 25$):** Shortest transitive hop to production databases or secrets managers.
3. **MFA Absence ($W = 15$):** Unprotected identity interactive login.
4. **Credential Age & Exposure ($W = 15$):** Password or API key $> 90$ days unrotated, or flagged in exposure telemetry.
5. **Dormancy / Stale Activity ($W = 10$):** Identity inactive for $> 60$ days with active privileges.
6. **Toxic Combinations / SoD Violations ($W = 10$):** Concurrent capabilities for key creation + transaction execution.

### Severity Bands:
- `0 - 20`: **LOW** (Standard unprivileged identity with enforced MFA)
- `21 - 40`: **MODERATE** (Internal standard employee with bounded permissions)
- `41 - 60`: **ELEVATED** (Developer or operator with non-sensitive cloud access)
- `61 - 80`: **HIGH** (Elevated access with stale credentials or nested role inheritance)
- `81 - 100`: **CRITICAL** (Direct attack path to Tier-0 production resource without MFA or dormant admin)

---

## 6. Grounded AI Threat Intelligence Contract

The AI layer in ShadowVault is engineered as an **Explainable Security Copilot**, not an unconstrained text generator.

### Invariant Rules:
1. **Strict Context Grounding:** The AI only formulates answers based on retrieved facts from PostgreSQL and Neo4j Cypher queries.
2. **Zero Hallucination Guarantee:** The AI will never invent usernames, IP addresses, CVEs, or attack paths.
3. **MITRE ATT&CK Mapping:** All attack paths and privilege escalations are mapped to standard ATT&CK identity techniques (e.g., *T1078 Valid Accounts*, *T1098 Account Manipulation*, *T1068 Privilege Escalation*).
4. **Safe Remediation Proposal:** Explanations must conclude with non-destructive remediation proposals suitable for simulation.

---

## 7. Frontend Architecture Directives

- **Design System:** Sleek, high-density dark cybersecurity operations (SOC) aesthetic.
- **Palette:** Zinc/Slate 900-950 background, Emerald-400 (Low), Sky-400 (Moderate), Amber-400 (Elevated), Orange-500 (High), Rose-500 (Critical).
- **Core Views:**
  1. `/dashboard`: Executive risk KPIs, identity distribution, blast radius index.
  2. `/identities`: Searchable identity catalog with risk filtering.
  3. `/identities/[id]`: Deep-dive identity profile featuring "What Can This Identity Reach?"
  4. `/attack-paths`: Interactive React Flow graph canvas displaying lateral movement and transitive privilege paths.
  5. `/findings`: Triage list of excessive privileges, dormant accounts, and toxic combinations.
  6. `/timeline`: Identity event timeline (logins, role changes, privilege elevation).
  7. `/remediation`: Simulation control center with dual-authorization approval workflow.
  8. `/ai`: Grounded conversational threat copilot.
