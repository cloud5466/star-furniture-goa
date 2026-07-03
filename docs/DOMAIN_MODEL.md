# Star Furniture Goa

## Domain Model

Version: 1.0

Status: Approved

Last Updated: July 2026

Author:
Project Architecture Team

---

## Purpose

This document defines the business domain of the Star Furniture Goa application.

It serves as the single source of truth for the business concepts represented throughout the system.

The purpose of this document is to establish a stable business model before implementation begins.

This document intentionally avoids implementation details such as React components, APIs, database schemas, or UI layouts.

Those concerns are documented separately.

Core Domain
Company
Brand
Category
Collection
Product
Catalogue
Review
Wishlist
Showroom
Design Your Space Request
Enquiry
Supporting Domain
Product Variant
Room / Space Type
Measurement
Material
Finish
Warranty Policy
Service Offering
Media Asset
Customer Segment
Enquiry Channel
Future Domain
Customer Account
Appointment
Quotation
Completed Project / Portfolio
Recommendation
Lead Pipeline
Domain Refinements
Company and Brand are separate entities
Company and Brand are related but not the same.
Company represents the business identity, operations, history, services, showrooms, warranties, and contact ownership.
Brand represents the market-facing identity: logo, tagline, tone of voice, colors, typography, visual style, and luxury positioning.
A Company owns one primary Brand. In the future, the same Company could support sub-brands, collection-specific branding, showroom-specific branding, or campaign branding without changing core business information.
Collection introduced as a separate entity
Collection is not the same as Category.
Category describes what type of furniture something is.
Examples:
Wardrobes
Kitchens
Beds
TV Units
Collection describes a curated commercial or design grouping.
Examples:
Luxury Living Collection
Minimal Series
Premium Bedroom Collection
A Collection may contain products from multiple categories.
Navigation removed from the business domain model
Navigation should not remain a business entity.
Navigation is a presentation and customer journey concern. It determines how customers move through the website, but it does not represent a business object like Product, Catalogue, Showroom, or Enquiry.
Navigation should be documented later in the UI / UX guidelines or application structure documentation.
Search & Filter Criteria removed from the business domain model
Search and filters should not remain standalone domain entities.
They are application discovery capabilities, not core business entities. They use domain entities such as Product, Category, Collection, Material, Finish, Room / Space Type, Catalogue, and Warranty Policy.
Search and filters should be documented later in application behavior, data model, or UI / UX documentation.
Catalogue Document merged into Catalogue
Catalogue metadata and the catalogue file belong to the same business concept at this stage.
A Catalogue may reference one or more media assets, including PDF files, but Catalogue remains the business entity.
Wishlist Item remains part of Wishlist
Wishlist Item is not a top-level business entity.
It exists only inside a Wishlist to describe saved products, product variants, categories, collections, or catalogues.
Lead Status merged into Enquiry and Design Your Space Request
Lead status is a state of a customer enquiry or custom design request.
It should not exist as a standalone entity.
Attribute-Only Concepts
Contact Details
Belongs to Company, Showroom, Enquiry, or Customer Account.
Address
Belongs to Showroom or Company.
Social Media Links
Belong to Company, Brand, or Enquiry Channel.
Warranty Duration
Belongs to Warranty Policy.
Catalogue File URL
Belongs to Catalogue through Media Asset.
Wishlist Item
Belongs inside Wishlist.
Lead Status
Belongs as an attribute of Enquiry or Design Your Space Request.
Navigation Link
Belongs in UI / UX documentation, not the business domain model.
Search Query
Belongs in application behavior documentation, not the business domain model.
Business Domains
1. Business Identity Domain
Company
Classification: Core Domain
Purpose
Represents Star Furniture Goa as the operating business, manufacturer, wholesaler, retailer, and service provider.
Responsibilities
Own business information.
Own company history.
Own legal and operational identity.
Own contact details.
Own showrooms.
Own warranty policies.
Own service offerings.
Represent the business behind all products, catalogues, enquiries, and showroom visits.
Relationships
Owns one primary Brand.
Has many Categories.
Has many Collections.
Has many Products.
Has many Catalogues.
Has one or more Showrooms.
Has many Reviews.
Has many Enquiry Channels.
Offers many Service Offerings.
Owns Warranty Policies.
Why It Exists
The website must communicate the real business behind the furniture: its credibility, history, services, showroom presence, and customer trust.
Future Scalability Considerations
Can support multiple showrooms.
Can support multiple brands or sub-brands.
Can support business certifications, awards, and team profiles.
Can support future admin or CMS-managed business information.
Brand
Classification: Core Domain
Purpose
Represents the market-facing identity of Star Furniture Goa.
Responsibilities
Own logo identity.
Own brand colors.
Own typography direction.
Own visual identity.
Own luxury positioning.
Own tagline.
Own tone of voice.
Own marketing personality.
Relationships
Belongs to Company.
Influences Catalogues, Collections, Media Assets, Reviews, and customer-facing messaging.
Supports Company trust and premium positioning.
Why It Exists
The business identity and visual identity evolve differently. Separating Brand from Company keeps business facts stable while allowing the brand presentation to mature over time.
Future Scalability Considerations
Can support campaign branding.
Can support collection-specific visual identities.
Can support seasonal brand directions.
Can support future rebranding without changing Company data.
Service Offering
Classification: Supporting Domain
Purpose
Represents services offered by Star Furniture Goa beyond individual products.
Responsibilities
Explain custom measurement.
Explain consultation.
Explain manufacturing.
Explain delivery.
Explain installation.
Explain design support.
Relationships
Belongs to Company.
Supports Products, Categories, Collections, Showrooms, Enquiries, and Design Your Space Requests.
Why It Exists
The business sells both furniture and confidence in the complete service journey.
Future Scalability Considerations
Can support dedicated service pages.
Can support service packages.
Can support appointment booking.
Can support consultation workflows.
Warranty Policy
Classification: Supporting Domain
Purpose
Represents warranty promises provided by Star Furniture Goa.
Responsibilities
Define warranty coverage.
Define warranty duration.
Connect warranty promises to materials and product types.
Reinforce customer trust.
Relationships
Belongs to Company.
Applies to Products, Product Variants, and Materials.
Supports Catalogues and Enquiries.
Why It Exists
Warranty is a major trust signal for engineered wood and plywood furniture.
Future Scalability Considerations
Can support product-specific warranties.
Can support warranty documents.
Can support warranty registration.
Can support warranty claim workflows.
2. Product, Category & Collection Domain
Category
Classification: Core Domain
Purpose
Represents a furniture type or business product group.
Responsibilities
Organize products by furniture type.
Help customers browse by need.
Support product discovery.
Support catalogue grouping.
Relationships
Contains many Products.
Can be linked to many Catalogues.
Can be linked to Room / Space Types.
Can be included in Design Your Space Requests.
Can be represented by Media Assets.
Why It Exists
Customers often begin with a furniture need, such as wardrobes, kitchens, beds, or TV units.
Future Scalability Considerations
Can support nested categories.
Can support category-specific catalogues.
Can support SEO category pages.
Can support category-specific filtering later.
Collection
Classification: Core Domain
Purpose
Represents a curated commercial or design grouping of products.
Responsibilities
Group products around a style, theme, quality tier, room concept, or marketing idea.
Support premium merchandising.
Help customers browse furniture by lifestyle or design direction rather than product type.
Support campaigns and curated product discovery.
Relationships
Belongs to Company.
Is influenced by Brand.
Contains Products from one or more Categories.
Can reference Materials, Finishes, Room / Space Types, Catalogues, and Media Assets.
Can be used in Enquiries, Wishlists, and Design Your Space Requests.
Why It Exists
Categories answer “what type of furniture is this?” Collections answer “what design story or lifestyle does this belong to?” This distinction is important for a premium furniture brand.
Future Scalability Considerations
Can support seasonal collections.
Can support premium and budget ranges.
Can support campaign landing pages.
Can support collection-specific catalogues.
Can support curated showroom displays.
Product
Classification: Core Domain
Purpose
Represents a furniture item, concept, or solution offered by Star Furniture Goa.
Responsibilities
Describe the furniture offering.
Communicate use case, material, finish, dimensions, customization, and warranty relevance.
Support customer discovery and enquiry.
Represent the core commercial offering.
Relationships
Belongs to one or more Categories.
Can belong to one or more Collections.
Can have Product Variants.
Can use Materials, Finishes, Measurements, and Warranty Policies.
Can have Media Assets.
Can appear in Catalogues.
Can be saved in Wishlist.
Can be referenced in Enquiries and Design Your Space Requests.
Can be associated with Reviews.
Why It Exists
Products are the main business offering and the primary object customers evaluate before making an enquiry.
Future Scalability Considerations
Can support product detail pages.
Can support related products.
Can support quotation requests.
Can support recommendations.
Can support room-based product discovery.
Product Variant
Classification: Supporting Domain
Purpose
Represents a specific configuration of a product.
Responsibilities
Capture variation by size, finish, material, layout, or customization.
Represent customer-selectable product options.
Avoid duplicating the base Product.
Relationships
Belongs to Product.
Can reference Materials, Finishes, Measurements, Warranty Policies, and Media Assets.
Can be saved in Wishlist.
Can be referenced in Enquiries, Design Your Space Requests, and future Quotations.
Why It Exists
Custom furniture often has multiple valid configurations for the same product concept.
Future Scalability Considerations
Can support price ranges.
Can support configurable products.
Can support visual customization.
Can support online quotation workflows.
Measurement
Classification: Supporting Domain
Purpose
Represents dimensions and size-related information for furniture and customer spaces.
Responsibilities
Capture product dimensions.
Capture variant dimensions.
Capture customer-provided room or furniture measurements.
Support custom furniture planning.
Support future quotation accuracy.
Relationships
Can belong to Product.
Can belong to Product Variant.
Can belong to Design Your Space Request.
Can later belong to Quotation.
Can relate to Room / Space Type.
Why It Exists
Furniture is dimension-sensitive. Size, fit, wall space, height, depth, and layout are central to customer decisions and custom manufacturing.
Future Scalability Considerations
Can support measurement units.
Can support room measurements.
Can support installation constraints.
Can support measurement uploads or sketches.
Can support quotation and manufacturing workflows.
Material
Classification: Supporting Domain
Purpose
Represents the material used in furniture.
Responsibilities
Explain durability and quality.
Support warranty distinctions.
Help customers compare options.
Support product education.
Relationships
Used by Products and Product Variants.
Connected to Warranty Policies.
Can be referenced in Catalogues, Collections, and Design Your Space Requests.
Why It Exists
Material quality is central to Star Furniture Goa’s credibility and warranty promise.
Future Scalability Considerations
Can support material comparison.
Can support premium upgrades.
Can support supplier or specification details.
Finish
Classification: Supporting Domain
Purpose
Represents visible surface style, color, texture, laminate, matte finish, gloss finish, or wood grain.
Responsibilities
Capture aesthetic customization options.
Support customer preference.
Support visual product discovery.
Relationships
Used by Products and Product Variants.
Can be referenced in Collections, Catalogues, and Design Your Space Requests.
Can be represented by Media Assets.
Why It Exists
Furniture decisions are highly visual, and finishes are central to perceived quality and style.
Future Scalability Considerations
Can support swatches.
Can support finish families.
Can support visual configurators.
Can support room-style recommendations.
Room / Space Type
Classification: Supporting Domain
Purpose
Represents the space where furniture is used.
Responsibilities
Classify customer needs by room or space.
Support product and collection discovery.
Improve Design Your Space Request context.
Relationships
Can be associated with Categories.
Can be associated with Products and Collections.
Can be referenced in Design Your Space Requests.
Can appear in Catalogues.
Can relate to Measurements.
Why It Exists
Customers often think in terms of spaces: kitchen, bedroom, living room, office, commercial area, or prayer space.
Future Scalability Considerations
Can support room-based catalogues.
Can support room planner tools.
Can support bundled furniture solutions.
3. Catalogue & Media Domain
Catalogue
Classification: Core Domain
Purpose
Represents a curated furniture catalogue for a product line, category, collection, room type, or design theme.
Responsibilities
Group product ideas and references.
Support customer inspiration.
Support category and collection discovery.
Act as a sales-support asset.
Relationships
Can belong to Categories.
Can belong to Collections.
Can reference Products, Materials, Finishes, and Room / Space Types.
Can have Media Assets.
Can be referenced in Enquiries, Wishlist, and Design Your Space Requests.
Why It Exists
Catalogues are major business assets for furniture discovery and customer decision-making.
Future Scalability Considerations
Can support PDF catalogues.
Can support cloud-hosted catalogue assets.
Can support catalogue versions.
Can support category-specific and collection-specific catalogues.
Can support downloadable and shareable catalogues.
Media Asset
Classification: Supporting Domain
Purpose
Represents business-owned media used to communicate products, categories, collections, catalogues, brand, showroom, and services.
Responsibilities
Represent images.
Represent PDF catalogues.
Represent videos.
Represent 360-degree product or showroom views.
Represent future virtual tours.
Capture the business meaning of each asset.
Identify which business entity the asset supports.
Relationships
Can belong to Brand.
Can belong to Company.
Can belong to Product.
Can belong to Product Variant.
Can belong to Category.
Can belong to Collection.
Can belong to Catalogue.
Can belong to Showroom.
Can later belong to Completed Project / Portfolio or Review.
Why It Exists
The business is highly visual. Media assets are not just files; they are sales, trust, and discovery assets.
Future Scalability Considerations
Can support alt text and captions.
Can support ordering and featured media.
Can support multiple media types.
Can support cloud storage.
Can support responsive image versions.
Can support virtual tours and 360-degree experiences without changing the core model.
4. Trust & Social Proof Domain
Review
Classification: Core Domain
Purpose
Represents customer feedback and social proof.
Responsibilities
Communicate customer satisfaction.
Build trust.
Highlight craftsmanship, service, delivery, and installation quality.
Support conversion into enquiries.
Relationships
Belongs to Company.
Can reference Product, Category, Collection, Showroom, or Completed Project / Portfolio.
Can be associated with Customer Segment.
Can have Media Assets in the future.
Why It Exists
Custom furniture requires trust. Reviews help customers feel confident before contacting the business.
Future Scalability Considerations
Can support review source tracking.
Can support product-specific reviews.
Can support image testimonials.
Can support moderation.
Can support imported third-party reviews.
5. Customer Intent & Conversion Domain
Wishlist
Classification: Core Domain
Purpose
Represents a customer’s saved interest in products, variants, categories, collections, or catalogues.
Responsibilities
Store customer-selected items.
Support comparison.
Support future enquiry or showroom visit preparation.
Preserve customer intent while browsing.
Relationships
Can contain Products.
Can contain Product Variants.
Can contain Categories.
Can contain Collections.
Can contain Catalogues.
Can be connected to Enquiries.
Can be connected to Design Your Space Requests.
Can later belong to Customer Account.
Why It Exists
Furniture purchases are considered decisions. Customers often need to save and compare options before enquiring.
Future Scalability Considerations
Can support persistent saved lists.
Can support sharing with family, architects, or showroom staff.
Can support quotation conversion.
Can support customer accounts.
Design Your Space Request
Classification: Core Domain
Purpose
Represents a customer request for custom furniture planning, consultation, or design assistance.
Responsibilities
Capture customer requirements.
Capture room type.
Capture furniture need.
Capture measurements.
Capture preferred materials and finishes.
Capture inspiration and contact intent.
Convert browsing interest into a qualified business lead.
Relationships
Can reference Customer Segment.
Can reference Room / Space Type.
Can reference Measurements.
Can reference Categories, Collections, Products, Product Variants, Materials, Finishes, Catalogues, and Wishlist.
Can create or become an Enquiry.
Can later lead to Appointment or Quotation.
Why It Exists
Star Furniture Goa specializes in custom furniture. Customer needs must be captured beyond simple product browsing.
Future Scalability Considerations
Can support room photo uploads.
Can support measurement sketches.
Can support consultation scheduling.
Can support quotation workflows.
Can support project tracking.
Enquiry
Classification: Core Domain
Purpose
Represents customer intent to contact Star Furniture Goa.
Responsibilities
Capture why the customer is contacting the business.
Capture enquiry source.
Capture contact intent.
Connect interest to products, catalogues, collections, showroom visits, wishlist items, or design requests.
Support WhatsApp enquiries and showroom visit generation.
Relationships
Can originate from Product, Product Variant, Category, Collection, Catalogue, Wishlist, Showroom, Design Your Space Request, or general contact.
Uses an Enquiry Channel.
May reference Customer Segment.
May later lead to Appointment, Quotation, or Lead Pipeline.
Why It Exists
Enquiries are the main measurable business outcome of the website.
Future Scalability Considerations
Can support lead tracking.
Can support customer follow-up.
Can support quotation stages.
Can support campaign attribution.
Can support future CRM workflows.
Enquiry Channel
Classification: Supporting Domain
Purpose
Represents the method by which customers contact the business.
Responsibilities
Define contact paths such as WhatsApp, phone, Instagram, showroom visit, website form, or map directions.
Support customer preference.
Support business conversion tracking by channel.
Relationships
Used by Enquiries.
Belongs to Company or Showroom.
Can support Service Offerings.
Why It Exists
Different customers prefer different communication methods. WhatsApp and showroom visits are especially important to the business.
Future Scalability Considerations
Can support multiple phone numbers.
Can support channel performance analytics.
Can support campaign-specific contact paths.
Can support department-specific routing.
Customer Segment
Classification: Supporting Domain
Purpose
Represents the main audience groups served by the business.
Responsibilities
Classify customer intent.
Support messaging relevance.
Help understand enquiry quality and customer needs.
Relationships
Can be associated with Enquiries.
Can be associated with Design Your Space Requests.
Can influence Products, Collections, Catalogues, and Service Offerings.
Why It Exists
Homeowners, architects, interior designers, and commercial clients have different expectations and decision criteria.
Future Scalability Considerations
Can support segment-specific content.
Can support lead routing.
Can support marketing campaigns.
Can support catalogue recommendations.
6. Showroom Domain
Showroom
Classification: Core Domain
Purpose
Represents a physical location where customers can visit Star Furniture Goa.
Responsibilities
Store showroom identity.
Store address and contact context.
Encourage showroom visits.
Support map-based discovery.
Support local trust.
Relationships
Belongs to Company.
Can have Media Assets.
Can receive Enquiries.
Can be associated with Reviews.
Can later have Appointments.
Can use Enquiry Channels.
Why It Exists
Showroom visits are one of the website’s primary business goals.
Future Scalability Considerations
Can support multiple showroom locations.
Can support business hours.
Can support appointment booking.
Can support showroom-specific media.
Can support local SEO content.
7. Future Business Domains
Customer Account
Classification: Future Domain
Purpose
Represents a known customer with saved preferences, wishlist, enquiry history, and future account-based features.
Responsibilities
Own persistent customer identity.
Store preferences.
Store activity history.
Support repeat interactions.
Relationships
Can own Wishlist.
Can submit Enquiries and Design Your Space Requests.
Can create Appointments and Quotations.
Why It Exists
Not required for the initial website, but useful when the business supports persistent customer experiences.
Future Scalability Considerations
Can support login.
Can support saved projects.
Can support customer dashboards.
Can support personalized recommendations.
Appointment
Classification: Future Domain
Purpose
Represents a scheduled showroom visit, measurement visit, or design consultation.
Responsibilities
Capture appointment type.
Capture preferred date and time.
Capture customer intent.
Connect appointment to a business opportunity.
Relationships
Can originate from Enquiry, Design Your Space Request, Wishlist, Product, Collection, or Showroom.
Why It Exists
The business may later formalize showroom visits and consultations.
Future Scalability Considerations
Can support calendars.
Can support reminders.
Can support staff assignment.
Can support appointment outcomes.
Quotation
Classification: Future Domain
Purpose
Represents an estimate for custom furniture or selected products.
Responsibilities
Capture requested items.
Capture measurements.
Capture materials and finishes.
Capture quotation status.
Relationships
Can originate from Enquiry, Design Your Space Request, Wishlist, Product, Product Variant, Collection, or Appointment.
Can use Measurements, Materials, Finishes, and Warranty Policies.
Why It Exists
Custom furniture sales often progress from enquiry to consultation to quotation.
Future Scalability Considerations
Can support online quotations.
Can support revision history.
Can support approvals.
Can support customer accounts.
Completed Project / Portfolio
Classification: Future Domain
Purpose
Represents completed furniture work or installed projects.
Responsibilities
Showcase craftsmanship.
Document completed spaces.
Communicate customer outcomes.
Support proof of work.
Relationships
Can reference Products, Categories, Collections, Room / Space Types, Materials, Finishes, Measurements, Media Assets, and Reviews.
Why It Exists
Custom furniture businesses benefit strongly from proof of completed work.
Future Scalability Considerations
Can support portfolio pages.
Can support case studies.
Can support commercial project showcases.
Can support SEO content.
Recommendation
Classification: Future Domain
Purpose
Represents suggested products, catalogues, categories, collections, or design ideas.
Responsibilities
Connect customers with relevant or complementary furniture options.
Support discovery and cross-selling.
Relationships
Can reference Products, Categories, Collections, Catalogues, Room / Space Types, Wishlist, and Customer Segment.
Why It Exists
Furniture purchases often involve related products and complementary design choices.
Future Scalability Considerations
Can support manual recommendations.
Can support personalized suggestions.
Can support AI furniture recommendations.
Can support bundled furniture ideas.
Lead Pipeline
Classification: Future Domain
Purpose
Represents the internal business process for tracking enquiries from new lead to closed outcome.
Responsibilities
Track enquiry progress.
Support follow-up.
Organize customer communication stages.
Relationships
Applies to Enquiries, Design Your Space Requests, Appointments, and Quotations.
Why It Exists
Not needed for the initial public website, but valuable once enquiry volume grows.
Future Scalability Considerations
Can support CRM workflows.
Can support staff assignment.
Can support reminders.
Can support conversion reporting.

---

# Business Rules

The following business rules define how the core entities relate to one another.

## Company

- A Company owns exactly one primary Brand.
- A Company owns one or more Showrooms.
- A Company offers one or more Service Offerings.
- A Company owns Warranty Policies.
- A Company owns Categories, Collections, Products, Catalogues, and Reviews.

---

## Category

- A Product belongs to exactly one Category.
- A Category contains many Products.
- A Category may contain multiple Collections.

---

## Collection

- A Collection contains Products from one or more Categories.
- A Product may belong to multiple Collections.
- A Collection may appear in multiple Catalogues.

---

## Product

- A Product may have multiple Product Variants.
- A Product may reference multiple Materials.
- A Product may reference multiple Finishes.
- A Product may reference multiple Measurements.
- A Product may reference multiple Media Assets.
- A Product may appear in multiple Catalogues.
- A Product may appear in multiple Wishlists.
- A Product may generate multiple Enquiries.

---

## Catalogue

- A Catalogue may reference multiple Categories.
- A Catalogue may reference multiple Collections.
- A Catalogue may reference multiple Products.
- A Catalogue owns one or more Media Assets.

---

## Wishlist

- A Wishlist may contain Products.
- A Wishlist may contain Product Variants.
- A Wishlist may contain Collections.
- A Wishlist may contain Catalogues.

---

## Design Your Space Request

- A Design Request may reference Products.
- A Design Request may reference Collections.
- A Design Request may reference Measurements.
- A Design Request may become an Enquiry.

---

## Enquiry

- An Enquiry may originate from any customer interaction.
- An Enquiry uses one Enquiry Channel.
- An Enquiry may later become an Appointment or Quotation.

---

## Location

### Purpose

Represents a physical business location operated by Star Furniture Goa.

### Responsibilities

Stores location details, address, business hours, map information, contact details, and customer visit information.

A Location may represent different business facilities such as a factory, showroom, office, or warehouse.

### Relationships

Belongs to the Company.

May receive customer enquiries, appointments, and visits.

May contain media assets, business hours, geo coordinates, and contact information.

### Why It Exists

Star Furniture Goa currently operates from a factory where customers may visit.

The Location model allows the business to support future showrooms, offices, warehouses, or additional branches without changing the application architecture.

### Future Scalability Considerations

Supports:

- Multiple factories
- Multiple showrooms
- Warehouses
- Corporate offices
- Branch expansion
- Google Maps integration
- Location-specific business hours
- Location-specific contact information
- Location galleries
---

# Domain Relationship Overview

Company
│
├── Brand
├── Showrooms
├── Service Offerings
├── Warranty Policies
│
├── Categories
│      │
│      ├── Collections
│      │       │
│      │       ├── Products
│      │       │      ├── Product Variants
│      │       │      ├── Materials
│      │       │      ├── Finishes
│      │       │      ├── Measurements
│      │       │      └── Media Assets
│      │
│      └── Catalogues
│
├── Reviews
│
├── Wishlist
│
├── Enquiries
│      │
│      └── Design Your Space Requests
│
└── Customer Accounts (Future)




