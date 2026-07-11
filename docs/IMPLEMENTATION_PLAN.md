# IMPLEMENTATION_PLAN.md

## Scope

This plan prepares the implementation foundation for the Star Furniture Goa website without building final UI, business logic, or production workflows yet.

The current project already contains the approved skeleton structure, including `app`, `components`, `hooks`, `services`, `constants`, `data`, `types`, `store`, `lib`, and `docs`. Implementation should preserve this structure and gradually replace responsibility-only files with working foundations.

---

## 1. Project Setup Tasks

### Goal

Prepare the existing Next.js project so future implementation can proceed consistently, safely, and without restructuring later.

### Files Affected

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `README.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/DESIGN_SYSTEM.md`
- `app/layout.tsx`
- `app/globals.css`

### Dependencies

- Approved architecture
- Domain model
- Data model
- Design system
- Existing project skeleton

### Tasks

1. Confirm the project uses the intended stack:
   - Next.js 15
   - TypeScript
   - Tailwind CSS v4
   - shadcn/ui
   - Motion
   - Lucide React

2. Add missing runtime and development dependencies only when implementation begins:
   - shadcn/ui dependencies
   - Lucide React
   - Motion
   - Class utility helpers if required by shadcn/ui
   - Testing tools when testing setup begins

3. Confirm script standards:
   - Development
   - Build
   - Lint
   - Type checking
   - Future test commands

4. Confirm path aliases match the approved architecture.

5. Keep all current route, component, hook, service, constant, data, type, and store folders intact.

### Expected Outcome

The project remains simple, compiles cleanly, and is ready for design token, component, layout, and page implementation without changing the approved architecture.

---

## 2. Design Token Implementation

### Goal

Translate the approved design system into reusable design tokens before building components.

### Files Affected

- `app/globals.css`
- `tailwind.config.ts`
- `constants/theme.ts`

### Dependencies

- `docs/DESIGN_SYSTEM.md`
- Approved visual identity
- Tailwind CSS configuration

### Tasks

1. Define semantic color tokens:
   - Charcoal
   - Warm background
   - Light background
   - Surface
   - Warm surface
   - Text primary
   - Text muted
   - Text inverse
   - Border light
   - Border dark
   - Gold accent
   - Success
   - Warning
   - Danger

2. Ensure the primary action color is charcoal `#191919`.

3. Reserve gold `#C9A24D` for:
   - Premium accents
   - Featured states
   - Selected states
   - Highlights
   - Secondary emphasis

4. Define typography tokens:
   - Inter for UI and body
   - Playfair Display for editorial and hero headings

5. Define reusable spacing, radius, shadow, transition, and grid tokens.

6. Correct any remaining design system references that still mention Poppins as the primary UI font.

### Expected Outcome

All future UI work uses shared tokens instead of one-off colors, spacing, shadows, or typography choices.

---

## 3. Tailwind Configuration

### Goal

Configure Tailwind CSS so it reflects the Star Furniture Goa design system and supports consistent implementation across pages and components.

### Files Affected

- `tailwind.config.ts`
- `app/globals.css`
- `postcss.config.mjs` if required
- `components.json` after shadcn/ui setup

### Dependencies

- Design tokens
- Tailwind CSS v4 setup
- shadcn/ui initialization requirements

### Tasks

1. Configure semantic Tailwind theme tokens.

2. Add font families:
   - `font-sans` for Inter
   - `font-display` for Playfair Display

3. Add reusable radius tokens:
   - Small controls
   - Standard cards
   - Large media

4. Add shadow tokens:
   - Soft card shadow
   - Modal shadow
   - Focus ring shadow

5. Add container and grid conventions:
   - Mobile padding
   - Tablet padding
   - Desktop max width
   - Large desktop max width
   - Editorial/catalogue width

6. Align Tailwind tokens with shadcn/ui CSS variables.

### Expected Outcome

Tailwind becomes the single styling foundation for all shared UI, layout, and feature components.

---

## 4. Font Integration

### Goal

Integrate brand typography in a performance-friendly way with no layout instability.

### Files Affected

- `app/layout.tsx`
- `app/globals.css`
- `constants/theme.ts`

### Dependencies

- Approved typography system
- Tailwind font tokens
- Next.js font support

### Tasks

1. Load Inter as the primary UI and body font.

2. Load Playfair Display for hero and editorial headings.

3. Expose both fonts through CSS variables.

4. Apply Inter globally.

5. Apply Playfair Display only through heading/editorial classes or component variants.

6. Avoid decorative or additional font families.

### Expected Outcome

Typography is consistent, premium, readable, and aligned with the approved design system.

---

## 5. shadcn/ui Initialization

### Goal

Initialize shadcn/ui as the accessible primitive layer while keeping Star Furniture Goa styling controlled through design tokens.

### Files Affected

- `components.json`
- `components/ui`
- `lib/utils.ts`
- `app/globals.css`
- `tailwind.config.ts`
- `tsconfig.json`

### Dependencies

- Tailwind setup
- Font integration
- Design tokens
- Path aliases

### Tasks

1. Initialize shadcn/ui with the existing project structure.

2. Configure aliases to match the approved architecture.

3. Map shadcn theme variables to Star Furniture Goa tokens.

4. Add only the primitive components needed for the first implementation phase.

5. Keep shadcn/ui primitives separate from business-specific components.

6. Use shared wrappers in `components/shared-ui` when brand-specific variants are needed.

### Expected Outcome

The project has a reliable accessible component foundation without mixing generic UI primitives with business-specific furniture features.

---

## 6. Shared UI Component Build Order

### Goal

Build reusable shared UI components before feature components so pages remain consistent and maintainable.

### Files Affected

- `components/shared-ui/Button.tsx`
- `components/shared-ui/Container.tsx`
- `components/shared-ui/SectionHeading.tsx`
- `components/shared-ui/IconCircle.tsx`
- `components/shared-ui/SearchInput.tsx`
- `components/shared-ui/FilterGroup.tsx`
- `components/shared-ui/Modal.tsx`
- `components/shared-ui/EmptyState.tsx`
- `components/shared-ui/LoadingState.tsx`
- `components/ui`

### Dependencies

- shadcn/ui setup
- Tailwind tokens
- Font tokens
- Accessibility standards

### Build Order

1. Foundation components:
   - Container
   - Section wrapper
   - Section heading
   - Button
   - Icon button

2. Feedback components:
   - Loading state
   - Empty state
   - Skeleton state
   - Alert/message patterns

3. Form components:
   - Input
   - Textarea
   - Select
   - Checkbox
   - File upload
   - Form field wrapper

4. Discovery components:
   - Search input
   - Filter group
   - Filter chip
   - Sort control

5. Surface components:
   - Modal
   - Drawer or sheet
   - Accordion
   - Tabs

6. Media components:
   - Responsive image wrapper
   - Gallery shell
   - Media thumbnail
   - Swatch display

### Expected Outcome

Feature teams can build pages using consistent, accessible, brand-aligned UI primitives.

---

## 7. Layout Implementation Order

### Goal

Create the global site structure before implementing individual pages.

### Files Affected

- `app/layout.tsx`
- `components/layout/PageShell.tsx`
- `components/layout/Header.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/MobileNav.tsx`
- `components/layout/Footer.tsx`
- `components/layout/BrandLockup.tsx`
- `constants/routes.ts`
- `constants/site.ts`
- `constants/seo.ts`
- `lib/seo.ts`
- `lib/structured-data.ts`

### Dependencies

- Shared UI foundation
- Brand tokens
- Route constants
- Site constants
- SEO constants

### Implementation Order

1. Root layout:
   - Global font application
   - Metadata foundation
   - Global shell structure

2. Page shell:
   - Consistent page spacing
   - Main content region
   - Accessibility landmarks

3. Brand lockup:
   - Logo
   - Brand name
   - Tagline support

4. Header:
   - Desktop structure
   - Sticky behavior if required
   - Mobile-safe height

5. Navbar:
   - Home
   - Our Collections
   - Design Your Space
   - Wishlist

6. Mobile navigation:
   - Accessible menu trigger
   - Focus management
   - Clear route actions

7. Footer:
   - Contact information
   - Address
   - Website link
   - Brand lockup
   - Social links

8. SEO foundation:
   - Default metadata
   - Page metadata helpers
   - Structured business data foundation

### Expected Outcome

Every page inherits a consistent, accessible, premium layout with clear navigation and conversion paths.

---

## 8. Page Implementation Order

### Goal

Implement pages in an order that builds from high-level customer discovery toward deeper product and enquiry flows.

### Files Affected

- `app/page.tsx`
- `app/collections/page.tsx`
- `app/collections/[categorySlug]/page.tsx`
- `app/products/[productSlug]/page.tsx`
- `app/catalogues/page.tsx`
- `app/catalogues/[catalogueSlug]/page.tsx`
- `app/design-your-space/page.tsx`
- `app/wishlist/page.tsx`
- `app/showroom/page.tsx`
- `app/search/page.tsx`
- `app/contact/page.tsx`

### Dependencies

- Layout foundation
- Shared UI components
- Static data files
- Domain types
- SEO helpers

### Implementation Order

1. Home page:
   - Hero
   - About section
   - Featured collections
   - Reviews
   - CTA sections

2. Collections page:
   - Category and collection browsing
   - Featured collections
   - Catalogue discovery entry points

3. Category page:
   - Category overview
   - Product listing
   - Related collections
   - Filters

4. Product detail page:
   - Product gallery
   - Product information
   - Materials and finishes
   - Wishlist action
   - Enquiry CTA

5. Catalogues page:
   - Catalogue list
   - Cover previews
   - View and download actions

6. Catalogue detail page:
   - Embedded PDF viewer foundation
   - Catalogue metadata
   - Related products/categories/collections

7. Design Your Space page:
   - Guided request form
   - Measurement input
   - Uploads
   - Consultation CTA

8. Wishlist page:
   - Saved products
   - Empty state
   - Enquiry conversion path

9. Showroom page:
   - Location details
   - Google Maps area
   - Business hours
   - Visit CTA

10. Search page:
   - Search results
   - Filters
   - Empty state
   - URL-based query state

11. Contact page:
   - Contact information
   - WhatsApp CTA
   - Factory/showroom visit prompt

### Expected Outcome

The site becomes usable in a customer-first order, starting with discovery and ending with enquiry-supporting flows.

---

## 9. Feature Implementation Order

### Goal

Build feature behavior in layers so each feature remains isolated, reusable, and ready for future backend integration.

### Files Affected

- `components/home`
- `components/collection`
- `components/showroom`
- `components/cta`
- `hooks`
- `services`
- `store`
- `data`
- `types`
- `constants`

### Dependencies

- Page implementation order
- Shared UI components
- Domain types
- Static data
- Services
- Hooks

### Implementation Order

1. Domain types:
   - Align current `types` with finalized data model entities.
   - Ensure Product, Category, Collection, Catalogue, Review, Enquiry, Location, and Wishlist types are ready for static data.

2. Static data foundation:
   - Company data
   - Contact data
   - Categories
   - Collections
   - Products
   - Catalogues
   - Reviews
   - Showroom/location data

3. Service layer:
   - Product lookup
   - Search
   - Catalogue storage abstraction
   - WhatsApp enquiry message builder
   - Maps helper

4. Hooks:
   - Product search
   - Product filters
   - Catalogue viewer
   - Wishlist state
   - WhatsApp enquiry

5. Home feature:
   - Hero slider
   - About section
   - Featured collection preview
   - Review section

6. Collection feature:
   - Category cards
   - Collection grid
   - Product cards
   - Product filters
   - Product search
   - Product gallery
   - Product details

7. Catalogue feature:
   - Catalogue viewer
   - Catalogue cards
   - Download/view actions
   - Future cloud storage compatibility

8. Wishlist feature:
   - Local persistence first
   - Add/remove behavior
   - Saved product display
   - Enquiry conversion path

9. Design Your Space feature:
   - Guided request flow
   - Measurements
   - Preferred materials
   - Preferred finishes
   - Upload-ready structure
   - Future enquiry/quotation relationship

10. Showroom feature:
   - Location info
   - Google Maps embed
   - Visit showroom card
   - Business hours
   - Appointment-ready structure

11. CTA and enquiry feature:
   - WhatsApp CTA
   - Enquiry button
   - Visit showroom CTA
   - Catalogue download CTA
   - Consistent conversion language

### Expected Outcome

Business features remain separated from pages, data access remains centralized, and the project stays ready for search, filters, catalogue storage, enquiries, and future backend integration.

---

## 10. Testing Strategy

### Goal

Introduce testing in phases so the project gains confidence without unnecessary complexity before implementation stabilizes.

### Files Affected

- `package.json`
- `tsconfig.json`
- Future test configuration files
- `components`
- `hooks`
- `services`
- `app`

### Dependencies

- Implemented shared UI components
- Implemented hooks
- Implemented services
- Stable route structure

### Testing Phases

1. Static checks:
   - Type checking
   - Linting
   - Build verification

2. Shared UI checks:
   - Button variants
   - Form controls
   - Modal behavior
   - Search input
   - Filter controls
   - Loading and empty states

3. Hook and service checks:
   - Wishlist add/remove behavior
   - Product search behavior
   - Product filter behavior
   - WhatsApp message generation
   - Catalogue lookup behavior

4. Accessibility checks:
   - Keyboard navigation
   - Focus states
   - Form labels
   - Button labels
   - Modal focus handling
   - Color contrast
   - Reduced motion support

5. Responsive checks:
   - Mobile layout
   - Tablet layout
   - Desktop layout
   - Product grid behavior
   - Form behavior
   - Navigation behavior

6. Page flow checks:
   - Browse collections
   - View product details
   - Save to wishlist
   - Open catalogue
   - Submit design request
   - Start WhatsApp enquiry
   - View showroom information

7. Performance and SEO checks:
   - Metadata presence
   - Image optimization
   - Font loading
   - Lighthouse review
   - Core Web Vitals baseline

### Expected Outcome

The project can be verified progressively, starting with build confidence and expanding toward accessibility, user flows, SEO, and performance as implementation becomes functional.