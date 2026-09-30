---
name: Myntra Stylist AI
colors:
  surface: '#fbf8ff'
  surface-dim: '#d6d8f2'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ececff'
  surface-container-high: '#e4e7ff'
  surface-container-highest: '#dee1fa'
  on-surface: '#161b2d'
  on-surface-variant: '#5b4042'
  inverse-surface: '#2b2f43'
  inverse-on-surface: '#efefff'
  outline: '#8f6f72'
  outline-variant: '#e3bdc0'
  surface-tint: '#bd0043'
  primary: '#b90041'
  on-primary: '#ffffff'
  primary-container: '#df2457'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2ba'
  secondary: '#5644d0'
  on-secondary: '#ffffff'
  secondary-container: '#6f5fea'
  on-secondary-container: '#fffbff'
  tertiary: '#006953'
  on-tertiary: '#ffffff'
  tertiary-container: '#008469'
  on-tertiary-container: '#f5fff9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9dc'
  primary-fixed-dim: '#ffb2ba'
  on-primary-fixed: '#400011'
  on-primary-fixed-variant: '#910031'
  secondary-fixed: '#e4dfff'
  secondary-fixed-dim: '#c6bfff'
  on-secondary-fixed: '#160066'
  on-secondary-fixed-variant: '#4029ba'
  tertiary-fixed: '#7bf8d3'
  tertiary-fixed-dim: '#5cdcb8'
  on-tertiary-fixed: '#002118'
  on-tertiary-fixed-variant: '#00513f'
  background: '#fbf8ff'
  on-background: '#161b2d'
  surface-variant: '#dee1fa'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.04em
  price-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 22px
  price-mrp:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system embodies the high-energy, aspirational spirit of modern Indian fashion retail, elevated by a context-aware, hyper-personalized intelligence layer. The brand personality is confident, trend-conscious, energetic, and intuitive. It speaks to fashion-forward digital natives across India who seek curation, fit confidence, and effortless inspiration. 

The aesthetic is Modern Retail Minimalism infused with Agentic Intelligence. Rather than feeling futuristic, robotic, or disconnected from the core e-commerce journey, the artificial intelligence presents itself as an elite, high-touch personal stylist. AI interventions are indicated by sophisticated violet-indigo accents, delicate ambient chromatic halos, and micro-gradients that feel harmonious with the iconic fashion magenta. 

Visual interactions celebrate tactile retail psychology: crisp product grids, immediate visual validation, authentic social proof markers, dynamic outfit pairings, and fluid real-time curation.

## Colors

The palette directly honors the recognized heritage of the marketplace while establishing a disciplined hierarchy for commerce and AI intelligence.

- **Primary (`#ff3f6c`):** The signature electric magenta-pink. Used for primary calls to action (e.g., "Add to Bag", "Shop Look"), active navigation highlights, and high-priority brand anchors. Supported by an energetic gradient transitioning from `#ff527b` to `#ff3e6c` for hero buttons and prominent promo ribbons.
- **Secondary (`#6c5ce7` / `#8054c7`):** The intelligent stylist accent. Employed strictly for generative intelligence triggers, AI curated recommendations, style compatibility scores, and virtual fitting rooms. Accompanied by `#f3f0ff` as a soft background surface for smart chips and prompt containers.
- **Tertiary (`#03a685`):** The retail vitality emerald green. Reserved exclusively for value realization: discounted percentages, cashback offers, price drops, in-stock confirmations, and positive rating badges.
- **Neutrals & Surfaces:**
  - `Base Canvas`: `#ffffff` (pure white for product stages) and `#f5f5f6` (warm off-white for app backdrops and canvas dividers).
  - `Secondary Canvas`: `#fafbfc` (subtle structural container fill).
  - `Text Primary`: Deep Charcoal (`#282c3f`) delivering crisp, high-contrast readability.
  - `Text Secondary`: Muted Slate (`#535766`) for product subtitles, attributes, and secondary specs.
  - `Text Tertiary / Strikethrough`: Subtle Pebble (`#94969f`) for MRP strikethroughs, placeholder copy, and inactive borders.

## Typography

The type system uses Plus Jakarta Sans across all display, narrative, and transactional touchpoints. It captures modern geometric cleanliness while offering warm humanities that fit lifestyle commerce.

- **Product Headers:** Brand names must always carry `label-lg` or `headline-sm` with a weight of 700 in uppercase or title-case to command presence, followed by product descriptions in `body-sm` using text secondary (`#535766`).
- **Commercial Price Stacking:** Prices must maintain a strict horizontal triplet:
  1. *Selling Price:* Bold, prominent (`price-hero`, `#282c3f`), prefixed with the Indian Rupee symbol `₹`.
  2. *MRP:* Muted with strikethrough (`price-mrp`, `#94969f`), positioned immediately beside the selling price.
  3. *Discount Percentage:* Vivid terracotta/orange or emerald green (`label-md`, `#ff527b` or `#03a685`), e.g., `(40% OFF)`.
- **AI Stylist Voice:** AI generated explanations, reasoning strings, and prompts use `body-md` with `font-weight: 500` to distinguish curated advice from standard product descriptions.

## Layout & Spacing

The layout is structured around an adaptable 12-column grid for desktop/web surfaces and a dense, fluid 2-column or 4-column layout for mobile and tablet touchpoints. 

- **Mobile Viewports (<768px):** Uses an edge margin of `16px` (`margin-mobile`) and grid gutters of `12px` (`gutter-mobile`). The dual-column product feed allows maximum product visibility while preserving breathing room for metadata, rating badges, and AI style pills.
- **Tablet & Desktop Viewports (≥768px):** Transitions to standard 12-column fluid architecture with `32px` margins and `16px` gutters. Product detail pages split into an interactive visual gallery and a sticky conversational AI styling rail.
- **Spacing Rhythm:** Based on a strict 4px/8px modular scale. Spacing within atomic cards relies heavily on `space-xs` (4px) and `space-sm` (8px) to keep shopping information scannable and compact. Section breaks and carousel containers utilize `space-lg` (24px) and `space-xl` (32px).

## Elevation & Depth

Visual depth is achieved through clean surface separation, low-opacity ambient shadows, and intelligent chromatic backdrops rather than skeuomorphic layers.

- **Level 0 (Flat Ground):** Background `#f5f5f6` or pure `#ffffff` cards without borders for seamless continuous feeds.
- **Level 1 (Product Cards & Micro-Surfaces):** Border: `1px solid #f0f0f2` or `box-shadow: 0 2px 8px rgba(40, 44, 63, 0.06)`. Surfaces feel grounded yet distinctly clickable.
- **Level 2 (Dropdowns, Floating AI Bars, Quick-View Overlays):** `box-shadow: 0 8px 24px rgba(40, 44, 63, 0.12)`. Applied to sticky sticky bottom bars, filter trays, and search recommendation menus.
- **Level 3 (Modal Sheets & Wardrobe Stylist Drawers):** `box-shadow: 0 16px 40px rgba(40, 44, 63, 0.18)` over a 40% tinted neutral backdrop (`rgba(40, 44, 63, 0.4)`).
- **The Stylist Aura (AI Depth):** AI cards and interactive agentic panels employ an inner diffuse glow: `0 0 0 1px #6c5ce720, 0 4px 16px rgba(108, 92, 231, 0.08)`. This soft violet diffusion instantly cues an intelligent feature without distracting from the clothing.

## Shapes

The design system maintains a modern rounded silhouette that conveys friendliness and effortless style:

- **Base Radius (`0.5rem` / `8px`):** Standard for product thumbnails, delivery notification banners, small inputs, rating badges, and dropdown selectors.
- **Large Radius (`1rem` / `16px`):** Used for elevated e-commerce cards, AI conversational bubble containers, virtual closet lookbooks, and sliding bottom sheets.
- **Pill (`9999px`):** Reserved for category filters, AI smart chips, floating action triggers ("Ask Stylist AI"), callout discounts, and circular wishlist floating buttons.

## Components

### Buttons
- **Primary Action (Brand):** Linear gradient from `#ff527b` to `#ff3e6c`, text white, `rounded-md` or `rounded-lg`, uppercase letter-spaced font (`label-lg`), height 44px (mobile) to 48px (desktop).
- **Stylist Action (AI):** Linear gradient from `#6c5ce7` to `#8054c7`, white text with a subtle sparkle icon on the leading edge. Hover state reveals a soft violet glow.
- **Secondary / Ghost:** White background, 1px border `#d4d5d9`, text `#282c3f`, hover: `#f5f5f6`.

### AI Smart Chips & Prompts
- Background in light violet `#f3f0ff`, border in `1px solid rgba(108, 92, 231, 0.3)`.
- Icon: 14px AI sparkle glyph in `#6c5ce7`.
- Text: `label-md` in `#6c5ce7` or `#282c3f`. Used for one-tap styling actions like *"Match with Sneakers"*, *"Find for Cocktail Party"*, or *"Similar silhouettes"*.

### Product Cards
- Aspect ratio for imagery: 3:4 (fashion standard vertical crop).
- Rating Badge: Floating bottom-left on the image canvas. White pill with a semi-opaque background (`rgba(255, 255, 255, 0.95)`), backdrop blur 4px. Layout: `4.2 ★ | 1.4k` where the star is `#03a685` and separator is muted gray.
- Wishlist Heart: Floating top-right, circular white background with `#94969f` outline icon, toggling to solid `#ff3f6c`.
- Content Area: 8px to 12px padding below image. Bold brand header, one-line truncated description, horizontal pricing row with rupee symbol (`₹`), and delivery badge.

### Trust & Logistics Badges
- **Delivery Badge:** Displayed as *"Get it by Tomorrow"* or *"Fast Delivery"*, styled in `label-sm` with text color `#535766` and a small delivery truck icon or subtle green dot (`#03a685`).
- **AI Compatibility Match:** Micro-chip tagged on corner *"98% Style Match"*, background `#f3f0ff`, text `#6c5ce7`, weight 700.

### Input Fields & AI Prompt Bar
- **Standard Search:** Height 44px, background `#f5f5f6`, placeholder `#94969f`, rounded-full, with search and mic/camera visual search affordances.
- **Conversational Stylist Input:** Height 52px, background `#ffffff`, border `1.5px solid #6c5ce7`, rounded-full, featuring dual primary/secondary action triggers (Upload Reference Look, Send Prompt).

### Agentic Progress Indicators
- For multi-step outfit building or style synthesis, use segmented linear progress bars colored in `#6c5ce7` paired with kinetic shimmer animations rather than circular spinners, accompanied by reassuring step statuses (e.g., *"Analyzing silhouette..."*, *"Curating matching heels..."*).