# DESIGN_SYSTEM.md

## 1. Brand Personality

Star Furniture Goa should feel premium, warm, elegant, spacious, modern, trustworthy, and quietly luxurious.

The brand should communicate:

- Craftsmanship
- Credibility
- Customization
- Material quality
- Long-term durability
- Personal service
- Practical luxury
- Confidence before enquiry

The website should not feel flashy, loud, overly decorative, or trend-driven. It should feel like a refined furniture showroom: calm, well-lit, intentional, and easy to trust.

Primary audience expectations:

- Homeowners need clarity, confidence, and approachable guidance.
- Architects need structure, specification clarity, and material credibility.
- Interior designers need visual inspiration, finish quality, and catalogue access.
- Commercial clients need professionalism, durability, and reliable service signals.

---

## 2. Design Principles

### Premium Through Restraint

Use space, proportion, typography, and photography to create luxury. Avoid excessive gradients, loud effects, oversized decorations, or visual clutter.

### Furniture First

The product, material, finish, catalogue, showroom, and completed work imagery should lead the experience. UI should support inspection, comparison, and enquiry.

### Warm Trust

The brand should feel human and credible. Use warm neutrals, soft contrast, refined gold accents, and clear messaging.

### Clear Conversion

Every major page should make it easy to enquire through WhatsApp, request consultation, visit the factory/showroom, save to wishlist, or explore catalogues.

### Spacious But Useful

Use generous spacing, but never at the cost of clarity. Product grids, catalogue cards, forms, and detail pages should remain scannable.

### Consistent Components

Buttons, cards, forms, badges, filters, wishlist actions, catalogue viewers, and enquiry CTAs should follow one shared visual language.

### Accessible Luxury

Premium design must remain readable, keyboard-friendly, screen-reader-friendly, and usable on all devices.

---

## 3. Color Palette

### Core Colors

| Token | HEX | Usage |
|---|---:|---|
| `background-dark` | `#191919` | Premium dark sections, hero backgrounds, footer, immersive product areas |
| `background-light` | `#F8F5F0` | Main page background, calm light sections |
| `background-warm` | `#F2E6D8` | Warm feature sections, about sections, showroom blocks |
| `surface` | `#FFFFFF` | Cards, forms, sheets, popovers |
| `surface-warm` | `#FBF7F1` | Soft cards, catalogue panels, form backgrounds |
| `text-primary` | `#191919` | Main text on light backgrounds |
| `text-inverse` | `#F8F5F0` | Main text on dark backgrounds |
| `text-muted` | `#6F675E` | Secondary text, descriptions, metadata |
| `text-soft-inverse` | `#CFC6BA` | Secondary text on dark backgrounds |
| `border-light` | `#E5D8C8` | Light section borders and dividers |
| `border-dark` | `#3A332B` | Dark section borders and dividers |
| `accent-gold` | `#C9A24D` | Primary accent, premium highlights, selected states |
| `accent-gold-dark` | `#9C7A2F` | Hover state for gold elements |
| `accent-gold-soft` | `#EFE1BC` | Soft accent backgrounds |
| `success` | `#2F7D5C` | Success states |
| `warning` | `#B7791F` | Warning states |
| `danger` | `#B84A3A` | Error and destructive states |

### Usage Rules

- Use `#191919` as the primary dark brand foundation, not pure black for large surfaces.
- Use gold sparingly for emphasis, selected states, icons, CTA accents, and premium details.
- Use warm beige backgrounds only in intentional sections. Do not make the full site beige-heavy.
- Avoid bright colors unless they communicate status, validation, or error states.
- Maintain strong contrast for all text.

---

## 4. Typography

### Font Families
Role	Font	Usage
Display / Editorial	Playfair Display	Hero headings, premium section titles, campaign headings
UI / Body	Inter	Navigation, buttons, forms, body text, cards, filters, product details
Optional Numeric	Inter	Measurements, ratings, catalogue details, product specs

### Typography Rules
Use Playfair Display only for expressive brand moments.
Use Inter for all interface text and body content.
Do not use decorative or novelty fonts.
Letter spacing should remain normal for most text.
Uppercase labels may use subtle letter spacing only when short.
Body copy should prioritize readability over style.

---

## 5. Spacing System

Use an 8px spacing scale.

| Token | Value | Usage |
|---|---:|---|
| `space-1` | 4px | Tight icon/text gaps |
| `space-2` | 8px | Small gaps |
| `space-3` | 12px | Compact component padding |
| `space-4` | 16px | Default component spacing |
| `space-5` | 20px | Form groups |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section inner spacing |
| `space-10` | 40px | Large component gaps |
| `space-12` | 48px | Section grouping |
| `space-16` | 64px | Standard section vertical padding |
| `space-20` | 80px | Spacious page sections |
| `space-24` | 96px | Hero and major editorial sections |
| `space-32` | 128px | Large desktop hero spacing |

### Layout Rules

- Mobile sections should usually use 48px to 64px vertical padding.
- Desktop sections should usually use 80px to 128px vertical padding.
- Product grids should feel spacious but not sparse.
- Forms should use consistent vertical rhythm to reduce cognitive load.
- Avoid nested card spacing that makes the UI feel boxed-in.

---

## 6. Border Radius System

| Token | Value | Usage |
|---|---:|---|
| `radius-none` | 0px | Full-bleed media, dividers |
| `radius-xs` | 4px | Badges, small controls |
| `radius-sm` | 6px | Inputs, buttons, compact cards |
| `radius-md` | 8px | Standard cards and panels |
| `radius-lg` | 12px | Large image cards only |
| `radius-xl` | 16px | Modals or feature panels only when justified |

### Radius Rules

- Default UI radius should be 6px to 8px.
- Avoid overly rounded pill-heavy layouts.
- Product imagery may use 8px to 12px depending on composition.
- Buttons should generally use 6px.
- Cards should not exceed 8px unless used for large editorial imagery.

---

## 7. Elevation & Shadow System

The brand should feel tactile but not heavy.

| Token | Shadow | Usage |
|---|---|---|
| `shadow-none` | none | Flat layouts, dark sections |
| `shadow-sm` | subtle low-opacity shadow | Buttons, small controls |
| `shadow-md` | soft medium shadow | Cards, dropdowns |
| `shadow-lg` | broader soft shadow | Modals, floating panels |
| `shadow-focus` | gold or neutral focus ring | Keyboard focus states |

### Shadow Rules

- Use shadows sparingly.
- Prefer borders and spacing over heavy shadows.
- On dark backgrounds, use borders and subtle highlights instead of dark shadows.
- Catalogue cards and product cards may use soft elevation on hover.
- Modals may use stronger shadow for separation.

---

## 8. Button Design Standards

### Button Types

| Type | Usage |
|---|---|
| Primary | Main conversion actions: Enquire, Design Your Space, Request Consultation |
| Secondary | Explore, View Collection, View Catalogue |
| Outline | Lower-emphasis actions, filters, alternate paths |
| Ghost | Navigation actions, icon-only controls |
| Destructive | Remove, delete, clear saved item |

### Primary Button

The default primary button should use Charcoal, not Gold.
Background: #191919
Text: #FFFFFF
Hover: #2A2A2A
Radius: 6px
Font: Inter 14px or 15px, weight 600
Height: 44px desktop, 48px mobile
Use for the most important action within a section.
Gold should be reserved for premium accents, featured states, highlights, selected states, and secondary emphasis.


Gold Accent Button
Gold may be used when the action needs premium emphasis but should not replace the default primary button.
Background: #C9A24D
Text: #191919
Hover: #9C7A2F
Use sparingly for moments such as featured catalogue actions, premium collection highlights, or selected states.

### Dark Primary Button

For light sections:

- Background: `#191919`
- Text: `#FFFFFF`
- Hover: `#2A2A2A`

### Outline Button

- Border: `#C9A24D` or neutral border
- Text: `#191919` on light backgrounds
- Text: `#F8F5F0` on dark backgrounds
- Hover background should remain subtle.

### Icon Buttons

- Use Lucide React icons.
- Minimum touch target: 44px.
- Include accessible labels.
- Use familiar symbols for wishlist, search, close, menu, view, download, share, map, and WhatsApp-related actions.

### Button Rules

- Do not use too many primary buttons in one view.
- Button text should be action-oriented.
- Avoid vague labels like “Submit” when a clearer phrase exists.
- Use “Send Enquiry”, “Request Consultation”, “View Catalogue”, “Save to Wishlist”.

---

## 9. Input & Form Design

Forms should feel calm, structured, and easy to complete.

### Input Styling

- Height: 44px to 48px
- Border: `#D8CBB9`
- Focus border: `#C9A24D`
- Focus ring: subtle gold ring
- Radius: 6px
- Background: `#FFFFFF`
- Text: `#191919`
- Placeholder: `#8A8176`

### Form Layout

- Use one-column forms on mobile.
- Use two-column forms only when fields are short and naturally paired.
- Group complex forms into clear sections.
- Design Your Space forms should feel guided and reassuring.
- Use helper text for measurements, uploads, and material preferences.
- Avoid overwhelming users with too many required fields.

### Validation

- Error color: `#B84A3A`
- Success color: `#2F7D5C`
- Error messages should explain how to fix the issue.
- Required fields should be clearly indicated.
- Never rely on color alone for errors.

### Upload Fields

Used for inspiration images, room photos, catalogues, floor plans, and sketches.

- Show accepted file types.
- Show upload status.
- Show thumbnails for images.
- Show clear remove controls.
- Support drag-and-drop on desktop, simple tap upload on mobile.

---

## 10. Card Design

### Product Cards

Product cards should be visual, clean, and scannable.

Required visual hierarchy:

- Product image
- Product name
- Category or collection label
- Material or finish highlights when available
- Wishlist action
- Enquiry or view action

Rules:

- Image ratio should be consistent within grids.
- Use subtle hover elevation.
- Do not overload cards with long descriptions.
- Keep price or quotation messaging simple.
- Wishlist icon should be visible but not visually dominant.

### Collection Cards

Collection cards should feel editorial and inspirational.

- Use strong photography.
- Use short titles.
- Include category relationship only when useful.
- Use subdued text overlays or clean below-image text.

### Catalogue Cards

Catalogue cards should feel like premium publications.

- Show cover image or PDF thumbnail.
- Include year or edition when relevant.
- Include “View Catalogue” and optional “Download”.
- Avoid making catalogue cards look like generic files.

### Review Cards

Review cards should feel trustworthy and readable.

- Rating should be visible.
- Reviewer display name should be clear.
- Review text should be readable.
- Featured testimonials may use larger typography.
- Avoid oversized review cards with too much empty space.

### Card Rules

- Standard radius: 8px.
- Use borders or soft shadow, not both heavily.
- Avoid cards inside cards.
- Keep repeated cards consistent in size within a row.
- Text should never overflow or visually collide.

---

## 11. Iconography

Use Lucide React as the default icon system.

### Style

- Stroke width: 1.75px to 2px.
- Default size: 20px.
- Small UI icons: 16px.
- Large feature icons: 24px.
- Use gold only for active, featured, or premium emphasis.

### Recommended Icons

| Use Case | Icon Direction |
|---|---|
| Wishlist | Heart |
| Search | Search |
| Catalogue | BookOpen or FileText |
| Download | Download |
| Share | Share2 |
| Location | MapPin |
| Phone | Phone |
| WhatsApp | Use approved brand asset or simple message icon if brand asset is unavailable |
| Filters | SlidersHorizontal |
| Close | X |
| Menu | Menu |
| Back/Next | ArrowLeft, ArrowRight |
| Materials | Layers |
| Finishes | Palette |
| Measurements | Ruler |
| Reviews | Star |

### Icon Rules

- Icons should support meaning, not decorate randomly.
- All icon-only buttons need accessible labels.
- Do not mix multiple icon styles.
- Do not use emoji as interface icons.

---

## 12. Motion & Animation Guidelines

Use Motion for subtle transitions that make the site feel refined.

### Motion Personality

- Calm
- Smooth
- Responsive
- Purposeful
- Never distracting

### Timing

| Motion Type | Duration |
|---|---:|
| Micro interaction | 120ms to 180ms |
| Hover transition | 150ms to 220ms |
| Section reveal | 350ms to 600ms |
| Page transition | 300ms to 500ms |
| Background transition | 800ms to 1400ms |

### Easing

Use soft, natural easing.

Recommended feel:

- Ease-out for entrance
- Ease-in-out for background and section transitions
- Snappy but not sharp for buttons

### Usage

- Fade and slight upward movement for section reveals.
- Smooth background transitions between dark and warm sections.
- Gentle hover movement on cards.
- Subtle image scale on hover.
- Smooth accordion/filter transitions.
- Reduced motion support is required.

### Avoid

- Bouncy animations.
- Fast flashy transitions.
- Excessive parallax.
- Constant movement.
- Animation that delays enquiry actions.

---

## 13. Accessibility Standards

The website must meet WCAG 2.2 AA wherever possible.

### Contrast

- Body text contrast must meet at least 4.5:1.
- Large text must meet at least 3:1.
- Interactive components must have visible contrast.
- Gold text on light backgrounds should be avoided unless contrast is verified.

### Keyboard Access

- All interactive elements must be keyboard reachable.
- Focus states must be visible.
- Focus rings should be elegant but unmistakable.
- Menus, modals, filters, catalogue viewer controls, and wishlist actions must support keyboard navigation.

### Screen Readers

- Use meaningful labels for buttons.
- Images must have useful alt text when content-bearing.
- Decorative images should be marked appropriately.
- Form errors must be announced clearly.
- Catalogue PDFs should include accessible labels and fallback download text.

### Motion

- Respect reduced motion preferences.
- Do not rely on animation to communicate essential information.

### Forms

- Every input must have a label.
- Required fields must be indicated.
- Errors must be text-based, not color-only.
- File uploads must explain accepted formats.

---

## 14. Responsive Breakpoints

Use standard Tailwind-compatible breakpoints.

| Breakpoint | Width | Usage |
|---|---:|---|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Responsive Rules

- Mobile-first design.
- Navigation must remain clean and easy to use.
- Product grids should adapt from 1 column to 2, 3, or 4 columns based on space.
- Forms should be single-column on mobile.
- Hero content must remain readable and not cover important product imagery.
- Image crops must preserve the main furniture subject.
- Touch targets must be at least 44px.

---

## 15. Tailwind Theme Recommendations

The Tailwind theme should be semantic rather than purely decorative.

### Color Tokens

Recommended token groups:

- `background.dark`
- `background.light`
- `background.warm`
- `surface.default`
- `surface.warm`
- `text.primary`
- `text.muted`
- `text.inverse`
- `text.inverseMuted`
- `border.light`
- `border.dark`
- `accent.gold`
- `accent.goldDark`
- `accent.goldSoft`
- `state.success`
- `state.warning`
- `state.danger`

### Font Tokens

- `font-display`: Playfair Display
- `font-sans`: Poppins

### Radius Tokens

- `radius.xs`: 4px
- `radius.sm`: 6px
- `radius.md`: 8px
- `radius.lg`: 12px
- `radius.xl`: 16px

### Shadow Tokens

- `shadow.soft`
- `shadow.card`
- `shadow.modal`
- `shadow.focus`

### shadcn/ui Alignment

Map shadcn theme tokens to the Star Furniture Goa system:

- `background`: warm light background
- `foreground`: charcoal text
- `card`: surface
- `card-foreground`: charcoal text
- `primary`: charcoal or gold depending on component context
- `primary-foreground`: white or charcoal based on contrast
- `secondary`: warm surface
- `muted`: warm neutral
- `accent`: gold
- `destructive`: muted red
- `border`: warm border
- `ring`: gold focus ring

### Component Strategy

- Use shadcn/ui for accessible primitives.
- Customize styling through design tokens.
- Keep component behavior separate from styling.
- Shared UI components should use semantic variants, not one-off styles.

---

## 16. Image Usage Guidelines

Images are central to the brand experience.

### Image Types

Use images for:

- Hero sections
- Product cards
- Product galleries
- Collection banners
- Catalogue covers
- Material swatches
- Finish swatches
- Factory/showroom photos
- Proprietor or team credibility
- Review/customer project imagery

### Rules

- Product images should clearly show the furniture.
- Avoid overly dark, blurred, or cropped images when users need to inspect details.
- Use consistent aspect ratios in grids.
- Preserve the main subject in responsive crops.
- Use optimized formats such as WebP or AVIF where possible.
- Every meaningful image needs alt text.
- Large catalogue files should be cloud-hosted.

### Aspect Ratios

| Use Case | Recommended Ratio |
|---|---|
| Hero image | 16:9 or 21:9 |
| Product card | 4:3 or 1:1 |
| Product gallery | 4:3 |
| Collection banner | 16:9 |
| Catalogue cover | 3:4 |
| Proprietor portrait | 4:5 |
| Finish/material swatch | 1:1 |
| Review image | 4:3 or 1:1 |

---

## 17. Photography Style

Photography should feel real, premium, and trustworthy.

### Direction

- Warm natural lighting
- Clean compositions
- Clear furniture details
- Real materials and finishes
- Neat interiors
- Minimal styling
- Premium but lived-in spaces
- Goa-appropriate warmth without becoming tropical or casual

### Product Photography

- Show full furniture form.
- Include detail shots for handles, finishes, edges, storage, and texture.
- Use consistent lighting across product sets.
- Avoid extreme filters.
- Avoid artificial-looking stock imagery.

### Showroom / Factory Photography

- Communicate credibility and craftsmanship.
- Show workspaces cleanly and professionally.
- Include proprietor or team imagery where it builds trust.
- Avoid cluttered backgrounds.

### Catalogue Photography

- Should feel editorial and aspirational.
- Use clear cover images.
- Maintain premium spacing and readable overlays.

### Avoid

- Generic stock interiors.
- Overly glossy unrealistic renders unless clearly used for visualization.
- Dark atmospheric images where furniture cannot be inspected.
- Excessive blur or heavy overlays.
- Random decorative imagery unrelated to furniture.

---

## 18. UI Tone & Content Style

The voice should be polished, clear, helpful, and trustworthy.

### Tone

- Professional
- Warm
- Confident
- Simple
- Respectful
- Customer-focused

### Writing Principles

- Prefer clear benefit-led copy.
- Avoid exaggerated luxury language.
- Avoid vague claims.
- Use craftsmanship, durability, customization, and service as trust signals.
- Keep CTAs direct and useful.

### Recommended CTA Language

- Explore Collections
- View Catalogue
- Save to Wishlist
- Request Consultation
- Design Your Space
- Send Enquiry
- Enquire on WhatsApp
- Visit Our Factory
- View Product Details

### Product Copy

Product descriptions should communicate:

- Use case
- Material relevance
- Finish options
- Customization possibilities
- Durability
- Space suitability
- Enquiry path

### Form Copy

Forms should feel guided, not transactional.

Use helpful prompts such as:

- Tell us about your space
- Share approximate measurements
- Upload room photos or inspiration
- Choose preferred materials
- Choose preferred finishes
- When would you like to begin?

### Trust Copy

Trust signals should be factual:

- Serving customers since 2006
- Custom furniture manufacturing
- Engineered wood and plywood expertise
- Warranty-backed quality
- Factory consultation available
- Designed for homes, offices, and commercial spaces

### Avoid

- Overpromising
- Excessive exclamation marks
- Casual slang
- Dense paragraphs
- Generic luxury phrases with no proof
- Technical jargon without explanation

## Grid System
Use a responsive 12-column grid as the foundation for page layouts.
Responsive Grid
Mobile: 4-column layout behavior within a single-column content flow.
Tablet: 8-column layout behavior where content can begin splitting.
Desktop: 12-column layout for full page composition.
Large desktop: 12-column layout with controlled maximum width.
Container Widths
Viewport	Recommended Container
Mobile	100% width with 16px side padding
Tablet	100% width with 24px to 32px side padding
Desktop	1120px to 1200px
Large Desktop	1280px maximum for most content
Editorial / Catalogue Layouts	Up to 1360px when imagery requires more space

Maximum Content Width
Long-form text should not exceed 720px.
Product grids may extend to 1280px.
Catalogue and collection layouts may extend wider when visual browsing benefits from it.
Forms should remain constrained, usually 640px to 880px depending on complexity.
Full-Width Hero Guidance
Hero sections may be full-width.
Hero media should fill the viewport width when it strengthens the brand impression.
Hero text should align to the grid, not float randomly.
Hero content must leave enough visible image context on mobile and desktop.
Do not place hero content inside a card unless the page is a functional tool rather than a brand landing area.
Grid Alignment Principles
Align headings, cards, filters, and CTAs to the same container system.
Avoid arbitrary left offsets.
Product cards should align consistently across rows.
Forms should align labels, inputs, helper text, and actions predictably.
Wide visual sections may break the grid only when the image composition benefits from it.

## Micro Interactions
Micro interactions should make the interface feel refined, responsive, and premium without becoming distracting.
Hover Lift
Cards may lift by 2px to 4px on hover.
Use soft shadow increase rather than dramatic movement.
Avoid hover effects that shift surrounding layout.
Product Image Zoom
Product and collection images may scale subtly on hover.
Recommended scale: 1.02 to 1.04.
Keep zoom clipped inside the image container.
Do not crop important product details during zoom.
Wishlist Heart Animation
Wishlist heart should respond immediately.
Use a subtle scale pulse when saved.
Filled state should be clear.
Gold or warm accent may be used for active saved state.
Button Interaction
Buttons should transition background, border, and text color smoothly.
Pressed state may slightly reduce scale or brightness.
Disabled state must be visually clear and accessible.
Card Hover
Product, collection, catalogue, and review cards may use subtle border, shadow, or image changes.
Hover should suggest interactivity without making the layout feel busy.
Accordion Animation
Accordions should open smoothly with height and opacity transitions.
Duration should be short, around 180ms to 260ms.
Icons should rotate consistently when expanded.
Loading Skeletons
Skeletons should match the shape of the final content.
Use warm neutral colors.
Avoid aggressive shimmer.
Skeletons should preserve layout stability.
Filter Chips
Filter chips should show selected, hover, and disabled states.
Selected chips may use charcoal or soft gold emphasis.
Removing a chip should feel immediate and not shift unrelated content abruptly.
Smooth Page Transitions
Page transitions should be subtle.
Prefer fade or slight upward movement.
Avoid dramatic transitions between browsing pages.
Respect reduced motion preferences.

## Whitespace Philosophy
Whitespace is an intentional design element for Star Furniture Goa.
The website should not try to fill every available area. Empty space should create calm, focus, and a premium showroom-like browsing experience.
Whitespace should be used to:
Give furniture imagery room to breathe.
Make product and catalogue browsing feel refined.
Improve readability.
Separate decision points clearly.
Make forms feel less intimidating.
Emphasize quality over quantity.
Create a sense of confidence and control.
Avoid using whitespace as empty filler. Every spacious area should support hierarchy, rhythm, readability, or visual focus.