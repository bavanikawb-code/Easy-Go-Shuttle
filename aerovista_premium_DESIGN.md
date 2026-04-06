# Design System Strategy: The Elevated Transit Authority

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **"The Seamless Horizon."** 

In the world of premium airport transfers, the user's mental state is often one of high-stakes transition. Our goal is to provide a digital experience that feels as quiet and composed as a luxury cabin. We break the "template" look by moving away from rigid, boxy grids and instead embracing **Intentional Asymmetry** and **Tonal Depth**. 

By overlapping elements—such as a vehicle card partially breaking the plane of a section transition—we create a sense of forward motion. We prioritize "Editorial Breathing Room" over information density, using the generous spacing scale to ensure the user never feels rushed. This is not just a booking tool; it is the first step of a first-class journey.

---

## 2. Colors: The Tonal Landscape
Our palette moves beyond simple blues into a sophisticated hierarchy of light and depth.

### Color Roles
*   **Primary (`#002045` / `primary`):** Reserved for high-authority moments and grounding elements. 
*   **Secondary (`#0061a5` / `secondary`):** Our action color. It draws the eye to the "next step" in the booking flow.
*   **Surface Tiers:** We utilize the full range from `surface-container-lowest` (#ffffff) to `surface-container-highest` (#e0e3e5) to define hierarchy.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections or content blocks. Traditional lines create visual "noise" that contradicts a premium feel. Instead, boundaries must be defined by background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background. The shift in tone is the divider.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Layer 0:** `surface` (The base canvas).
*   **Layer 1:** `surface-container-low` (Large content blocks/sections).
*   **Layer 2:** `surface-container-lowest` (The "white" cards—these should feel like they are floating slightly above the page).

### Signature Textures: Glass & Gradients
To avoid a "flat" SaaS aesthetic, use subtle gradients for Hero backgrounds and Primary CTAs. Transition from `primary` (#002045) to `primary-container` (#1a365d) at a 135-degree angle. For floating navigation bars, use **Glassmorphism**: a semi-transparent `surface` color with a 20px backdrop-blur to allow vehicle photography to bleed through softly.

---

## 3. Typography: Editorial Authority
We use a dual-typeface system to balance character with utility.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech-premium" feel. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headers to establish an authoritative, editorial presence.
*   **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility for flight numbers, times, and prices. 

**The Hierarchy Rule:** Headlines should feel "oversized" compared to standard web layouts to create a sense of confidence. Use `label-md` (Inter, 0.75rem) in all-caps with increased letter-spacing (+0.05em) for small category tags like "Vehicle Class" or "Arrival Time."

---

## 4. Elevation & Depth: The Layering Principle
We convey importance through **Tonal Layering** rather than structural lines.

*   **Ambient Shadows:** Traditional shadows are too heavy. If a card requires a floating effect (e.g., a booking summary), use a shadow tinted with the `surface-tint` (#455f88). 
    *   *Spec:* `0px 20px 40px rgba(69, 95, 136, 0.06)`. Large blur, extremely low opacity.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility on form inputs, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **The Glass Effect:** Floating UI elements (modals, sticky navs) should utilize a `surface` background at 80% opacity with a heavy backdrop-blur. This integrates the UI into the environment of the page.

---

## 5. Components: Refined Primitives

### Buttons (The "Call to Action")
*   **Primary:** Gradient from `primary` to `primary-container`. Corner radius: `lg` (1rem). No border.
*   **Secondary:** `outline` variant. Use the "Ghost Border" principle. Text color should be `secondary`.
*   **Interaction:** On hover, a subtle 2px vertical lift and an increase in shadow spread.

### Cards (The "Vehicle & Route" Displays)
*   **Rules:** Forbid the use of divider lines within cards. 
*   **Separation:** Use `3` (1rem) or `4` (1.4rem) spacing to separate the vehicle image from the price/details. Use a `surface-container-highest` background for the "Book Now" footer area of the card to create a natural visual break.

### Input Fields (The "Booking Engine")
*   **Style:** Minimalist. Background: `surface-container-low`. 
*   **State:** On focus, the background shifts to `surface-container-lowest` (pure white) and a subtle 1px "Ghost Border" appears. Use `headline-sm` for the price output within the booking engine to make it the clear focal point.

### Special Component: The Journey Progress Stepper
Instead of a standard horizontal line with dots, use a **Vertical Tonal Shift**. The current step is a `primary` chip, while upcoming steps are `surface-container-high` blocks that fade into the background, mimicking the "Seamless Horizon" concept.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If a section is 100% width, allow the text to be offset to the left while imagery breaks the right boundary.
*   **Do** use `20` (7rem) or `24` (8.5rem) vertical spacing between major sections to let the design breathe.
*   **Do** use subtle fade-in-up animations (duration: 600ms, easing: cubic-bezier(0.16, 1, 0.3, 1)) for vehicle images.

### Don't:
*   **Don't** use 100% black text. Always use `on-surface` (#181c1e) to maintain a soft, premium contrast.
*   **Don't** use standard "box-shadow" presets. Every shadow must be tinted and diffused.
*   **Don't** use sharp corners. Everything must adhere to the `lg` (1rem) or `xl` (1.5rem) roundedness scale to feel approachable and modern.
*   **Don't** use dividers or lines to separate list items. Use the spacing scale (`2` or `3`) to create logical groupings through whitespace.