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
Business content changes over time. Products may be updated, catalogues may be replaced, reviews may be hidden, and Location details may change.
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
The business depends on discoverability for furniture categories, catalogues, Location information, and product pages.
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
Products, enquiries, reviews, catalogues, and Location-related data may need to be hidden without being permanently lost.
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
LocationId
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

1. Single Responsibility
Purpose
Each entity should represent one clear business concept.
Architectural Reasoning
An entity becomes difficult to maintain when it tries to represent multiple responsibilities. Business identity, brand identity, furniture offerings, customer intent, media, and Location information should remain clearly separated.
Long-Term Scalability
Single-purpose entities can grow independently as the business expands into catalogues, enquiries, quotations, appointments, CMS management, and customer accounts.
Practical Examples
A product should describe a furniture offering.
A catalogue should describe a curated sales asset.
A media asset should describe business-owned visual or document media.
When Exceptions Are Acceptable
Small supporting concepts may remain embedded when they do not have their own lifecycle, ownership, relationships, or reuse across the system.
2. Separation of Business Data vs Presentation Data
Purpose
Entity models should describe business meaning, not page layout or visual behavior.
Architectural Reasoning
Business data must remain usable across the website, catalogue viewer, CMS, Location workflows, search, and future business tools. Presentation concerns change more frequently than business facts.
Long-Term Scalability
Separating business data from presentation data allows the same entity to appear in different customer experiences without restructuring the model.
Practical Examples
Product category, material, warranty, and catalogue relationships belong in the data model.
Animation behavior, section layout, card size, and navigation placement do not belong in entity models.
When Exceptions Are Acceptable
Business-controlled merchandising fields such as visibility, featured state, and display order are acceptable because they represent business priority, not visual styling.
3. Normalization vs Practical Duplication
Purpose
The data model should avoid unnecessary duplication while allowing limited duplication when it improves business stability or historical accuracy.
Architectural Reasoning
Over-normalization can make simple content difficult to manage. Over-duplication creates inconsistency. The model should balance reuse with practical business needs.
Long-Term Scalability
A balanced approach supports CMS growth, catalogue updates, search, and future enquiry tracking without making the model rigid.
Practical Examples
Materials, finishes, media assets, and categories should usually be referenced instead of duplicated.
A historical enquiry may preserve a snapshot of selected customer-facing text when that context must remain accurate over time.
When Exceptions Are Acceptable
Duplication is acceptable when preserving historical context, improving search performance, supporting external exports, or protecting customer-facing records from later content changes.
4. Reusable Value Objects
Purpose
Repeated structured concepts should be modeled once and reused consistently.
Architectural Reasoning
Shared value objects prevent every entity from defining the same structure differently.
Long-Term Scalability
Reusable value objects make it easier to maintain contact information, addresses, measurements, SEO metadata, social links, media references, and audit information as the project grows.
Practical Examples
A Location and company may both use address information.
Products, design requests, and future quotations may all use measurements.
When Exceptions Are Acceptable
A value object may be simplified inside a specific entity if the entity only needs a very small subset and will not share that structure elsewhere.
5. Entity References vs Embedded Objects
Purpose
The model should clearly decide when to reference another entity and when to embed a small object.
Architectural Reasoning
Entities with their own lifecycle, reuse, relationships, or business identity should be referenced. Small descriptive structures without independent meaning may be embedded.
Long-Term Scalability
This prevents large, tangled entity models and keeps relationships flexible as catalogues, collections, products, media, and enquiries grow.
Practical Examples
Products should reference categories, collections, media assets, materials, and finishes.
A simple address or SEO metadata object can be embedded where appropriate.
When Exceptions Are Acceptable
Embedding is acceptable when the data belongs only to one parent, has no independent lifecycle, and is not reused elsewhere.
6. Required vs Optional Fields
Purpose
Only business-critical fields should be required.
Architectural Reasoning
Making too many fields required creates friction for content entry, CMS migration, and gradual data enrichment. Making too few fields required creates incomplete and unreliable records.
Long-Term Scalability
Clear required fields allow the project to start simple while supporting richer content later.
Practical Examples
Identity, status, and audit information are usually required for primary entities.
SEO, media, descriptions, translations, and advanced metadata may be optional depending on the entity.
When Exceptions Are Acceptable
A field may become required when the entity cannot be meaningful, searchable, publishable, or trustworthy without it.
7. Immutable vs Mutable Data
Purpose
The model should distinguish stable identity from information that may change over time.
Architectural Reasoning
Some data should remain stable once created, while other data must support updates, revisions, or publishing workflows.
Long-Term Scalability
This supports versioning, historical tracking, rollbacks, customer enquiry context, and future CMS workflows.
Practical Examples
Entity identity should remain stable.
Descriptions, catalogue files, warranty explanations, visibility, and merchandising priority may change.
When Exceptions Are Acceptable
Stable data may be corrected when it was originally entered incorrectly, but changes should not break relationships or historical meaning.
8. Business Rules vs Validation Rules
Purpose
The data model should distinguish business meaning from input correctness.
Architectural Reasoning
Business rules describe how the business operates. Validation rules describe whether submitted information is acceptable.
Long-Term Scalability
Separating these concerns keeps the data model useful for business planning, CMS workflows, enquiry handling, and future operational systems.
Practical Examples
A product belonging to a category is a business rule.
A contact number needing a valid format is a validation rule.
When Exceptions Are Acceptable
A validation rule may be documented near an entity when it directly protects business meaning or prevents invalid business records.
9. Extensibility Without Breaking Existing Models
Purpose
Entities should allow future growth without forcing existing data to be rewritten.
Architectural Reasoning
The project will evolve from a website into a richer catalogue and customer experience platform. Models should anticipate growth without becoming over-engineered.
Long-Term Scalability
Extensible models support future catalogues, cloud media, search, filters, quotations, appointments, CMS editing, and customer accounts.
Practical Examples
Metadata can support future integration-specific information.
Versioning can support future revision history without changing the entity’s stable identity.
When Exceptions Are Acceptable
A model should be redesigned only when the existing structure no longer represents the business truth clearly.
10. Backward Compatibility
Purpose
Future changes should avoid breaking existing records, URLs, saved customer intent, or catalogue references.
Architectural Reasoning
Furniture catalogues, product pages, wishlists, and enquiries may remain useful long after content changes.
Long-Term Scalability
Backward compatibility supports long-lived content, SEO stability, shared links, historical enquiries, and future CMS migrations.
Practical Examples
A changed product name should not break its identity.
An updated catalogue should not erase the meaning of earlier customer interactions.
When Exceptions Are Acceptable
Breaking changes are acceptable only when the business intentionally retires a concept and provides a clear migration or archival path.
11. Consistency Across Every Entity
Purpose
Every entity should follow the same naming, identifier, status, date, audit, metadata, media, and relationship standards.
Architectural Reasoning
Consistency reduces confusion and makes the model easier to extend.
Long-Term Scalability
A consistent model supports future team members, CMS content managers, search systems, integrations, and documentation.
Practical Examples
Relationship references should consistently use singular reference names for one item and plural reference names for many items.
Status and audit patterns should remain predictable across entities.
When Exceptions Are Acceptable
Exceptions are acceptable only when the business concept genuinely requires a different pattern and the reason is documented.
12. Avoiding Data Duplication
Purpose
The same business fact should not be stored in multiple places unnecessarily.
Architectural Reasoning
Duplicated data creates disagreement over which version is correct.
Long-Term Scalability
Avoiding duplication keeps products, catalogues, categories, collections, media, reviews, and enquiries easier to manage as volume grows.
Practical Examples
A media asset should be referenced by multiple business entities instead of copied into each one.
A material should be reused instead of described differently across many furniture items.
When Exceptions Are Acceptable
Duplication is acceptable for historical snapshots, search optimization, reporting summaries, or customer-facing records that must preserve what was true at a specific time.
13. Future CMS Compatibility
Purpose
Entity models should be structured so content can later be managed through a CMS without redesigning the data model.
Architectural Reasoning
The business may eventually need non-technical editing of products, catalogues, Location, reviews, SEO metadata, and media.
Long-Term Scalability
CMS-compatible modeling supports publishing workflows, drafts, approvals, translations, media libraries, versioning, and content scheduling.
Practical Examples
Entities should support status, visibility, display order, SEO metadata, media references, localization, and audit fields where relevant.
When Exceptions Are Acceptable
A simple static value may remain outside CMS control when it is unlikely to change and has no business editing requirement.
14. Cloud Storage Compatibility
Purpose
The model should support media stored outside the project without changing business entities.
Architectural Reasoning
Large catalogues, product images, videos, and future virtual tours should be treated as managed business assets rather than local files.
Long-Term Scalability
Cloud-compatible media references support PDF catalogue viewers, optimized images, large media libraries, future virtual tours, and storage provider changes.
Practical Examples
A catalogue should reference its media assets instead of depending on a fixed file location.
A product should reference images through media assets that can later point to optimized or cloud-hosted versions.
When Exceptions Are Acceptable
Small static brand assets may remain simple when they are unlikely to change and do not require media management.
15. Search Optimization Considerations
Purpose
Entity models should support future search and filtering without turning search into a separate business entity.
Architectural Reasoning
Search depends on clean, intentional business data. Products, categories, collections, catalogues, materials, finishes, room types, and warranty information should be modeled in ways that make discovery reliable.
Long-Term Scalability
Search-ready modeling supports keyword search, filters, related content, recommendations, AI-assisted discovery, and SEO growth.
Practical Examples
Customer-facing names, descriptions, tags, category references, collection references, materials, finishes, and room types should be structured clearly enough to support discovery.
When Exceptions Are Acceptable
Search-specific summaries or indexed text may be introduced later when needed for performance or improved discovery, but they should not replace the source business data.

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
11. Location
12. Enquiry
13. Design Your Space Request

Entity Model: Company
Purpose
The Company entity represents Star Furniture Goa as the root business object of the application.
It stores the stable business identity, operational context, contact ownership, business history, and primary ownership relationships from which the rest of the data model grows.
Every major business entity belongs to the Company either directly or indirectly.
Responsibilities
The Company entity is responsible for:
Representing the operating business behind Star Furniture Goa.
Owning the primary Brand relationship.
Owning business-level contact and address information.
Owning Locations, including factory, showroom, office, warehouse, or future branches.
Owning Service Offerings and Warranty Policies.
Establishing root ownership for Categories, Collections, Products, Catalogues, Reviews, and Enquiries.
Providing the root identity for future CMS, analytics, search, and customer experience workflows.
Preserving stable business information separately from visual brand identity.
Required Fields
Name	Data Type	Required or Optional	Description	Validation Rules
id	UUID String	Required	Internal stable identifier for the Company.	Must be a valid UUID. Must never change after creation.
name	String	Required	Public business name used to identify the company.	Must not be empty. Should be human-readable. Recommended length: 2-120 characters.
slug	String	Required	Public URL-safe identifier for the company.	Must be lowercase, hyphen-separated, and stable. Should not contain spaces or special characters.
description	String	Required	Customer-facing explanation of what the company does.	Must not be empty. Should describe the company clearly and professionally.
businessRoles	Array of Controlled Strings	Required	Defines the operating roles of the company.	Must contain at least one value. Recommended values include manufacturer, wholesaler, retailer, serviceProvider.
status	Controlled String	Required	Lifecycle state of the company record.	Must use a controlled status value such as active, inactive, draft, or archived.
primaryBrandId	UUID String	Required	Reference to the primary Brand owned by the Company.	Must reference one valid Brand. A Company must have exactly one primary Brand.
primaryContactInformation	Contact Information	Required	Primary business contact details.	Must contain at least one valid customer contact method. WhatsApp or phone is strongly recommended.
primaryAddress	Address	Required	Primary business address or registered operating address.	Must include enough information to identify the business location. City, state, and country are required.
createdAt	ISO 8601 Date String	Required	Timestamp when the Company record was created.	Must be a valid ISO 8601 timestamp.
updatedAt	ISO 8601 Date String	Required	Timestamp when the Company record was last updated.	Must be a valid ISO 8601 timestamp. Must not be earlier than createdAt.

Optional Fields
Name	Data Type	Description	Validation Rules
publicId	String	Safe public-facing identifier if the Company needs to be referenced externally.	Must be stable and unique if used.
legalName	String	Registered legal name of the business, if different from the public name.	Should not duplicate name unless legally required.
foundedYear	Number	Year the business began operations.	Must be a valid four-digit year. Must not be in the future.
businessHistory	String	Business history used for credibility and trust.	Should be customer-readable and factually accurate.
seoMetadata	SEO Metadata	Search and social metadata for the company’s main public presence.	Should follow the SEO Metadata shared value object.
socialLinks	Array of Social Links	Official company-level social media links.	Each link must include a valid platform and URL.
mediaReferences	Array of Media Reference	Company-related media such as office, factory, proprietor, or brand imagery.	Must reference valid Media Assets.
locationIds	Array of UUID Strings	References to Locations owned by the Company.	Each value must reference a valid Location.
primaryLocationId	UUID String	Reference to the primary physical Location of the Company.	Must reference one valid Location when provided. Should not rely on locationIds order.
serviceOfferingIds	Array of UUID Strings	References to Service Offerings owned by the Company.	Each value must reference a valid Service Offering.
warrantyPolicyIds	Array of UUID Strings	References to Warranty Policies owned by the Company.	Each value must reference a valid Warranty Policy.
businessHours	Array of Business Hours	General operating hours if they apply company-wide.	Should only be used when hours are not better owned by a specific Location.
geoCoordinates	Geo Coordinates	Coordinates for the primary business location if company-level mapping is needed.	Should only be used when coordinates are not better owned by a specific Location.
visibilitySettings	Visibility Settings	Controls whether company information is visible or featured in business-controlled contexts.	Should not be used for page layout decisions.
localizations	Array of Localization Text	Translated customer-facing company content.	Locale values should follow the approved localization strategy.
metadata	Object	Flexible non-primary information for future integrations or migration support.	Must not contain business-critical fields, relationships, SEO data, contact information, or media references.
isDeleted	Boolean	Soft deletion flag.	Should be false for active company records.
deletedAt	ISO 8601 Date String	Timestamp for soft deletion.	Required only when isDeleted is true.

Relationships
Brand
A Company owns exactly one primary Brand.
Relationship field:
primaryBrandId
The Company stores business identity. The Brand stores market-facing identity such as logo, colors, typography, tone, positioning, and tagline.
Locations
A Company may own one or more Locations.
Relationship fields:
locationIds
primaryLocationId
Locations may represent:
Factory
Showroom
Office
Warehouse
Future branch
Location-specific address, business hours, geo coordinates, and contact details should belong to Location when they differ from the company-level information.
Service Offerings
A Company may offer many Service Offerings.
Relationship field:
serviceOfferingIds
Service Offerings describe business capabilities such as consultation, design support, manufacturing, delivery, and installation.
Warranty Policies
A Company may own many Warranty Policies.
Relationship field:
warrantyPolicyIds
Warranty Policies should remain separate because they may evolve, be versioned, and apply differently across products, materials, or product variants.
Categories
A Company owns many Categories.
Relationship direction:
Each Category should reference the Company through companyId.
The Company should not store categoryIds because this relationship may grow over time.
Collections
A Company owns many Collections.
Relationship direction:
Each Collection should reference the Company through companyId.
The Company should not store collectionIds because this relationship may grow over time.
Products
A Company owns many Products.
Relationship direction:
Each Product should reference the Company through companyId.
The Company should not store productIds because this relationship may grow into a large dataset.
Catalogues
A Company owns many Catalogues.
Relationship direction:
Each Catalogue should reference the Company through companyId.
The Company should not store catalogueIds because catalogues may expand and version over time.
Reviews
A Company may have many Reviews.
Relationship direction:
Each Review should reference the Company through companyId.
The Company should not store reviewIds because review volume may grow over time.
Enquiries
A Company may receive many Enquiries.
Relationship direction:
Each Enquiry should reference the Company through companyId.
The Company should not store enquiryIds because enquiries can grow continuously and should not make the Company record oversized.
Business Rules
A Company must have exactly one primary Brand.
A Company must have a stable internal id.
A Company must have a public business name.
A Company must have a valid status.
A Company must define at least one businessRoles value.
A Company must not duplicate Brand responsibilities such as logo, tagline, brand colors, typography, tone of voice, or visual identity.
A Company may own multiple Locations.
A Company may define one primaryLocationId when multiple Locations exist.
A Company must have at least one customer contact method through primaryContactInformation.
Company-level contact information should represent general business contact, not location-specific contact when separate Location contact exists.
Company-level address should represent the primary or registered business address.
Location-specific address information should not be duplicated at the Company level unless it is also the primary business address.
Company relationships should use reference fields, not embedded full entity objects.
Company should only store small, stable direct references.
Large child collections such as Categories, Collections, Products, Catalogues, Reviews, and Enquiries should reference Company through companyId.
The Company should not contain product, catalogue, review, or enquiry details directly.
Company-level businessHours should only be used when the hours apply globally to the business.
Company-level geoCoordinates should only be used when coordinates apply globally or represent the primary business location.
metadata must not become a hidden place for core business data.
Soft deletion should preserve Company history and must not automatically erase related business entities.
Company status must control whether the business record is considered active, inactive, draft, or archived.
Shared Value Objects Used
The Company entity uses the following Shared Value Objects:
Address
Contact Information
SEO Metadata
Social Links
Media Reference
Business Hours
Geo Coordinates
Visibility Settings
Localization Text
These value objects should be embedded only where they describe the Company directly.
Future Expansion
The Company entity can evolve without breaking compatibility by adding optional fields or relationships rather than changing existing required fields.
Future expansion may include:
Multiple brands or sub-brands.
Multiple Locations across Goa or beyond.
Business certifications and awards.
Team or proprietor profiles.
Company-level media galleries.
CMS-managed company content.
Multilingual company descriptions.
Business verification details.
Company-level analytics metadata.
Future customer account ownership.
Future appointment and quotation ownership.
Stable fields such as id, name, slug, and primaryBrandId should remain backward compatible.
New business capabilities should be added through references to separate entities instead of expanding Company into an oversized record.
Large child relationships should continue to be modeled from the child entity back to Company through companyId.

Example JSON
{
  "id": "8e2b5c4a-4f6d-4f91-9f9e-2d7c2f36b601",
  "publicId": "sfg-company",
  "name": "Star Furniture Goa",
  "slug": "star-furniture-goa",
  "description": "Star Furniture Goa designs and manufactures custom engineered wood and plywood furniture for homes, offices, and commercial spaces.",
  "businessRoles": ["manufacturer", "wholesaler", "retailer", "serviceProvider"],
  "status": "active",
  "primaryBrandId": "f2a3d3d1-4b87-4ef2-9a21-6d5c9e6a1201",
  "primaryContactInformation": {
    "phoneNumber": "+91 9876543210",
    "whatsappNumber": "+91 9876543210",
    "email": "info@starfurnituregoa.com",
    "website": "https://starfurnituregoa.com",
    "preferredContactMethod": "whatsapp"
  },
  "primaryAddress": {
    "line1": "Star Furniture Goa",
    "line2": "Goa",
    "landmark": "",
    "city": "Goa",
    "state": "Goa",
    "postalCode": "",
    "country": "India",
    "formattedAddress": "Star Furniture Goa, Goa, India"
  },
  "foundedYear": 2006,
  "businessHistory": "Proudly serving customers since 2006 with custom furniture solutions focused on quality, durability, and craftsmanship.",
  "seoMetadata": {
    "seoTitle": "Star Furniture Goa | Custom Furniture Manufacturer in Goa",
    "seoDescription": "Star Furniture Goa manufactures premium engineered wood and plywood furniture for homes, offices, and commercial spaces.",
    "canonicalUrl": "https://starfurnituregoa.com",
    "ogTitle": "Star Furniture Goa",
    "ogDescription": "Custom furniture designed and manufactured in Goa.",
    "ogImageId": "3c7d8f11-30d5-46d5-9ef1-3f3c5c5a9010",
    "keywords": ["custom furniture goa", "engineered wood furniture", "plywood furniture", "wardrobes goa"]
  },
  "socialLinks": [
    {
      "platform": "instagram",
      "url": "https://instagram.com/starfurnituregoa",
      "handle": "starfurnituregoa",
      "isVisible": true,
      "displayOrder": 1
    }
  ],
  "locationIds": ["2f6f4f90-6f36-4ed0-9987-365d0e9e9012"],
  "primaryLocationId": "2f6f4f90-6f36-4ed0-9987-365d0e9e9012",
  "serviceOfferingIds": [
    "5d8c65b7-48e6-46f6-a4b4-b3a76f2b0191",
    "a49d86a2-7b82-47d1-8947-282671726901"
  ],
  "warrantyPolicyIds": [
    "e0f89e62-cc5f-4c41-b9f1-f79d2c27a801"
  ],
  "mediaReferences": [
    {
      "mediaAssetId": "3c7d8f11-30d5-46d5-9ef1-3f3c5c5a9010",
      "role": "companyProfile",
      "altText": "Star Furniture Goa company profile image",
      "caption": "Star Furniture Goa",
      "displayOrder": 1,
      "isFeatured": true
    }
  ],
  "visibilitySettings": {
    "isVisible": true,
    "isFeatured": true,
    "displayOrder": 1,
    "visibilityStatus": "published"
  },
  "createdAt": "2026-07-03T00:00:00+05:30",
  "updatedAt": "2026-07-03T00:00:00+05:30",
  "metadata": {
    "source": "initialDataModel"
  },
  "isDeleted": false,
  "deletedAt": null
}


# Entity Model: Brand

## Purpose

The Brand entity represents the public identity, visual language, and customer-facing personality of Star Furniture Goa.

The Company owns the business.  
The Brand defines how that business is presented to customers.

The Brand should communicate premium positioning, trust, craftsmanship, elegance, and consistency across customer-facing experiences.

---

## Responsibilities

The Brand entity is responsible for:

- Representing the customer-facing identity of Star Furniture Goa.
- Owning the brand name, tagline, positioning, and tone of voice.
- Owning visual identity direction such as logo, colors, typography, and visual style.
- Supporting consistent presentation across products, catalogues, collections, reviews, media, and marketing content.
- Separating brand identity from operational company information.
- Supporting future brand evolution, sub-brands, campaign branding, or collection-specific branding without changing Company data.

---

## Required Fields

| Name | Data Type | Required or Optional | Description | Validation Rules |
|---|---|---:|---|---|
| `id` | UUID String | Required | Internal stable identifier for the Brand. | Must be a valid UUID. Must never change after creation. |
| `companyId` | UUID String | Required | Reference to the Company that owns the Brand. | Must reference one valid Company. |
| `name` | String | Required | Public brand name shown to customers. | Must not be empty. Recommended length: 2-120 characters. |
| `slug` | String | Required | Public URL-safe identifier for the Brand. | Must be lowercase, hyphen-separated, and stable. Should not contain spaces or special characters. |
| `description` | String | Required | Customer-facing description of the Brand identity and positioning. | Must not be empty. Should describe the brand clearly and professionally. |
| `tagline` | String | Required | Primary brand tagline used in customer-facing communication. | Must not be empty. Should be concise and memorable. |
| `positioningStatement` | String | Required | Defines how the Brand should be perceived by customers. | Must communicate the brand’s premium, trustworthy, and furniture-focused positioning. |
| `toneOfVoice` | Array of Controlled Strings | Required | Defines the communication personality of the Brand. | Must contain at least one value. Recommended values include `premium`, `minimal`, `trustworthy`, `elegant`, `professional`. |
| `logoMediaReference` | Media Reference | Required | Reference to the primary Brand logo media asset. | Must reference a valid Media Asset. Role should clearly identify the asset as the primary logo. |
| `brandColors` | Object | Required | Defines the core brand color direction. | Must include at least primary, secondary, and accent color values. Colors should be valid color values. |
| `typographyDirection` | Object | Required | Defines the approved typography direction for the Brand. | Must include customer-facing font direction for headings and body text. |
| `status` | Controlled String | Required | Lifecycle state of the Brand record. | Must use a controlled status value such as `active`, `inactive`, `draft`, or `archived`. |
| `createdAt` | ISO 8601 Date String | Required | Timestamp when the Brand record was created. | Must be a valid ISO 8601 timestamp. |
| `updatedAt` | ISO 8601 Date String | Required | Timestamp when the Brand record was last updated. | Must be a valid ISO 8601 timestamp. Must not be earlier than `createdAt`. |

---

## Optional Fields

| Name | Data Type | Description | Validation Rules |
|---|---|---|---|
| `publicId` | String | Safe public-facing identifier if the Brand needs to be referenced externally. | Must be stable and unique if used. |
| `shortName` | String | Shortened brand name for compact customer-facing contexts. | Should not conflict with the full brand name. |
| `alternateNames` | Array of Strings | Other approved public names or naming variations. | Should only include approved brand references. |
| `brandStory` | String | Customer-facing story that explains the Brand’s background, values, or promise. | Should be factual, professional, and aligned with Company history. |
| `brandValues` | Array of Strings | Core values communicated by the Brand. | Should not duplicate operational services or warranty details. |
| `brandPersonality` | Array of Controlled Strings | Describes the emotional character of the Brand. | Recommended values include `premium`, `warm`, `minimal`, `credible`, `craftsmanshipFocused`. |
| `visualStyleKeywords` | Array of Strings | Keywords describing the visual style of the Brand. | Should describe visual direction, not page layout. |
| `secondaryTaglines` | Array of Strings | Additional approved taglines for campaigns or supporting content. | Should not replace the primary `tagline`. |
| `iconMediaReference` | Media Reference | Reference to a simplified icon, mark, or favicon-style asset. | Must reference a valid Media Asset if provided. |
| `mediaReferences` | Array of Media Reference | Brand-related media such as logo variations, proprietor imagery, brand visuals, or campaign assets. | Must reference valid Media Assets. |
| `socialLinks` | Array of Social Links | Official brand-level social media links. | Each link must include a valid platform and URL. |
| `seoMetadata` | SEO Metadata | Search and social metadata for the Brand’s public presence. | Should follow the SEO Metadata shared value object. |
| `visibilitySettings` | Visibility Settings | Controls whether Brand content is visible or featured in business-controlled contexts. | Should not be used for page layout decisions. |
| `localizations` | Array of Localization Text | Translated customer-facing Brand content. | Locale values should follow the approved localization strategy. |
| `parentBrandId` | UUID String | Reference to a parent Brand if future sub-brands or campaign brands are introduced. | Must reference a valid Brand when provided. Should not be used for the primary Brand unless sub-branding exists. |
| `metadata` | Object | Flexible non-primary information for future integrations, migration support, or brand tooling. | Must not contain business-critical fields, operational company data, contact information, or addresses. |
| `isDeleted` | Boolean | Soft deletion flag. | Should be `false` for active Brand records. |
| `deletedAt` | ISO 8601 Date String | Timestamp for soft deletion. | Required only when `isDeleted` is `true`. |

---

## Relationships

### Company

A Brand belongs to exactly one Company.

Relationship field:

- `companyId`

The Company owns the business identity, legal identity, locations, services, and operational information.  
The Brand owns the customer-facing identity, visual language, tone, and market positioning.

The Company may reference the Brand through `primaryBrandId`.

---

### Parent Brand

A Brand may optionally reference another Brand as its parent.

Relationship field:

- `parentBrandId`

This is reserved for future sub-brands, campaign brands, collection-specific branding, or showroom-specific branding.

The primary Star Furniture Goa Brand should not require a parent Brand.

---

### Media Assets

A Brand may reference multiple Media Assets.

Relationship fields:

- `logoMediaReference`
- `iconMediaReference`
- `mediaReferences`

Brand media may include logos, marks, icons, campaign visuals, brand photography, proprietor imagery, and future brand guideline assets.

The Brand should reference Media Assets through Media References instead of duplicating file paths.

---

### Collections

A Brand may influence Collections.

Relationship direction:

- Collections may reference `brandId` if they require brand-specific positioning or presentation.

The Brand should not store `collectionIds` because collections may grow over time and should own their relationship back to Brand when needed.

---

### Catalogues

A Brand may influence Catalogues.

Relationship direction:

- Catalogues may reference `brandId` if the catalogue is tied to a specific brand identity, campaign, or visual direction.

The Brand should not store `catalogueIds` because catalogues may expand and version over time.

---

### Media Asset Ownership

A Brand may be associated with Media Assets used for logo identity, brand visuals, and customer-facing presentation.

Relationship direction:

- Media Assets may reference `brandId` when the asset primarily belongs to the Brand.

---

## Business Rules

- A Brand must belong to exactly one Company.
- A Brand must have a stable internal `id`.
- A Brand must have a public `name`.
- A Brand must have a valid `slug`.
- A Brand must have one primary `tagline`.
- A Brand must have one primary logo through `logoMediaReference`.
- A Brand must define its customer-facing positioning through `positioningStatement`.
- A Brand must define its communication style through `toneOfVoice`.
- A Brand must define core visual identity through `brandColors` and `typographyDirection`.
- A Brand must not contain Company responsibilities such as legal identity, addresses, business hours, services, warranties, or operational contact details.
- A Brand must not contain Product, Catalogue, Review, or Enquiry details directly.
- A Brand should use Media References instead of raw media paths.
- Brand-level social links should represent public brand presence, not operational contact channels.
- Brand visual identity should remain presentation-guiding but not page-layout-specific.
- Large child relationships such as Collections, Catalogues, or Media Assets should reference Brand from the child entity when needed.
- `metadata` must not become a hidden place for core brand identity data.
- Soft deletion should preserve Brand history and must not automatically erase Company data or related business entities.
- Brand status must control whether the Brand record is considered active, inactive, draft, or archived.

---

## Shared Value Objects Used

The Brand entity uses the following Shared Value Objects:

- Media Reference
- SEO Metadata
- Social Links
- Visibility Settings
- Localization Text

These value objects should be embedded only where they describe the Brand directly.

The Brand must not use Address, Contact Information, Business Hours, or Geo Coordinates because those belong to Company, Location, Enquiry, or customer intent contexts.

---

## Future Expansion

The Brand entity can evolve without breaking compatibility by adding optional fields or relationships rather than changing existing required fields.

Future expansion may include:

- Sub-brands.
- Campaign-specific branding.
- Collection-specific branding.
- Seasonal brand directions.
- Brand guideline documents.
- Logo variations.
- Multilingual brand messaging.
- Brand-specific social campaigns.
- Brand-specific media libraries.
- Future rebranding while preserving Company identity.
- Brand history and visual identity versioning.
- CMS-managed brand content and approval workflows.

Stable fields such as `id`, `companyId`, `name`, `slug`, and `logoMediaReference` should remain backward compatible.

New brand capabilities should be added through optional fields, Media References, or relationships to separate entities instead of merging Brand with Company responsibilities.

---

## Example JSON

```json
{
  "id": "f2a3d3d1-4b87-4ef2-9a21-6d5c9e6a1201",
  "publicId": "sfg-brand",
  "companyId": "8e2b5c4a-4f6d-4f91-9f9e-2d7c2f36b601",
  "name": "Star Furniture Goa",
  "shortName": "SFG",
  "slug": "star-furniture-goa",
  "description": "Star Furniture Goa is a premium furniture brand focused on elegant, durable, and custom-made furniture for homes, offices, and commercial spaces.",
  "tagline": "Where Quality Meets Credibility",
  "secondaryTaglines": [
    "Custom furniture crafted for modern spaces"
  ],
  "positioningStatement": "A trusted Goa-based furniture brand known for premium custom furniture, durable materials, refined design, and dependable craftsmanship.",
  "toneOfVoice": ["premium", "minimal", "trustworthy", "elegant", "professional"],
  "brandPersonality": ["credible", "warm", "craftsmanshipFocused", "modern"],
  "brandValues": [
    "Quality",
    "Credibility",
    "Craftsmanship",
    "Durability",
    "Customer Satisfaction"
  ],
  "visualStyleKeywords": [
    "luxury",
    "minimal",
    "modern",
    "warm",
    "refined"
  ],
  "logoMediaReference": {
    "mediaAssetId": "3c7d8f11-30d5-46d5-9ef1-3f3c5c5a9010",
    "role": "primaryLogo",
    "altText": "Star Furniture Goa logo",
    "caption": "Star Furniture Goa",
    "displayOrder": 1,
    "isFeatured": true
  },
  "iconMediaReference": {
    "mediaAssetId": "7d7bc0c5-58df-4b90-9c53-4f248b995901",
    "role": "brandIcon",
    "altText": "Star Furniture Goa brand icon",
    "caption": "SFG icon",
    "displayOrder": 2,
    "isFeatured": false
  },
  "brandColors": {
    "primary": "#000000",
    "secondary": "#FFFFFF",
    "accent": "#D4AF37",
    "neutralDark": "#191919",
    "neutralLight": "#F2E6D8"
  },
  "typographyDirection": {
    "headingFont": "Playfair Display",
    "bodyFont": "Poppins",
    "style": "premium-minimal",
    "notes": "Use elegant headings with clean, readable body text."
  },
  "seoMetadata": {
    "seoTitle": "Star Furniture Goa | Premium Custom Furniture in Goa",
    "seoDescription": "Star Furniture Goa is a trusted premium furniture brand offering custom engineered wood and plywood furniture for homes, offices, and commercial spaces.",
    "canonicalUrl": "https://starfurnituregoa.com",
    "ogTitle": "Star Furniture Goa",
    "ogDescription": "Where Quality Meets Credibility.",
    "ogImageId": "3c7d8f11-30d5-46d5-9ef1-3f3c5c5a9010",
    "keywords": ["star furniture goa", "custom furniture goa", "premium furniture goa"]
  },
  "socialLinks": [
    {
      "platform": "instagram",
      "url": "https://instagram.com/starfurnituregoa",
      "handle": "starfurnituregoa",
      "isVisible": true,
      "displayOrder": 1
    }
  ],
  "mediaReferences": [
    {
      "mediaAssetId": "a1c4c520-12ef-4eb2-8d2e-95d9eb021001",
      "role": "brandHero",
      "altText": "Premium custom furniture by Star Furniture Goa",
      "caption": "Custom furniture crafted for modern spaces",
      "displayOrder": 1,
      "isFeatured": true
    }
  ],
  "visibilitySettings": {
    "isVisible": true,
    "isFeatured": true,
    "displayOrder": 1,
    "visibilityStatus": "published"
  },
  "status": "active",
  "createdAt": "2026-07-06T00:00:00+05:30",
  "updatedAt": "2026-07-06T00:00:00+05:30",
  "metadata": {
    "source": "initialDataModel"
  },
  "isDeleted": false,
  "deletedAt": null
}
```

# Entity Model: Location

## Purpose

The Location entity represents a physical business location operated by Star Furniture Goa.

A Location may represent:

- Factory
- Showroom
- Office
- Warehouse
- Future Branch

The current business has one Factory, but the model must support unlimited future locations without requiring structural changes.

The Location entity owns all physical location information. It must not duplicate Company responsibilities or Brand responsibilities.

---

## Responsibilities

The Location entity is responsible for:

- Representing one physical place operated by the Company.
- Identifying the type of business location.
- Storing location-specific address information.
- Storing location-specific contact information when different from Company contact information.
- Supporting Google Maps display through geo coordinates and map references.
- Defining customer visit information.
- Defining business hours for that specific location.
- Supporting appointment availability for showroom visits, consultations, or future measurement visits.
- Storing parking and access information.
- Supporting location-specific media.
- Supporting future service areas and multiple location expansion.
- Supporting future showroom-specific experiences without changing the core model.

---

## Required Fields

| Name | Data Type | Required or Optional | Description | Validation Rules |
|---|---|---:|---|---|
| `id` | UUID String | Required | Internal stable identifier for the Location. | Must be a valid UUID. Must never change after creation. |
| `companyId` | UUID String | Required | Reference to the Company that owns the Location. | Must reference one valid Company. |
| `name` | String | Required | Internal or public name of the Location. | Must not be empty. Recommended length: 2-120 characters. |
| `slug` | String | Required | Public URL-safe identifier for the Location. | Must be lowercase, hyphen-separated, and stable. Should not contain spaces or special characters. |
| `locationType` | Controlled String | Required | Defines the type of physical location. | Must use a controlled value such as `factory`, `showroom`, `office`, `warehouse`, or `branch`. |
| `description` | String | Required | Customer-facing or business-facing description of the Location. | Must not be empty. Should describe the purpose of the Location clearly. |
| `address` | Address | Required | Physical address of the Location. | Must include enough information to identify the location. City, state, and country are required. |
| `status` | Controlled String | Required | Lifecycle state of the Location record. | Must use a controlled status value such as `active`, `inactive`, `draft`, or `archived`. |
| `createdAt` | ISO 8601 Date String | Required | Timestamp when the Location record was created. | Must be a valid ISO 8601 timestamp. |
| `updatedAt` | ISO 8601 Date String | Required | Timestamp when the Location record was last updated. | Must be a valid ISO 8601 timestamp. Must not be earlier than `createdAt`. |

---

## Optional Fields

| Name | Data Type | Description | Validation Rules |
|---|---|---|---|
| `publicId` | String | Safe public-facing identifier if the Location needs to be referenced externally. | Must be stable and unique if used. |
| `displayName` | String | Customer-facing display name if different from `name`. | Should not conflict with the Location name. |
| `shortDescription` | String | Short customer-facing summary of the Location. | Should be concise and suitable for cards, lists, or previews. |
| `contactInformation` | Contact Information | Location-specific contact details. | Should only be used when different from Company-level contact information. |
| `geoCoordinates` | Geo Coordinates | Map coordinates and map-related reference information for the Location. | Latitude and longitude must be valid if provided. |
| `businessHours` | Array of Business Hours | Opening hours for this specific Location. | Should represent this Location only, not the whole Company unless the Location is the only operating location. |
| `acceptsCustomerVisits` | Boolean | Indicates whether customers may visit this Location. | Must be `true` or `false` when provided. |
| `acceptsAppointments` | Boolean | Indicates whether this Location supports scheduled visits or consultations. | Must be `true` or `false` when provided. |
| `appointmentAvailability` | Object | High-level appointment availability rules for this Location. | Should only describe appointment-specific availability and should not duplicate general business hours. |
| `visitInstructions` | String | Instructions for customers visiting the Location. | Should be clear, practical, and location-specific. |
| `parkingInformation` | Object | Parking availability and access details for visitors. | Should describe parking for this Location only. |
| `accessibilityNotes` | String | Notes about access, entry, stairs, lifts, or visitor convenience. | Should be factual and location-specific. |
| `serviceOfferingIds` | Array of UUID Strings | References to Service Offerings available at this Location. | Each value must reference a valid Service Offering. |
| `serviceAreaIds` | Array of UUID Strings | Future references to Service Areas supported by this Location. | Should only be used once Service Area is introduced as a future entity. |
| `serviceAreaNotes` | String | Temporary description of areas served by this Location before Service Area becomes a formal entity. | Should not duplicate Company-wide service information. |
| `mediaReferences` | Array of Media Reference | Location-specific media such as factory photos, showroom photos, exterior images, or map-related visuals. | Must reference valid Media Assets. |
| `seoMetadata` | SEO Metadata | Search and social metadata for a public Location page. | Should follow the SEO Metadata shared value object. |
| `visibilitySettings` | Visibility Settings | Controls whether this Location is visible or featured in business-controlled contexts. | Should not be used for page layout decisions. |
| `localizations` | Array of Localization Text | Translated customer-facing Location content. | Locale values should follow the approved localization strategy. |
| `metadata` | Object | Flexible non-primary information for future integrations or migration support. | Must not contain business-critical fields, Company data, Brand identity, or duplicated address details. |
| `isDeleted` | Boolean | Soft deletion flag. | Should be `false` for active Location records. |
| `deletedAt` | ISO 8601 Date String | Timestamp for soft deletion. | Required only when `isDeleted` is `true`. |

---

## Relationships

### Company

A Location belongs to exactly one Company.

Relationship field:

- `companyId`

The Company owns the business.  
The Location represents one physical place operated by that business.

The Company may reference a Location through `locationIds` or `primaryLocationId`, but the Location must always identify its owner through `companyId`.

---

### Service Offerings

A Location may support one or more Service Offerings.

Relationship field:

- `serviceOfferingIds`

This relationship describes which services are available at a specific Location, such as consultation, showroom visit, manufacturing, delivery coordination, or design support.

The Location should reference Service Offerings instead of redefining service details.

---

### Media Assets

A Location may reference multiple Media Assets.

Relationship field:

- `mediaReferences`

Location media may include factory images, showroom images, exterior photos, visitor guidance visuals, or future virtual tours.

The Location should reference Media Assets through Media References instead of storing raw file paths.

---

### Enquiries

A Location may receive or be associated with many Enquiries.

Relationship direction:

- Each Enquiry may reference the Location through `locationId`.

The Location should not store `enquiryIds` because enquiry volume may grow continuously.

---

### Reviews

A Location may be associated with many Reviews.

Relationship direction:

- Each Review may reference the Location through `locationId`.

The Location should not store `reviewIds` because review volume may grow over time.

---

### Appointments

A Location may support future Appointments.

Relationship direction:

- Each future Appointment may reference the Location through `locationId`.

The Location should not store `appointmentIds` because appointment history may grow continuously.

---

### Service Areas

A Location may later support one or more Service Areas.

Relationship field:

- `serviceAreaIds`

This relationship is reserved for future expansion when service areas become formal business entities.

---

## Business Rules

- A Location must belong to exactly one Company.
- A Location must have a stable internal `id`.
- A Location must have a valid `companyId`.
- A Location must have a valid `locationType`.
- A Location must own its physical address through `address`.
- A Location must not contain Company responsibilities such as legal identity, business history, company-wide ownership, warranty ownership, or root business contact ownership.
- A Location must not contain Brand responsibilities such as logo, brand colors, typography, tagline, tone of voice, or visual identity.
- Location-specific contact information should only exist when it differs from Company-level contact information.
- Location-specific business hours should be stored on Location, not Company.
- Location-specific geo coordinates should be stored on Location, not Company.
- Location-specific media should use Media References.
- A Location may represent a Factory, Showroom, Office, Warehouse, or Future Branch without structural changes.
- Customer visit details must describe only this Location.
- Parking information must describe only this Location.
- Appointment availability must describe only this Location and must not replace general business hours.
- Large child relationships such as Enquiries, Reviews, and Appointments should reference Location through `locationId`.
- The Location should not contain full Enquiry, Review, Appointment, Service Offering, or Media Asset objects directly.
- `metadata` must not become a hidden place for core location data.
- Soft deletion should preserve Location history and must not automatically erase Company data or related business entities.
- Location status must control whether the Location is considered active, inactive, draft, or archived.

---

## Shared Value Objects Used

The Location entity uses the following Shared Value Objects:

- Address
- Contact Information
- Business Hours
- Geo Coordinates
- Media Reference
- SEO Metadata
- Visibility Settings
- Localization Text

The Location must not use Brand-specific visual identity fields.

---

## Future Expansion

The Location entity can evolve without breaking compatibility by adding optional fields or relationships rather than changing existing required fields.

Future expansion may include:

- Multiple factories.
- Multiple showrooms.
- Warehouses.
- Corporate offices.
- Future branches.
- Google Maps place details.
- Location-specific galleries.
- Location-specific virtual tours.
- Location-specific staff assignment.
- Appointment scheduling.
- Visit capacity.
- Holiday business hours.
- Service areas.
- Local SEO landing pages.
- Showroom-specific reviews.
- Showroom-specific catalogue displays.
- Future branch-level analytics.

Stable fields such as `id`, `companyId`, `name`, `slug`, `locationType`, and `address` should remain backward compatible.

New location capabilities should be added through optional fields, Shared Value Objects, or references to separate future entities instead of expanding Location into an oversized record.

---

## Example JSON

```json
{
  "id": "2f6f4f90-6f36-4ed0-9987-365d0e9e9012",
  "publicId": "sfg-primary-factory",
  "companyId": "8e2b5c4a-4f6d-4f91-9f9e-2d7c2f36b601",
  "name": "Star Furniture Goa Factory",
  "displayName": "Star Furniture Goa Factory",
  "slug": "star-furniture-goa-factory",
  "locationType": "factory",
  "description": "Primary factory location for Star Furniture Goa, supporting custom furniture manufacturing and customer visits by appointment.",
  "shortDescription": "Primary factory and customer visit location for Star Furniture Goa.",
  "address": {
    "line1": "Star Furniture Goa",
    "line2": "Goa",
    "landmark": "",
    "city": "Goa",
    "state": "Goa",
    "postalCode": "",
    "country": "India",
    "formattedAddress": "Star Furniture Goa, Goa, India"
  },
  "contactInformation": {
    "phoneNumber": "+91 9876543210",
    "whatsappNumber": "+91 9876543210",
    "email": "info@starfurnituregoa.com",
    "website": "https://starfurnituregoa.com",
    "preferredContactMethod": "whatsapp"
  },
  "geoCoordinates": {
    "latitude": 15.2993,
    "longitude": 74.124,
    "mapUrl": "https://maps.google.com/?q=Star+Furniture+Goa",
    "placeId": "",
    "locationLabel": "Star Furniture Goa Factory"
  },
  "businessHours": [
    {
      "dayOfWeek": "monday",
      "opensAt": "10:00",
      "closesAt": "19:00",
      "isClosed": false,
      "notes": ""
    },
    {
      "dayOfWeek": "sunday",
      "opensAt": "",
      "closesAt": "",
      "isClosed": true,
      "notes": "Closed"
    }
  ],
  "acceptsCustomerVisits": true,
  "acceptsAppointments": true,
  "appointmentAvailability": {
    "appointmentTypes": ["factoryVisit", "designConsultation"],
    "requiresPriorConfirmation": true,
    "preferredBookingChannel": "whatsapp",
    "notes": "Customer visits are recommended by prior WhatsApp confirmation."
  },
  "visitInstructions": "Please confirm your visit on WhatsApp before arriving.",
  "parkingInformation": {
    "isParkingAvailable": true,
    "parkingType": "onSite",
    "notes": "Customer parking is available near the factory entrance."
  },
  "accessibilityNotes": "Visitors may contact the team in advance for entry assistance.",
  "serviceOfferingIds": [
    "5d8c65b7-48e6-46f6-a4b4-b3a76f2b0191",
    "a49d86a2-7b82-47d1-8947-282671726901"
  ],
  "serviceAreaNotes": "Serves customers across Goa for custom furniture enquiries and consultations.",
  "mediaReferences": [
    {
      "mediaAssetId": "9a6d7820-2c1f-4a87-9291-f91b35fd1001",
      "role": "locationExterior",
      "altText": "Star Furniture Goa factory exterior",
      "caption": "Star Furniture Goa Factory",
      "displayOrder": 1,
      "isFeatured": true
    }
  ],
  "seoMetadata": {
    "seoTitle": "Star Furniture Goa Factory | Custom Furniture in Goa",
    "seoDescription": "Visit Star Furniture Goa for custom engineered wood and plywood furniture consultations in Goa.",
    "canonicalUrl": "https://starfurnituregoa.com/location/star-furniture-goa-factory",
    "ogTitle": "Star Furniture Goa Factory",
    "ogDescription": "Primary factory location for custom furniture consultations.",
    "ogImageId": "9a6d7820-2c1f-4a87-9291-f91b35fd1001",
    "keywords": ["star furniture goa factory", "custom furniture goa", "furniture showroom goa"]
  },
  "visibilitySettings": {
    "isVisible": true,
    "isFeatured": true,
    "displayOrder": 1,
    "visibilityStatus": "published"
  },
  "status": "active",
  "createdAt": "2026-07-06T00:00:00+05:30",
  "updatedAt": "2026-07-06T00:00:00+05:30",
  "metadata": {
    "source": "initialDataModel"
  },
  "isDeleted": false,
  "deletedAt": null
}
```

# Entity Model: Category

## Purpose

The Category entity represents a major furniture classification used to organize browsing, discovery, search, filters, catalogues, collections, and website navigation.

Examples include:

- Modular Kitchens
- Wardrobes
- Beds
- TV Units
- Office Furniture
- Dining Furniture
- Dressing Tables
- Custom Furniture

A Category is primarily a discovery concept. It helps customers browse furniture by type.

A Category must not own Products directly. Products should reference Category using `categoryId`.

---

## Responsibilities

The Category entity is responsible for:

- Representing one major furniture classification.
- Helping customers browse furniture by need or product type.
- Supporting category-specific discovery.
- Supporting category-specific SEO pages.
- Supporting homepage featured categories.
- Supporting search and filters.
- Supporting collection browsing.
- Supporting category-specific catalogues.
- Supporting future nested categories.
- Providing a stable classification reference for Products, Collections, Catalogues, Enquiries, and Design Your Space Requests.

---

## Required Fields

| Name | Data Type | Required or Optional | Description | Validation Rules |
|---|---|---:|---|---|
| `id` | UUID String | Required | Internal stable identifier for the Category. | Must be a valid UUID. Must never change after creation. |
| `companyId` | UUID String | Required | Reference to the Company that owns the Category. | Must reference one valid Company. |
| `name` | String | Required | Public category name shown to customers. | Must not be empty. Recommended length: 2-120 characters. |
| `slug` | String | Required | Public URL-safe identifier for the Category. | Must be lowercase, hyphen-separated, and stable. Should not contain spaces or special characters. |
| `description` | String | Required | Customer-facing explanation of the furniture category. | Must not be empty. Should describe the category clearly and professionally. |
| `categoryType` | Controlled String | Required | Defines the high-level type of category. | Must use a controlled value such as `furniture`, `roomBased`, `custom`, or `commercial`. |
| `status` | Controlled String | Required | Lifecycle state of the Category record. | Must use a controlled status value such as `active`, `inactive`, `draft`, or `archived`. |
| `createdAt` | ISO 8601 Date String | Required | Timestamp when the Category record was created. | Must be a valid ISO 8601 timestamp. |
| `updatedAt` | ISO 8601 Date String | Required | Timestamp when the Category record was last updated. | Must be a valid ISO 8601 timestamp. Must not be earlier than `createdAt`. |

---

## Optional Fields

| Name | Data Type | Description | Validation Rules |
|---|---|---|---|
| `publicId` | String | Safe public-facing identifier if the Category needs to be referenced externally. | Must be stable and unique if used. |
| `displayName` | String | Customer-facing display name if different from `name`. | Should not conflict with the Category name. |
| `shortDescription` | String | Short customer-facing summary of the Category. | Should be concise and suitable for cards, navigation, or previews. |
| `parentCategoryId` | UUID String | Reference to a parent Category for future nested category support. | Must reference a valid Category when provided. Must not create circular relationships. |
| `roomSpaceTypeIds` | Array of UUID Strings | References to Room / Space Types commonly associated with this Category. | Each value must reference a valid Room / Space Type. |
| `searchKeywords` | Array of Strings | Search-friendly terms customers may use to find this Category. | Should contain customer-facing search terms. Must not replace structured relationships. |
| `filterTags` | Array of Strings | Discovery tags used to support category-level filtering or grouping. | Should be controlled where possible. Must not duplicate Product-specific filters. |
| `mediaReferences` | Array of Media Reference | Category-specific media such as category images, thumbnails, hero images, or inspiration visuals. | Must reference valid Media Assets. |
| `seoMetadata` | SEO Metadata | Search and social metadata for a public Category page. | Should follow the SEO Metadata shared value object. |
| `visibilitySettings` | Visibility Settings | Controls whether the Category is visible, featured, or ordered in business-controlled contexts. | Should support homepage featured categories and category ordering. Should not be used for page layout decisions. |
| `localizations` | Array of Localization Text | Translated customer-facing Category content. | Locale values should follow the approved localization strategy. |
| `versionInformation` | Version Information | Revision details for category content if category naming, descriptions, or publishing status change over time. | Should follow the approved versioning strategy when used. |
| `metadata` | Object | Flexible non-primary information for future integrations or migration support. | Must not contain business-critical fields, Company data, Brand identity, Product details, or Catalogue details. |
| `isDeleted` | Boolean | Soft deletion flag. | Should be `false` for active Category records. |
| `deletedAt` | ISO 8601 Date String | Timestamp for soft deletion. | Required only when `isDeleted` is `true`. |

---

## Relationships

### Company

A Category belongs to exactly one Company.

Relationship field:

- `companyId`

The Company owns the business.  
The Category represents one business-owned furniture classification.

The Company should not store large Category lists directly. Categories should identify their owner through `companyId`.

---

### Parent Category

A Category may optionally belong to another Category.

Relationship field:

- `parentCategoryId`

This supports future nested categories such as:

- Wardrobes
  - Sliding Wardrobes
  - Hinged Wardrobes
  - Walk-in Wardrobes

Nested categories should use references and must not duplicate parent category information.

---

### Products

Products may belong to a Category.

Relationship direction:

- Each Product should reference the Category through `categoryId`.

The Category must not store `productIds` because Product volume can grow over time and Products own their classification reference.

---

### Collections

Collections may reference one or more Categories.

Relationship direction:

- Each Collection may reference Categories through `categoryIds`.

The Category must not store `collectionIds` because Collections are curated groupings that should own their category references.

---

### Catalogues

Catalogues may reference one or more Categories.

Relationship direction:

- Each Catalogue may reference Categories through `categoryIds`.

The Category must not store `catalogueIds` because Catalogues may expand, change, and version over time.

---

### Room / Space Types

A Category may be associated with one or more Room / Space Types.

Relationship field:

- `roomSpaceTypeIds`

This supports discovery by space, such as kitchen, bedroom, living room, office, or commercial space.

---

### Media Assets

A Category may reference multiple Media Assets.

Relationship field:

- `mediaReferences`

Category media may include thumbnails, hero images, category previews, inspiration images, or future category videos.

The Category should reference Media Assets through Media References instead of storing raw file paths.

---

### Enquiries

A Category may be referenced by customer Enquiries.

Relationship direction:

- Each Enquiry may reference Category through `categoryId` or `categoryIds`.

The Category should not store `enquiryIds` because enquiry volume may grow continuously.

---

### Design Your Space Requests

A Category may be referenced by Design Your Space Requests.

Relationship direction:

- Each Design Your Space Request may reference Category through `categoryId` or `categoryIds`.

The Category should not store design request history directly.

---

## Business Rules

- A Category must belong to exactly one Company.
- A Category must have a stable internal `id`.
- A Category must have a valid `companyId`.
- A Category must have a customer-facing `name`.
- A Category must have a stable SEO-friendly `slug`.
- A Category must represent a furniture classification, not a Product, Collection, Catalogue, Brand, Location, or Service Offering.
- A Category must not contain Product details directly.
- A Category must not store `productIds`.
- Products must reference Category using `categoryId`.
- Catalogues must reference Category using `categoryIds`.
- Collections must reference Category using `categoryIds`.
- Category-specific media must use Media References.
- Category search keywords must support discovery and must not replace structured relationships.
- Category filter tags must describe category-level discovery only and must not duplicate Product-level filter data.
- Parent category relationships must not create circular category trees.
- A Category must not contain Company responsibilities such as legal identity, business history, contact ownership, locations, warranties, or service ownership.
- A Category must not contain Brand responsibilities such as logo identity, brand colors, typography, tagline, tone of voice, or visual identity.
- A Category must not contain Product responsibilities such as materials, finishes, measurements, variants, warranty policy selection, or product media galleries.
- Large child relationships such as Products, Catalogues, Collections, Enquiries, and Design Your Space Requests should reference Category from the child entity.
- `metadata` must not become a hidden place for core category data.
- Soft deletion should preserve Category history and must not automatically erase Products, Collections, Catalogues, Enquiries, or Design Your Space Requests.
- Category status must control whether the Category is considered active, inactive, draft, or archived.

---

## Shared Value Objects Used

The Category entity uses the following Shared Value Objects:

- Media Reference
- SEO Metadata
- Visibility Settings
- Localization Text
- Version Information

The Category must not use Address, Contact Information, Business Hours, Geo Coordinates, or Measurement because those responsibilities belong to Location, Company, Product, Product Variant, Design Your Space Request, or future Quotation contexts.

---

## Future Expansion

The Category entity can evolve without breaking compatibility by adding optional fields or relationships rather than changing existing required fields.

Future expansion may include:

- Nested categories.
- Category-specific landing pages.
- Category-specific catalogues.
- Category-specific SEO.
- Category-specific filter configurations.
- Category-specific media galleries.
- Category-specific videos.
- Category-specific FAQs.
- Category-specific recommendations.
- Homepage featured category groups.
- Room-based category browsing.
- Multilingual category content.
- CMS-managed category ordering.
- Category publishing workflows.
- Category analytics.
- AI-assisted search and recommendations.

Stable fields such as `id`, `companyId`, `name`, `slug`, and `categoryType` should remain backward compatible.

New category capabilities should be added through optional fields, Shared Value Objects, or references to separate future entities instead of expanding Category into an oversized record.

Products, Catalogues, and Collections should continue to reference Category rather than being embedded inside Category.

---

## Example JSON

```json
{
  "id": "b6a2c7e0-1b7d-4c34-8f8b-91e73a6d1001",
  "publicId": "sfg-category-modular-kitchens",
  "companyId": "8e2b5c4a-4f6d-4f91-9f9e-2d7c2f36b601",
  "name": "Modular Kitchens",
  "displayName": "Modular Kitchens",
  "slug": "modular-kitchens",
  "description": "Modular Kitchens include customized kitchen furniture solutions designed for storage, durability, efficient layouts, and elegant everyday use.",
  "shortDescription": "Custom modular kitchen solutions designed for modern homes.",
  "categoryType": "roomBased",
  "parentCategoryId": null,
  "roomSpaceTypeIds": [
    "5f0e2a91-42a3-4f3d-9d45-71f2f7b41001"
  ],
  "searchKeywords": [
    "modular kitchen",
    "custom kitchen",
    "kitchen cabinets",
    "kitchen storage",
    "kitchen furniture goa"
  ],
  "filterTags": [
    "kitchen",
    "storage",
    "customFurniture",
    "engineeredWood",
    "plywood"
  ],
  "mediaReferences": [
    {
      "mediaAssetId": "c4d8f280-2d84-4c91-9b91-328d5f861001",
      "role": "categoryHero",
      "altText": "Modular kitchen furniture by Star Furniture Goa",
      "caption": "Custom Modular Kitchens",
      "displayOrder": 1,
      "isFeatured": true
    },
    {
      "mediaAssetId": "f26b5e10-95a1-4f8e-9f1e-3fd8f8e51001",
      "role": "categoryThumbnail",
      "altText": "Modern modular kitchen cabinets",
      "caption": "Modular Kitchens",
      "displayOrder": 2,
      "isFeatured": false
    }
  ],
  "seoMetadata": {
    "seoTitle": "Modular Kitchens in Goa | Star Furniture Goa",
    "seoDescription": "Explore custom modular kitchen furniture by Star Furniture Goa, crafted for elegant storage, durability, and modern home layouts.",
    "canonicalUrl": "https://starfurnituregoa.com/collections/modular-kitchens",
    "ogTitle": "Modular Kitchens",
    "ogDescription": "Custom modular kitchen solutions designed for modern homes in Goa.",
    "ogImageId": "c4d8f280-2d84-4c91-9b91-328d5f861001",
    "keywords": [
      "modular kitchens goa",
      "custom kitchen furniture goa",
      "kitchen cabinets goa"
    ]
  },
  "visibilitySettings": {
    "isVisible": true,
    "isFeatured": true,
    "displayOrder": 1,
    "visibilityStatus": "published"
  },
  "versionInformation": {
    "version": 1,
    "versionLabel": "Initial Category Definition",
    "versionStatus": "published",
    "effectiveFrom": "2026-07-11T00:00:00+05:30",
    "effectiveTo": null,
    "changeSummary": "Initial category definition for Modular Kitchens."
  },
  "status": "active",
  "createdAt": "2026-07-11T00:00:00+05:30",
  "updatedAt": "2026-07-11T00:00:00+05:30",
  "metadata": {
    "source": "initialDataModel"
  },
  "isDeleted": false,
  "deletedAt": null
}
```

# Entity Model: Collection

## Purpose

The Collection entity represents a curated business grouping of related products.

A Collection is not a Category.

A Category represents a broad furniture classification.  
A Collection represents a more specific curated grouping, style, use case, campaign, or product discovery path within one or more Categories.

Examples:

Category:

- Wardrobes

Collections:

- Sliding Wardrobes
- Hinged Wardrobes
- Walk-in Wardrobes

Category:

- Modular Kitchens

Collections:

- Modern Kitchens
- Luxury Kitchens
- Compact Kitchens

Collections are primarily used for customer browsing, product discovery, homepage featured collections, landing pages, category organization, catalogue organization, search, and marketing campaigns.

A Collection must not own Products directly. Products should reference Collection using `collectionIds`.

---

## Responsibilities

The Collection entity is responsible for:

- Representing one curated product discovery group.
- Helping customers browse related products by style, use case, configuration, lifestyle, room need, or campaign.
- Supporting homepage featured collections.
- Supporting collection landing pages.
- Supporting collection hero banners and thumbnails.
- Supporting category organization without becoming a Category.
- Supporting catalogue organization.
- Supporting search and filters.
- Supporting marketing campaigns.
- Supporting seasonal or promotional groupings.
- Supporting future AI recommendations.
- Providing a stable discovery reference for Products, Catalogues, Enquiries, Wishlist, and Design Your Space Requests.

---

## Required Fields

| Name | Data Type | Required or Optional | Description | Validation Rules |
|---|---|---:|---|---|
| `id` | UUID String | Required | Internal stable identifier for the Collection. | Must be a valid UUID. Must never change after creation. |
| `companyId` | UUID String | Required | Reference to the Company that owns the Collection. | Must reference one valid Company. |
| `name` | String | Required | Public collection name shown to customers. | Must not be empty. Recommended length: 2-120 characters. |
| `slug` | String | Required | Public URL-safe identifier for the Collection. | Must be lowercase, hyphen-separated, and stable. Should not contain spaces or special characters. |
| `description` | String | Required | Customer-facing explanation of the Collection. | Must not be empty. Should describe the collection clearly and professionally. |
| `collectionType` | Controlled String | Required | Defines the type of curated grouping. | Must use a controlled value such as `styleBased`, `categoryBased`, `roomBased`, `seasonal`, `campaign`, `premium`, or `custom`. |
| `categoryIds` | Array of UUID Strings | Required | References to one or more Categories this Collection belongs to or supports. | Must contain at least one valid Category reference. |
| `status` | Controlled String | Required | Lifecycle state of the Collection record. | Must use a controlled status value such as `active`, `inactive`, `draft`, or `archived`. |
| `createdAt` | ISO 8601 Date String | Required | Timestamp when the Collection record was created. | Must be a valid ISO 8601 timestamp. |
| `updatedAt` | ISO 8601 Date String | Required | Timestamp when the Collection record was last updated. | Must be a valid ISO 8601 timestamp. Must not be earlier than `createdAt`. |

---

## Optional Fields

| Name | Data Type | Description | Validation Rules |
|---|---|---|---|
| `publicId` | String | Safe public-facing identifier if the Collection needs to be referenced externally. | Must be stable and unique if used. |
| `displayName` | String | Customer-facing display name if different from `name`. | Should not conflict with the Collection name. |
| `shortDescription` | String | Short customer-facing summary of the Collection. | Should be concise and suitable for cards, previews, or featured sections. |
| `parentCollectionId` | UUID String | Future reference to a parent Collection if collection grouping is introduced. | Must reference a valid Collection when provided. Must not create circular relationships. |
| `brandId` | UUID String | Optional reference to Brand when a Collection uses specific brand positioning or campaign identity. | Must reference a valid Brand when provided. Must not duplicate Brand identity fields. |
| `roomSpaceTypeIds` | Array of UUID Strings | References to Room / Space Types commonly associated with this Collection. | Each value must reference a valid Room / Space Type. |
| `relatedMaterialIds` | Array of UUID Strings | References to Materials commonly associated with this Collection. | Each value must reference a valid Material. Must not duplicate Material details. |
| `relatedFinishIds` | Array of UUID Strings | References to Finishes commonly associated with this Collection. | Each value must reference a valid Finish. Must not duplicate Finish details. |
| `searchKeywords` | Array of Strings | Search-friendly terms customers may use to find this Collection. | Should contain customer-facing search terms. Must not replace structured relationships. |
| `filterTags` | Array of Strings | Discovery tags used to support collection-level filtering or grouping. | Should be controlled where possible. Must not duplicate Product-specific filters. |
| `campaignContext` | Object | Optional marketing context for campaign-based or seasonal Collections. | Should describe campaign meaning only. Must not replace Brand, Product, or Catalogue data. |
| `seasonalContext` | Object | Optional seasonal context for limited-time or theme-based Collections. | Should be used only when seasonality is relevant. |
| `mediaReferences` | Array of Media Reference | Collection-specific media such as hero banners, thumbnails, lifestyle images, campaign images, or inspiration visuals. | Must reference valid Media Assets. |
| `seoMetadata` | SEO Metadata | Search and social metadata for a public Collection page. | Should follow the SEO Metadata shared value object. |
| `visibilitySettings` | Visibility Settings | Controls whether the Collection is visible, featured, or ordered in business-controlled contexts. | Should support homepage featured collections and collection ordering. Should not be used for page layout decisions. |
| `localizations` | Array of Localization Text | Translated customer-facing Collection content. | Locale values should follow the approved localization strategy. |
| `versionInformation` | Version Information | Revision details for Collection content if naming, description, campaign context, or publishing status changes over time. | Should follow the approved versioning strategy when used. |
| `metadata` | Object | Flexible non-primary information for future integrations or migration support. | Must not contain business-critical fields, Company data, Brand identity, Product details, Category details, or Catalogue details. |
| `isDeleted` | Boolean | Soft deletion flag. | Should be `false` for active Collection records. |
| `deletedAt` | ISO 8601 Date String | Timestamp for soft deletion. | Required only when `isDeleted` is `true`. |

---

## Relationships

### Company

A Collection belongs to exactly one Company.

Relationship field:

- `companyId`

The Company owns the business.  
The Collection represents a business-owned curated discovery grouping.

The Company should not store large Collection lists directly. Collections should identify their owner through `companyId`.

---

### Categories

A Collection may belong to one or more Categories.

Relationship field:

- `categoryIds`

This allows a Collection to support one Category or span multiple Categories when needed.

Example:

- A Sliding Wardrobes Collection belongs to Wardrobes.
- A Luxury Living Collection may reference TV Units, Dining Furniture, and Office Furniture.

Categories do not own Collections.  
Collections reference Categories.

---

### Parent Collection

A Collection may optionally belong to another Collection.

Relationship field:

- `parentCollectionId`

This supports future grouping such as:

- Wardrobes Collection
  - Sliding Wardrobes
  - Hinged Wardrobes
  - Walk-in Wardrobes

Parent collection relationships should use references and must not duplicate parent collection information.

---

### Brand

A Collection may optionally reference Brand when it needs specific brand positioning, campaign identity, or future sub-brand support.

Relationship field:

- `brandId`

The Collection must not duplicate Brand responsibilities such as logo, colors, typography, tagline, or tone of voice.

---

### Products

Products may belong to one or more Collections.

Relationship direction:

- Each Product should reference Collections through `collectionIds`.

The Collection must not store `productIds` because Product volume can grow over time and Products own their collection references.

---

### Catalogues

Catalogues may reference one or more Collections.

Relationship direction:

- Each Catalogue may reference Collections through `collectionIds`.

The Collection must not store `catalogueIds` because Catalogues may expand, change, and version over time.

---

### Room / Space Types

A Collection may be associated with one or more Room / Space Types.

Relationship field:

- `roomSpaceTypeIds`

This supports room-based browsing, such as bedroom collections, kitchen collections, living room collections, office collections, or commercial space collections.

---

### Materials

A Collection may reference Materials commonly associated with the curated grouping.

Relationship field:

- `relatedMaterialIds`

The Collection should not duplicate Material details.

---

### Finishes

A Collection may reference Finishes commonly associated with the curated grouping.

Relationship field:

- `relatedFinishIds`

The Collection should not duplicate Finish details.

---

### Media Assets

A Collection may reference multiple Media Assets.

Relationship field:

- `mediaReferences`

Collection media may include hero banners, thumbnails, lifestyle visuals, campaign images, inspiration photos, or future collection videos.

The Collection should reference Media Assets through Media References instead of storing raw file paths.

---

### Enquiries

A Collection may be referenced by customer Enquiries.

Relationship direction:

- Each Enquiry may reference Collections through `collectionIds`.

The Collection should not store `enquiryIds` because enquiry volume may grow continuously.

---

### Wishlist

A Collection may be saved in a Wishlist.

Relationship direction:

- Wishlist items may reference Collection through `collectionId`.

The Collection should not store wishlist history directly.

---

### Design Your Space Requests

A Collection may be referenced by Design Your Space Requests.

Relationship direction:

- Each Design Your Space Request may reference Collections through `collectionIds`.

The Collection should not store design request history directly.

---

## Business Rules

- A Collection must belong to exactly one Company.
- A Collection must have a stable internal `id`.
- A Collection must have a valid `companyId`.
- A Collection must have a customer-facing `name`.
- A Collection must have a stable SEO-friendly `slug`.
- A Collection must reference at least one Category through `categoryIds`.
- A Collection must represent a curated discovery grouping, not a broad furniture classification.
- A Collection must not be treated as a Category.
- Categories must not own Collections.
- Collections must reference Categories using `categoryIds`.
- A Collection must not contain Product details directly.
- A Collection must not store `productIds`.
- Products must reference Collections using `collectionIds`.
- Catalogues must reference Collections using `collectionIds`.
- Collection-specific media must use Media References.
- Collection search keywords must support discovery and must not replace structured relationships.
- Collection filter tags must describe collection-level discovery only and must not duplicate Product-level filter data.
- Parent collection relationships must not create circular collection trees.
- A Collection must not contain Company responsibilities such as legal identity, business history, contact ownership, locations, warranties, or service ownership.
- A Collection must not contain Brand responsibilities such as logo identity, brand colors, typography, tagline, tone of voice, or visual identity.
- A Collection must not contain Category responsibilities such as being the broad furniture classification source.
- A Collection must not contain Product responsibilities such as materials, finishes, measurements, variants, warranty policy selection, or product media galleries.
- Large child relationships such as Products, Catalogues, Enquiries, Wishlists, and Design Your Space Requests should reference Collection from the child entity.
- `metadata` must not become a hidden place for core collection data.
- Soft deletion should preserve Collection history and must not automatically erase Products, Categories, Catalogues, Enquiries, Wishlists, or Design Your Space Requests.
- Collection status must control whether the Collection is considered active, inactive, draft, or archived.

---

## Shared Value Objects Used

The Collection entity uses the following Shared Value Objects:

- Media Reference
- SEO Metadata
- Visibility Settings
- Localization Text
- Version Information

The Collection must not use Address, Contact Information, Business Hours, Geo Coordinates, or Measurement because those responsibilities belong to Location, Company, Product, Product Variant, Design Your Space Request, or future Quotation contexts.

---

## Future Expansion

The Collection entity can evolve without breaking compatibility by adding optional fields or relationships rather than changing existing required fields.

Future expansion may include:

- Homepage featured collections.
- Collection landing pages.
- Collection hero banners.
- Collection thumbnails.
- Collection-specific catalogues.
- Collection-specific SEO.
- Collection-specific media galleries.
- Seasonal collections.
- Campaign-based collections.
- Premium or luxury collections.
- Room-based collection browsing.
- Multi-category collections.
- Collection-specific recommendations.
- AI-assisted recommendations.
- Collection-specific videos.
- Collection-specific FAQs.
- CMS-managed collection ordering.
- Collection publishing workflows.
- Multilingual collection content.
- Collection analytics.

Stable fields such as `id`, `companyId`, `name`, `slug`, `collectionType`, and `categoryIds` should remain backward compatible.

New collection capabilities should be added through optional fields, Shared Value Objects, or references to separate future entities instead of expanding Collection into an oversized record.

Products and Catalogues should continue to reference Collection rather than being embedded inside Collection.

---

## Example JSON

```json
{
  "id": "7a2e44d2-2e16-4f20-a214-19fd28f71001",
  "publicId": "sfg-collection-sliding-wardrobes",
  "companyId": "8e2b5c4a-4f6d-4f91-9f9e-2d7c2f36b601",
  "name": "Sliding Wardrobes",
  "displayName": "Sliding Wardrobes",
  "slug": "sliding-wardrobes",
  "description": "Sliding Wardrobes is a curated collection of space-saving wardrobe designs built for modern bedrooms, clean layouts, smooth access, and elegant storage.",
  "shortDescription": "Space-saving wardrobe designs for modern bedrooms.",
  "collectionType": "categoryBased",
  "categoryIds": [
    "d21a0f91-3774-4c52-97f9-8932d2dc1001"
  ],
  "parentCollectionId": null,
  "brandId": "f2a3d3d1-4b87-4ef2-9a21-6d5c9e6a1201",
  "roomSpaceTypeIds": [
    "c8a14c7f-9113-4b8b-9273-44ffcaad1001"
  ],
  "relatedMaterialIds": [],
  "relatedFinishIds": [],
  "searchKeywords": [
    "sliding wardrobe",
    "custom sliding wardrobe",
    "bedroom wardrobe",
    "space saving wardrobe",
    "wardrobe design goa"
  ],
  "filterTags": [
    "wardrobe",
    "bedroom",
    "spaceSaving",
    "customFurniture",
    "engineeredWood",
    "plywood"
  ],
  "campaignContext": {
    "campaignName": "",
    "campaignType": "",
    "campaignMessage": ""
  },
  "seasonalContext": {
    "isSeasonal": false,
    "seasonName": "",
    "displayText": ""
  },
  "mediaReferences": [
    {
      "mediaAssetId": "8f43e0c4-7e4c-4dc1-a951-b65b64f21001",
      "role": "collectionHero",
      "altText": "Sliding wardrobe designs by Star Furniture Goa",
      "caption": "Sliding Wardrobes",
      "displayOrder": 1,
      "isFeatured": true
    },
    {
      "mediaAssetId": "a44f6e45-72df-4b2d-8d84-42d6c8e91001",
      "role": "collectionThumbnail",
      "altText": "Modern sliding wardrobe with custom storage",
      "caption": "Custom Sliding Wardrobes",
      "displayOrder": 2,
      "isFeatured": false
    }
  ],
  "seoMetadata": {
    "seoTitle": "Sliding Wardrobes in Goa | Star Furniture Goa",
    "seoDescription": "Explore custom sliding wardrobe designs by Star Furniture Goa, crafted for modern bedrooms, elegant storage, and space-saving layouts.",
    "canonicalUrl": "https://starfurnituregoa.com/collections/sliding-wardrobes",
    "ogTitle": "Sliding Wardrobes",
    "ogDescription": "Space-saving custom wardrobe designs for modern bedrooms.",
    "ogImageId": "8f43e0c4-7e4c-4dc1-a951-b65b64f21001",
    "keywords": [
      "sliding wardrobes goa",
      "custom wardrobe goa",
      "bedroom wardrobe design goa"
    ]
  },
  "visibilitySettings": {
    "isVisible": true,
    "isFeatured": true,
    "displayOrder": 1,
    "visibilityStatus": "published"
  },
  "versionInformation": {
    "version": 1,
    "versionLabel": "Initial Collection Definition",
    "versionStatus": "published",
    "effectiveFrom": "2026-07-11T00:00:00+05:30",
    "effectiveTo": null,
    "changeSummary": "Initial collection definition for Sliding Wardrobes."
  },
  "status": "active",
  "createdAt": "2026-07-11T00:00:00+05:30",
  "updatedAt": "2026-07-11T00:00:00+05:30",
  "metadata": {
    "source": "initialDataModel"
  },
  "isDeleted": false,
  "deletedAt": null
}
```

---

# Relationship Summary

This section will summarize all entity relationships after every entity has been modeled.

It will provide a high-level overview of one-to-one, one-to-many, and many-to-many relationships across the application.

This section will be completed once the entity modeling phase is finished.




