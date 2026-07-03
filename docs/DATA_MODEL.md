# Star Furniture Goa

# Data Model

Version: 1.0

Status: In Progress

Last Updated: July 2026

Owner:
Mohammed Ahmed

---

# Purpose

This document defines the complete data architecture of the Star Furniture Goa application.

It serves as the single source of truth for how business entities are represented throughout the system.

Unlike the Domain Model, which defines business concepts and relationships, this document specifies the data structure, conventions, and standards that every entity must follow.

This document intentionally avoids implementation details such as React components, APIs, database schemas, or UI layouts.

Its purpose is to establish a consistent, scalable, and future-proof data model before implementation begins.

---

# Related Documents

- quick_background.md
- ARCHITECTURE.md
- ROADMAP.md
- DOMAIN_MODEL.md

---

# Global Data Modeling Standards

DATA_MODEL.md
Global Data Modeling Standards
Version: 1.0
Status: Draft
Last Updated: July 2026
Purpose
This section defines the global data modeling standards for the Star Furniture Goa application.
Every future entity must follow these standards unless a specific exception is documented.
The goal is to keep the data model consistent, scalable, searchable, SEO-friendly, and ready for future integrations such as cloud storage, catalogue viewers, backend services, CMS platforms, analytics, and customer enquiry workflows.
These standards apply to all business entities, supporting entities, and future entities.
1. Entity Identifiers
Internal IDs
Every persisted entity must have an internal identifier.
Standard
Each entity should use an internal id.
Purpose
The internal ID uniquely identifies the record inside the system.
Reasoning
Business names, titles, slugs, and display labels can change over time. Internal IDs must remain stable even when public-facing content changes.
Long-Term Scalability
Stable internal IDs allow the project to support future backend systems, CMS migration, analytics, cloud storage mapping, and integrations without breaking relationships.
Consistency Benefits
Every entity can be referenced in the same predictable way across the application.
Public IDs
Entities that may be exposed publicly, shared, bookmarked, tracked, or referenced outside the system should also support a public identifier.
Standard
Use a separate publicId when an entity needs a stable public reference.
Purpose
A public ID allows the business to expose a safe, customer-facing identifier without exposing internal system details.
Reasoning
Internal IDs should remain system-owned. Public IDs can be used for shareable records, enquiry references, catalogue references, future customer-facing tracking, and external integrations.
Long-Term Scalability
Public IDs prevent future migration problems if internal storage changes.
Consistency Benefits
Public references remain clean and stable across customer-facing experiences.
UUID Strategy
Standard
Use UUIDs for internal identifiers when entities are expected to be stored, synced, migrated, or referenced across systems.
Purpose
UUIDs reduce the risk of ID collision and make records portable across environments.
Reasoning
The project may later involve backend services, CMS systems, cloud storage, catalogue hosting, enquiry tracking, or admin workflows. UUIDs are safer than sequential IDs for distributed systems.
Long-Term Scalability
UUIDs allow data to move between local data, backend storage, CMS entries, and future services with minimal restructuring.
Consistency Benefits
All entities follow a predictable ID format regardless of where the data is created.
Slug Strategy
Standard
Entities with public pages or customer-facing URLs should have a slug.
Slugs should be lowercase, readable, hyphen-separated, and based on stable customer-facing names.
Purpose
Slugs support SEO-friendly URLs and human-readable navigation.
Reasoning
Products, categories, collections, catalogues, and showroom pages may need public URLs. A readable slug improves discoverability and trust.
Long-Term Scalability
Slugs allow future product pages, category pages, catalogue pages, and collection pages to grow without changing routing strategy.
Consistency Benefits
All public entity URLs follow the same naming pattern.
2. Naming Conventions
Field Naming
Standard
Use camelCase for all field names.
Purpose
Field names should remain consistent and easy to read across the entire data model.
Reasoning
Mixed naming styles create confusion and increase the risk of mistakes during implementation, documentation, data migration, or integrations.
Long-Term Scalability
A single field naming standard simplifies future backend, CMS, analytics, and API mapping.
Consistency Benefits
Every entity can be understood without guessing naming style.
Boolean Naming
Standard
Boolean fields should begin with clear prefixes such as:
is
has
can
should
Purpose
Boolean fields should read naturally as true or false statements.
Reasoning
Names such as active or featured can be ambiguous. Names such as isActive and isFeatured are clearer.
Long-Term Scalability
Clear boolean naming reduces confusion as the number of entity states grows.
Consistency Benefits
All boolean fields become self-explanatory.
Array Naming
Standard
Array fields should use plural names.
Purpose
Plural names make it clear that the field contains multiple values.
Reasoning
A field named image suggests one item, while images clearly suggests many.
Long-Term Scalability
Plural naming supports future expansion when a single value becomes a list.
Consistency Benefits
Developers and content managers can quickly understand whether a field stores one item or many.
Object Naming
Standard
Object fields should use singular names that describe the object’s responsibility.
Purpose
Object names should communicate the grouped concept clearly.
Reasoning
Objects usually represent structured information such as contact details, SEO settings, address information, or metadata.
Long-Term Scalability
Well-named objects can grow with additional fields without becoming confusing.
Consistency Benefits
Structured data remains readable and predictable across entities.
3. Required Common Fields
Every primary entity should include a standard set of common fields.
Standard Common Fields
id
title or name
slug, when publicly addressable
description, when customer-facing explanation is needed
status
createdAt
updatedAt
Purpose
Common fields create a consistent foundation across all entities.
Reasoning
Most entities need identity, display value, lifecycle state, and audit history.
Long-Term Scalability
These fields support future CMS editing, admin dashboards, search indexing, SEO generation, and analytics.
Consistency Benefits
Every entity can be managed, sorted, filtered, audited, and displayed using the same baseline assumptions.
4. Audit Fields
Audit fields track when records were created, updated, published, archived, or removed.
Standard Audit Fields
createdAt
updatedAt
publishedAt, when public visibility matters
archivedAt, when an entity is retired but preserved
deletedAt, when soft deletion applies
Purpose
Audit fields create historical traceability.
Reasoning
Business content changes over time. Products may be updated, catalogues may be replaced, reviews may be hidden, and showroom details may change.
Long-Term Scalability
Audit fields support admin workflows, CMS history, moderation, rollback, analytics, and future compliance needs.
Consistency Benefits
All entities follow the same lifecycle tracking pattern.
5. Date Standards
Standard
All dates should be stored in ISO 8601 format.
Date fields should use clear names ending in At for timestamps and Date for calendar-only values.
Examples
createdAt
updatedAt
publishedAt
visitDate
preferredDate
Purpose
Date formats must remain predictable across entities and integrations.
Reasoning
Inconsistent date formats cause sorting, filtering, timezone, and migration problems.
Long-Term Scalability
ISO 8601 works reliably across backend systems, CMS tools, analytics platforms, and international environments.
Consistency Benefits
All dates can be compared, sorted, displayed, and transformed consistently.
6. Status Fields
Standard
Every entity with a lifecycle should include a status field.
Status values should be controlled and limited to predefined options.
Recommended Base Statuses
draft
active
published
archived
inactive
Purpose
Status fields define whether an entity is visible, usable, hidden, pending, or retired.
Reasoning
Deleting or editing content directly can damage business history. Status values provide safer control over visibility and lifecycle.
Long-Term Scalability
Status fields support CMS publishing, admin approval, content moderation, catalogue versioning, enquiry tracking, and future workflow systems.
Consistency Benefits
All entities follow a predictable lifecycle model.
7. Relationship Modeling
Relationships must be modeled deliberately to keep the data structure scalable and easy to maintain.
One-to-One Relationships
Standard
Use a direct reference when one entity owns or depends on exactly one related entity.
Purpose
One-to-one relationships represent tightly connected concepts.
Reasoning
This keeps closely related data simple without unnecessary duplication.
Long-Term Scalability
The relationship can later be separated if the owned concept becomes more complex.
Consistency Benefits
Clear ownership prevents confusion about where data belongs.
One-to-Many Relationships
Standard
Use a parent reference on the child entity when one parent owns many children.
Purpose
One-to-many relationships express ownership and hierarchy.
Reasoning
The child should clearly identify the parent it belongs to.
Long-Term Scalability
This supports future filtering, grouping, admin management, and content organization.
Consistency Benefits
Parent-child relationships remain easy to query and understand.
Many-to-Many Relationships
Standard
Use references rather than duplication when entities can belong to multiple other entities.
Purpose
Many-to-many relationships allow flexible business modeling.
Reasoning
Products may belong to multiple collections, catalogues may reference multiple categories, and customer intent may connect to several business objects.
Long-Term Scalability
Reference-based modeling prevents duplicated data and supports future expansion without restructuring.
Consistency Benefits
Entities remain clean, reusable, and connected without copying the same information into multiple places.
8. Media References
Standard
Media should be referenced as structured media objects or media IDs, not as loose file paths only.
Media references should support:
Images
PDF catalogues
Videos
360-degree views
Future virtual tours
Purpose
Media is a core business asset for Star Furniture Goa and must be modeled consistently.
Reasoning
A plain image URL is not enough for a premium furniture website. Media needs meaning, ordering, alternative text, captions, type, storage location, and future optimization metadata.
Long-Term Scalability
Structured media references support cloud storage, responsive images, catalogue viewers, accessibility, SEO, and future immersive content.
Consistency Benefits
All entities can use media in the same reliable format.
9. SEO Fields
Entities that may appear on public pages should support SEO metadata.
Standard SEO Fields
seoTitle
seoDescription
canonicalUrl, when needed
ogTitle, when needed
ogDescription, when needed
ogImage, when needed
Purpose
SEO fields control how public content appears in search engines and social sharing.
Reasoning
The business depends on discoverability for furniture categories, catalogues, showroom information, and product pages.
Long-Term Scalability
SEO fields allow future CMS-managed metadata, local SEO, category landing pages, and catalogue search visibility.
Consistency Benefits
All public entities can follow the same SEO structure.
10. Searchable Fields
Standard
Entities that need discovery should clearly identify which fields are searchable.
Searchable fields may include names, descriptions, tags, materials, finishes, categories, collections, room types, and catalogue references.
Purpose
Searchable fields define what customers can find through search and filters.
Reasoning
Search should be based on intentional business data, not accidental text scanning.
Long-Term Scalability
A clear searchable field strategy supports future search indexing, filters, recommendations, and AI-assisted discovery.
Consistency Benefits
Search behavior remains predictable across all entity types.
11. Metadata Fields
Standard
Use a metadata object for non-primary, flexible, or integration-specific information.
Purpose
Metadata allows entities to carry additional context without changing the core model too often.
Reasoning
Some information may be useful for analytics, migration, integrations, campaigns, or future CMS mapping, but may not deserve a permanent top-level field.
Long-Term Scalability
A metadata field gives the model controlled flexibility as business needs grow.
Consistency Benefits
Optional or integration-specific fields have one predictable place instead of being scattered across entities.
12. Soft Deletion Strategy
Standard
Entities with business history should use soft deletion instead of permanent deletion.
Soft-deleted records should use:
isDeleted
deletedAt
Purpose
Soft deletion preserves business history while removing records from active use.
Reasoning
Products, enquiries, reviews, catalogues, and showroom-related data may need to be hidden without being permanently lost.
Long-Term Scalability
Soft deletion supports admin recovery, audit trails, reporting, and future workflow systems.
Consistency Benefits
All removable entities follow the same deletion behavior.
13. Future Extensibility Guidelines
Keep Core Fields Stable
Purpose
Core fields should represent stable business meaning.
Reasoning
Fields that frequently change should not be placed at the same level as permanent identity fields.
Long-Term Scalability
Stable core fields reduce migration risk.
Consistency Benefits
Every entity remains easy to understand over time.
Prefer References Over Duplication
Purpose
Shared business concepts should be referenced, not copied repeatedly.
Reasoning
Duplicated data becomes difficult to update and can become inconsistent.
Long-Term Scalability
Reference-based modeling supports product expansion, catalogue growth, collections, recommendations, and future CMS integration.
Consistency Benefits
One business concept has one source of truth.
Design for Optional Growth
Purpose
The model should support future needs without becoming overly complex now.
Reasoning
The project will grow from a website into a catalogue and customer enquiry platform. The data model should allow that growth gradually.
Long-Term Scalability
Entities can later support backend storage, CMS editing, cloud media, customer accounts, quotations, appointments, and analytics.
Consistency Benefits
Future additions can follow existing patterns instead of introducing new ones.
Avoid Presentation-Specific Data in Business Entities
Purpose
Business entities should describe business meaning, not page layout.
Reasoning
Navigation, visual placement, animation, and component behavior belong outside the core business data model.
Long-Term Scalability
This keeps business data usable across websites, CMS tools, admin dashboards, catalogue viewers, and future applications.
Consistency Benefits
The data model remains clean and independent from presentation decisions.
Use Controlled Values Where Business Meaning Matters
Purpose
Fields such as status, media type, enquiry source, customer segment, material type, and visibility should use controlled values.
Reasoning
Free-form values create inconsistent filtering, reporting, and search behavior.
Long-Term Scalability
Controlled values support filters, analytics, admin workflows, and future backend validation.
Consistency Benefits
The same business meaning is represented the same way everywhere.

14. Versioning Strategy
Some business entities will evolve over time and must preserve historical meaning.
Examples include:
Products
Catalogues
Warranty Policies
Service Offerings
Purpose
Versioning allows important business entities to change without losing previous information.
This is especially important when product details, catalogue files, warranty promises, or service descriptions are updated after customers have already viewed or enquired about them.
Standard
Entities that may require historical tracking should support versioning.
Versioned entities should separate the stable business identity from the changing version content.
Recommended Fields
Versioned entities may include:
version
versionLabel
versionStatus
currentVersionId
previousVersionId
publishedAt
effectiveFrom
effectiveTo
changeSummary
Reasoning
Business content is not always static. A catalogue may be updated, a product description may change, a warranty policy may be revised, or a service offering may be renamed.
Without versioning, the system may lose the ability to understand what information was valid at the time of an enquiry, wishlist save, catalogue view, or customer decision.
Long-Term Scalability
Versioning supports:
Historical tracking
Rollbacks
CMS workflows
Content approvals
Catalogue revisions
Warranty policy changes
Future admin editing
Reliable enquiry context
Consistency Benefits
All versioned entities follow the same revision pattern.
This prevents each entity from inventing its own history model later.
15. Localization Strategy
The data model should support future multilingual content without changing the core model.
Potential languages include:
English
Hindi
Konkani
Future languages
Purpose
Localization allows customer-facing content to be translated while preserving the same business entities.
Standard
The core entity should remain language-independent.
Only customer-facing text should be localized.
Examples of localizable content include:
Names
Titles
Descriptions
SEO text
Captions
Catalogue summaries
Service descriptions
Warranty explanation text
Non-localized fields should remain shared across all languages.
Examples include:
IDs
Slugs, unless language-specific slugs are later required
Status
Relationships
Measurements
Media references
Audit fields
Translation Approach
Each entity that supports localization should allow translations grouped by locale.
Recommended locale naming should be consistent, such as:
en-IN
hi-IN
kok-IN
English should remain the default language unless the business decides otherwise.
Reasoning
Star Furniture Goa may serve customers who prefer English, Hindi, Konkani, or other languages. Designing for localization now avoids restructuring products, catalogues, categories, and SEO content later.
Long-Term Scalability
Localization supports:
Multilingual product pages
Multilingual catalogues
Local SEO
Region-specific marketing
Future CMS-managed translations
Better accessibility for local customers
Consistency Benefits
All multilingual content follows one structure.
This keeps translations separate from stable business data and prevents duplicated entities for different languages.
16. Reference Naming Convention
Relationship fields must clearly distinguish between full entity objects and references to other entities.
Purpose
Reference naming makes relationships readable, predictable, and ready for future backend or CMS integration.
Standard
Use the Id suffix for a single entity reference.
Examples:
categoryId
collectionId
catalogueId
mediaAssetId
productId
showroomId
Use the Ids suffix for arrays of entity references.
Examples:
categoryIds
collectionIds
productIds
catalogueIds
mediaAssetIds
Use the entity name without Id only when the field contains the full entity object.
Examples:
category
collection
catalogue
mediaAsset
Use plural entity names only when the field contains full entity objects.
Examples:
categories
collections
products
mediaAssets
Reasoning
A field named category should not sometimes mean a full category object and sometimes mean a category identifier.
Clear reference naming prevents ambiguity.
Long-Term Scalability
This convention supports:
Backend integration
CMS mapping
Data normalization
Search indexing
Relationship resolution
Future admin tools
Consistency Benefits
Every relationship field communicates its structure immediately.
Developers, content managers, and future systems can understand whether a field contains an object, a single reference, or many references.
17. Display Order Standards
Some data needs business-controlled ordering without being tied to a specific page layout.
Purpose
Display order fields support merchandising and content priority while keeping the data model independent from UI design.
Standard
Entities that may appear in curated lists should support ordering and visibility fields when needed.
Recommended fields include:
displayOrder
isFeatured
isVisible
Reasoning
The business may need to control which products appear first, which catalogues are highlighted, which collections are promoted, or which reviews are visible.
These are business merchandising decisions, not purely visual layout decisions.
Long-Term Scalability
Display order standards support:
Featured products
Featured collections
Catalogue ordering
Homepage highlights
Review visibility
CMS-managed merchandising
Seasonal campaigns
Manual business prioritization
Consistency Benefits
All ordered or featured content follows the same pattern.
This prevents each section from creating its own ordering logic later.
Future DATA_MODEL.md Sections
The following placeholders should be added after the Global Data Modeling Standards.
They should remain empty until the relevant modeling phase begins.
Modeling Principles
This section will define the high-level rules for designing individual entity models.
It will explain how to decide whether information belongs as a field, value object, relationship, metadata, or future extension.
Shared Value Objects
This section will define reusable structured concepts shared across multiple entities.
Examples may include contact details, address, SEO metadata, measurements, media references, social links, and audit information.
This section should prevent repeated field definitions across entity models.
Enumerations
This section will define controlled value lists used across the data model.
Examples may include status values, media types, enquiry channels, customer segments, room types, material types, and visibility states.
This section should keep business vocabulary consistent.
Entity Models
This section will define each individual business entity in detail.
Each entity model will follow the global standards defined earlier in DATA_MODEL.md.
This section should not be populated until entity modeling begins.

---

# Modeling Principles

This section will define the high-level rules for designing individual entity models.

It will explain how to decide whether information belongs as a field, value object, relationship, metadata, or future extension.

This section will be completed before modeling the individual entities.

---

# Shared Value Objects

This section will define reusable structured objects shared across multiple entities.

Examples include:

- Address
- Contact Information
- Measurements
- SEO Metadata
- Media References
- Social Links
- Audit Information

This section prevents duplicated field definitions across entity models.

---

# Enumerations

This section will define controlled business vocabularies used throughout the application.

Examples include:

- Product Status
- Catalogue Status
- Media Types
- Customer Segments
- Material Types
- Finish Types
- Room Types
- Visibility States
- Enquiry Status

These enumerations will become the standard vocabulary shared across every entity.

---

# Entity Models

This section will contain the detailed specification for every business entity.

Each entity will inherit the Global Data Modeling Standards defined earlier in this document.

Entities will be modeled one at a time to ensure consistency and maintainability.

The planned modeling order is:

1. Company
2. Brand
3. Category
4. Collection
5. Product
6. Product Variant
7. Media Asset
8. Catalogue
9. Wishlist
10. Review
11. Showroom
12. Enquiry
13. Design Your Space Request

---

# Relationship Summary

This section will summarize all entity relationships after every entity has been modeled.

It will provide a high-level overview of one-to-one, one-to-many, and many-to-many relationships across the application.

This section will be completed once the entity modeling phase is finished.