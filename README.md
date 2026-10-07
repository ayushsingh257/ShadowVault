# ShadowVault

> **AI-Powered Identity Threat Detection, Privilege Analysis & Attack Path Intelligence Platform**  
> *Identity Security • ITDR • Zero Trust Architecture • Graph Security • Blast Radius Intelligence*

---

## 🛡️ Executive Summary

**ShadowVault** is a production-quality Identity Threat Detection and Response (ITDR) and privilege analysis platform. Modern enterprise breaches almost exclusively exploit compromised identities, excessive privileges, toxic permission combinations, and hidden lateral movement attack paths.

ShadowVault continuously models and evaluates identity relationships across users, groups, roles, permissions, service accounts, and sensitive resources. Its defining capability is an **Identity Attack Path Graph** powered by Neo4j and a deterministic **Privilege Analysis Engine**, complemented by a strictly grounded **AI Security Analyst**.

```mermaid
flowchart TD
    subgraph Ingestion ["1. Identity Ingestion & Connectors"]
        A[AWS IAM / Entra ID / K8s / Synthetic] --> B[Collector Pipeline]
    end

    subgraph CoreEngine ["2. Relational & Graph Intelligence"]
        B --> C[(PostgreSQL Metadata)]
        B --> D[(Neo4j Identity Graph)]
        C <--> E[Sync & Reconciliation Engine]
        D <--> E
    end

    subgraph Analytics ["3. Threat Detection & Risk Scoring"]
        D --> F[Attack-Path Discovery]
        D --> G[Excessive Privilege Detector]
        D --> H[Toxic Combinations Detector]
        F & G & H --> I[Explainable Risk Engine (0-100)]
    end

    subgraph Defense ["4. Response & Intelligence"]
        I --> J[Grounded AI Security Analyst]
        I --> K[Safe Simulation Remediation]
        K --> L[(Immutable Audit Ledger)]
    end

    subgraph UI ["5. Enterprise SOC Experience"]
        I --> M[Next.js 14 SOC Dashboard]
        F --> N[Interactive Attack Graph Canvas]
        J --> O[AI Threat Copilot]
    end
```

---

## 🔑 Key Capabilities

1. **Identity Attack Path Graph**
   - Transitive permission traversal: `User -> Group -> Role -> Permission -> Production Resource`.
   - Shortest-path analysis, privilege inheritance chains, and sensitive resource reachability.
   - Blast radius calculation for any compromised credential or identity.

2. **ITDR & Threat Detection Engines**
   - **Excessive Privilege & Drift:** Discrepancy detection between granted and utilized rights.
   - **Dormant & Orphaned Identities:** Unmanaged service accounts, abandoned contractor accounts.
   - **Toxic Permission Combinations:** Separation-of-Duties (SoD) violations.
   - **Privilege Escalation:** Direct and indirect escalation vectors (e.g., self-assignable roles).
   - **Authentication Anomalies:** Impossible travel, off-hours access, credential age risks.

3. **Explainable Risk Scoring (0–100)**
   - Deterministic and auditable score formula:
     - `0-20`: Low
     - `21-40`: Moderate
     - `41-60`: Elevated
     - `61-80`: High
     - `81-100`: Critical
   - Complete breakdown of risk factors (attack path length, resource tier, MFA status, credential exposure).

4. **Grounded AI Security Analyst**
   - Strict RAG architecture: The AI answers queries grounded *strictly* in retrieved graph data and security findings.
   - **Zero Hallucination Policy:** Never invents users, credentials, or findings.
   - Attack path explanation with MITRE ATT&CK identity mappings and remediation recommendations.

5. **Safe Remediation Simulation**
   - Simulation mode before executing actions (disable account, revoke role, detach permission, rotate key).
   - Blast radius reduction delta preview before authorization.
   - Tamper-evident immutable audit log of all decisions.

---

## 🏛️ Architecture & Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, React Flow | High-density dark SOC interface, interactive graph canvas |
| **Backend** | FastAPI, Python 3.11+, Pydantic v2 | High-throughput asynchronous REST API & security services |
| **Graph Engine** | Neo4j 5 Enterprise/Community, Cypher | Identity graph, shortest paths, attack vector traversal |
| **Relational DB** | PostgreSQL 16, asyncpg, SQLAlchemy 2.0, Alembic | Entity registries, audit logs, findings metadata |
| **Cache & Queue**| Redis 7, Celery | Event ingestion queue, asynchronous graph computation |
| **AI Layer** | Sentence-Transformers, Local LLM (Ollama) / OpenAI provider abstraction | Semantic retrieval, contextual threat explanations |
| **Infrastructure** | Docker, Docker Compose, Nginx | Multi-service orchestration and containerized reproducibility |

---

## 📁 Repository Layout

```text
shadowvault/
├── backend/            # FastAPI backend application
│   ├── app/            # Core application modules (api, core, db, models, services)
│   ├── tests/          # Pytest backend test suite
│   └── pyproject.toml  # Python packaging & dependencies
├── frontend/           # Next.js 14 SOC dashboard & React Flow visualization
├── workers/            # Celery asynchronous workers & task consumers
├── graph/              # Neo4j Cypher queries, constraints & graph algorithms
├── ai/                 # RAG retrieval models, threat explanation prompts
├── collectors/         # IAM providers (AWS, Entra ID, GitHub, Synthetic demo)
├── infrastructure/     # Docker Compose, Nginx, Neo4j init scripts
├── docs/               # Architecture, Threat Model, API & Graph documentation
├── tests/              # E2E and multi-service integration tests
├── .env.example        # Environment variable template
├── .gitignore          # Git exclusion rules
├── ROADMAP.md          # 60-phase execution tracker
├── SECURITY.md         # Security policy & vulnerability reporting
└── docker-compose.yml  # Local multi-service infrastructure
```

---

## 🚀 Quickstart (Development)

### Prerequisites
- Python 3.11+
- Node.js 18+ & npm
- Docker & Docker Compose

### 1. Clone & Configure Environment
```bash
cp .env.example .env
```

### 2. Start Supporting Infrastructure (PostgreSQL, Neo4j, Redis)
```bash
docker compose up -d postgres neo4j redis
```

### 3. Start Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\Activate.ps1
pip install -e .
uvicorn app.main:app --reload --port 8000
```

### 4. Start Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Visit the platform at `http://localhost:3000` (API documentation at `http://localhost:8000/docs`).

---

## 📜 Development Guidelines & Security
See [SECURITY.md](SECURITY.md) for vulnerability disclosure and defensive controls.  
Track progress across all 60 milestones in [ROADMAP.md](ROADMAP.md).
