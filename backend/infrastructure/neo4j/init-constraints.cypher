// Neo4j Identity Schema - Uniqueness Constraints & Core Indexes
// Ensures optimal Cypher lookups and data integrity across all identity nodes

// Node Constraints
CREATE CONSTRAINT user_id_unique IF NOT EXISTS FOR (u:User) REQUIRE u.id IS UNIQUE;
CREATE CONSTRAINT user_email_unique IF NOT EXISTS FOR (u:User) REQUIRE u.email IS UNIQUE;

CREATE CONSTRAINT group_id_unique IF NOT EXISTS FOR (g:Group) REQUIRE g.id IS UNIQUE;
CREATE CONSTRAINT group_name_unique IF NOT EXISTS FOR (g:Group) REQUIRE g.name IS UNIQUE;

CREATE CONSTRAINT role_id_unique IF NOT EXISTS FOR (r:Role) REQUIRE r.id IS UNIQUE;
CREATE CONSTRAINT role_name_unique IF NOT EXISTS FOR (r:Role) REQUIRE r.name IS UNIQUE;

CREATE CONSTRAINT permission_id_unique IF NOT EXISTS FOR (p:Permission) REQUIRE p.id IS UNIQUE;

CREATE CONSTRAINT resource_id_unique IF NOT EXISTS FOR (res:Resource) REQUIRE res.id IS UNIQUE;
CREATE CONSTRAINT resource_arn_unique IF NOT EXISTS FOR (res:Resource) REQUIRE res.arn IS UNIQUE;

CREATE CONSTRAINT service_account_id_unique IF NOT EXISTS FOR (sa:ServiceAccount) REQUIRE sa.id IS UNIQUE;
CREATE CONSTRAINT app_id_unique IF NOT EXISTS FOR (app:Application) REQUIRE app.id IS UNIQUE;
CREATE CONSTRAINT apikey_id_unique IF NOT EXISTS FOR (k:APIKey) REQUIRE k.id IS UNIQUE;

// Performance Indexes for Attack-Path Search & Sensitivity Lookups
CREATE INDEX resource_tier_idx IF NOT EXISTS FOR (res:Resource) ON (res.tier);
CREATE INDEX resource_sensitivity_idx IF NOT EXISTS FOR (res:Resource) ON (res.is_sensitive);
CREATE INDEX user_status_idx IF NOT EXISTS FOR (u:User) ON (u.is_active);
CREATE INDEX role_privileged_idx IF NOT EXISTS FOR (r:Role) ON (r.is_privileged);
