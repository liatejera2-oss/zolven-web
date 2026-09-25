# ZOLVEN — Claude implementation rules

You are working on the official ZOLVEN website.

## Source of truth

1. Do not redesign approved sections unless explicitly requested.
2. Preserve the approved visual hierarchy, spacing logic and product architecture.
3. ZOLVEN is the master brand.
4. The former name **ZOLVEN Workforce** is retired. Use **ZOLVEN Opex**.
5. ZOLVEN Opex positioning is:
   - **Workforce Operations & Intelligence**
   - **Run operations with clarity.**
6. Build with Next.js, React, TypeScript, Tailwind CSS and Lucide React.
7. Prefer reusable components.
8. Do not add dependencies unless necessary.
9. Do not change approved copy while fixing layout or code issues.
10. Work section by section. Once a section is approved, do not modify it without explicit instruction.

## Messaging hierarchy — important

The ZOLVEN Opex positioning above is the official **product descriptor + brand claim**. It does **not** mean every homepage card must literally use those two lines as its visible headline.

For the current homepage product card, the approved marketing copy is:

- Product: **ZOLVEN Opex**
- Eyebrow: **OPERACIONES QUE IMPULSAN RESULTADOS**
- Headline: **Gestiona personas. Opera con claridad.**
- Body: **Una plataforma completa para administrar personas, tiempo, nómina, ausencias, cumplimiento y más, todo en un mismo lugar.**
- Primary CTA: **Solicitar demo**
- Secondary CTA: **Ver tour**
- Image note: **Operaciones más fuertes**

The positioning phrase **Workforce Operations & Intelligence** and the claim **Run operations with clarity.** should be used where the design explicitly calls for product positioning, descriptor, product page messaging, metadata, or brand-level product explanation.

Therefore, do not treat the homepage Opex card copy as a conflict with the official positioning. Preserve the approved homepage copy unless explicitly instructed otherwise.

When a visual reference/mockup is present in `/reference`, it is the visual source of truth for layout, composition, spacing, proportions and section-level copy placement.

## Current website structure

- Header
- Hero
- Product grid
  - ZOLVEN Jobs
  - ZOLVEN Hire
  - ZOLVEN Opex
- ZOLVEN One ecosystem bar
- Footer

## Visual direction

- Premium enterprise SaaS
- Dark product interfaces
- Editorial photography
- Jobs: purple
- Hire: emerald/green
- Opex: blue
- Master brand: black/white
- Inter typography
- Clean spacing, restrained glassmorphism, minimal borders

## Current phase

The website is in visual implementation phase. Do not build the full product applications yet. Supabase will initially be used only for website backend needs such as demo requests; authentication and product databases come in later phases.

## Content depth principles

Use mature enterprise SaaS websites such as Humand only as references for **information architecture and content depth**. Do not copy their branding, visual language, product naming, claims or page structure literally.

For ZOLVEN:

- Keep **ZOLVEN = Business Technology**, not an HR-only platform.
- Preserve the product architecture: **ZOLVEN Jobs → ZOLVEN Hire → ZOLVEN Opex**, with **ZOLVEN One** as the shared ecosystem layer.
- Product pages should explain: operational problem → capability → workflow → practical value.
- Industry pages should start from concrete operational friction, then show which ZOLVEN capabilities apply.
- Keep the homepage concise; detailed explanations belong on product, solution and industry pages.
- Never fabricate customers, testimonials, usage numbers, uptime, ROI or other proof points.
- Automation is a transversal capability across products and ZOLVEN One, not a separate product unless explicitly approved.
- ZOLVEN One should be explained through identity, permissions, shared data, integrations, governance and future automation.
