# Neuro Pathway — Professional Website Redesign

## Goal
Rebuild the existing Google Sites site (https://sites.google.com/view/mindtatvas/home) as a polished, professional single-page website and publish it.

## Design Direction
- Calm, trustworthy, wellness-meets-science aesthetic
- Warm neutral base with a soft sage/teal accent and terracotta warmth
- Generous whitespace, elegant serif headings paired with clean sans-serif body
- Professional photography-style imagery generated to match the mental-health/transformation theme

## Sections (preserving all current content)
1. **Hero** — "Neuro Pathway" + "Changing Your Reality" with CTA buttons
2. **About Me** — Shetall's story, R.E.S.T Sessions, approach
3. **R.E.S.T Approach** — Self Imprint / Life Imprint / DNA Imprint cards
4. **Services** — Addictions, Limiting Beliefs, Trauma, Anxiety, Weight, Eating Habits, Fear & Phobia, Numerology
5. **Testimonials** — Embedded YouTube testimonials (Amanda, Akos, Cay)
6. **CTA** — Register for free masterclass + book free exploration call
7. **Footer** — Contact/social placeholder

## Technical Plan
- Single-page TanStack Start app at `/`
- Anchor navigation (Home, About, Services, Testimonials, Contact)
- Design tokens in `src/styles.css` (oklch, semantic variables)
- Generated hero + section images in `src/assets/`
- SEO meta tags (title, description, og, twitter)
- Responsive layout
- Publish via Lovable when complete

## Out of Scope
- Blog, Shop, FAQ separate pages (not enough content provided; can be added later)
- Backend/forms (will link to existing Google Forms for masterclass/call booking)
