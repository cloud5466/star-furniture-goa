This document is a living specification. It should be updated whenever architectural decisions change. All implementation work should follow this document unless explicitly overridden.

# Star Furniture Goa
# Architecture Guide

## Purpose

This document defines the architectural principles, engineering standards, and project conventions for the Star Furniture Goa website.

Every future implementation should follow these guidelines unless an architectural decision is intentionally revised.

---

# Architecture Philosophy

The project should prioritize:

- Scalability over short-term convenience.
- Readability over clever code.
- Reusable components over duplicated code.
- Feature-based organization.
- Separation of concerns.
- Performance by default.
- Accessibility by default.
- SEO by default.
- Incremental architecture evolution.

---

# Project Structure

The project follows a feature-based architecture.

Main features include:

- Home
- Collection
- Showroom
- Wishlist
- Design Your Space
- CTA
- Layout
- Shared UI

Each feature owns its own components whenever possible.

Shared UI should contain only reusable primitives.

---

# Routing Conventions

Display Name:

Our Collections

Route:

/collections

Dynamic category routes:

/collections/[categorySlug]

Dynamic product routes:

/products/[productSlug]

Do not duplicate route folders.

---

# Component Architecture

Components are organized by feature.

Example:

components/

home/

collection/

showroom/

cta/

layout/

shared-ui/

Business-specific components belong inside their feature folder.

Generic UI belongs in shared-ui.

Examples of shared UI:

- Button
- Input
- Card
- Modal
- Container
- Badge
- Spinner
- Skeleton

Examples of feature components:

- ProductCard
- CategoryCard
- ReviewCard
- CatalogueViewer

---

# Data Flow

Pages

↓

Feature Components

↓

Shared UI

↓

Hooks

↓

Services

↓

API / Database

Components never communicate directly with services.

Hooks own client-side behavior.

Services own external communication.

---

# Services

Services should:

- Fetch data
- Send data
- Handle integrations
- Transform API responses

Services should never:

- Render JSX
- Use React state
- Contain UI logic

---

# Hooks

Hooks own:

- Client-side state
- Business logic
- UI interactions

Hooks may call services.

Components should call hooks instead of services.

---

# Data Organization

Static content belongs in:

data/

Examples:

- Products
- Categories
- Reviews
- Company
- Navigation

Application constants belong in:

constants/

Examples:

- Routes
- Theme
- SEO defaults
- Storage configuration

---

# Types

Every domain object should have a dedicated type.

Examples:

- Product
- Category
- Catalogue
- Review
- Showroom
- Wishlist
- Enquiry

---

# Styling

Use Tailwind CSS.

Global styles belong in:

app/globals.css

Do not create multiple global stylesheets without architectural justification.

Design tokens belong in:

tailwind.config.ts

Examples:

- Colors
- Fonts
- Border Radius
- Shadows
- Spacing

---

# Assets

Organize assets using descriptive names.

Good:

wardrobe-sliding-white.webp

Bad:

1.webp

final-final.png

Folder structure:

public/

images/

products/

categories/

hero/

catalogues/

showroom/

icons/

logo/

---

# Catalogue Architecture

Catalogue metadata should remain separate from the viewer implementation.

The viewer should never depend on storage providers directly.

Future storage providers may include:

- Cloudflare R2
- Amazon S3

The viewer should work regardless of storage implementation.

---

# Wishlist

Wishlist behavior should be isolated from UI components.

Components should consume wishlist state through hooks.

Persistence strategy may evolve as the application grows.

---

# Search & Filters

Search and filters should be designed to support:

- URL state
- Deep linking
- Shareable searches

The initial implementation may remain simple.

---

# SEO

SEO defaults belong in:

constants/seo.ts

Reusable helpers belong in:

lib/seo.ts

Page-specific metadata belongs inside route files.

---

# Performance

Always prefer:

- Lazy loading
- Optimized images
- Code splitting
- Dynamic imports where appropriate
- Cloud-hosted catalogues

Never store large catalogue files inside the application repository.

---

# Future Expansion

The architecture should support future additions without major restructuring.

Potential future features include:

- CMS integration
- Admin Dashboard
- Authentication
- Multiple showroom locations
- Analytics
- Product recommendations
- AI-powered furniture search

Do not introduce these features until they are required.

---

# Engineering Rules

Always prefer:

- Small reusable components
- Clear naming
- Feature ownership
- Single responsibility
- Consistent folder structure

Avoid:

- Duplicated code
- Over-engineering
- Premature optimization
- Business logic inside UI components

Architecture should evolve only when the project requires it.