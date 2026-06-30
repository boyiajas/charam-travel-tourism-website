# Charam Travel Website: Codex Context

This file is a first-session orientation document for Codex or any new engineer working on the `charam-travel` website.

## Project Summary

- Project name: `charam-travel`
- Current app type: brochure-style React single-page application with client-side routing
- Business domain: executive transportation, airport transfers, chauffeur services, and guided tours in South Africa
- Geographic focus in content: Johannesburg, Sandton, Pretoria, Gauteng, selected North West routes
- Primary business positioning:
  - executive and private transfers
  - airport pickups and drop-offs
  - corporate and group travel
  - guided sightseeing tours
- Current technical posture:
  - mostly static marketing pages
  - no backend in active use
  - no live CMS
  - no booking engine
  - no persisted cookie consent
  - contact form is presentational only

## Tech Stack

- React `19`
- TypeScript
- Vite
- React Router `7`
- Tailwind CSS `4` via `@tailwindcss/vite`
- Motion library via `motion/react`
- Lucide icons
- Optional Google Maps integration via `@vis.gl/react-google-maps`

## Run Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Type check: `npm run lint`
- Preview build: `npm run preview`

## Important Repo Reality

- This directory is not currently a Git repository. `git status` fails with `fatal: not a git repository`.
- `README.md` is stale AI Studio / Gemini boilerplate and does not describe the live Charam Travel website accurately.
- `package.json` still uses the generic name `react-example`.
- The app includes some leftover AI Studio / Gemini scaffolding in config and metadata, but the visible travel site does not actively use Gemini features.

## Top-Level Files

- `package.json`: scripts and dependencies
- `vite.config.ts`: Vite config, Tailwind plugin, alias, Google Maps env injection
- `tsconfig.json`: TypeScript config, no emit, bundler resolution
- `.env` and `.env.example`: currently contain Gemini and app URL placeholders, not a full reflection of active runtime needs
- `metadata.json`: contains stale app metadata including Gemini capability flag
- `index.html`: Vite entry HTML
- `public/`: local logo and highway assets
- `src/`: application source

## Active App Structure

### Entry

- `src/main.tsx`
  - renders `<App />` inside `StrictMode`
  - imports `src/index.css`

### Shell

- `src/App.tsx`
  - wraps app in `BrowserRouter`
  - renders global `Navbar`
  - renders route content
  - renders global `Footer`

### Active Shared Components

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/Breadcrumbs.tsx`

### Active Pages

- `src/pages/Home.tsx`
- `src/pages/Specials.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/SafetyPolicy.tsx`
- `src/pages/TermsOfService.tsx`
- `src/pages/PrivacyPolicy.tsx`

## Routes

Defined in `src/App.tsx`:

- `/` -> Home
- `/specials` -> Specials
- `/about` -> About page
- `/contact` -> Contact page
- `/faq` -> FAQ page
- `/safety` -> Safety policy page
- `/terms` -> Terms of service page
- `/privacy` -> Privacy policy page

There is no 404 / not-found route yet.

## Design System and Styling

### Fonts

Imported in `src/index.css` from Google Fonts:

- `Bebas Neue`
- `Manrope`
- `Montserrat`

### Theme Tokens

Defined in `src/index.css` via Tailwind v4 `@theme`:

- `--font-sans`: `Manrope`
- `--font-serif`: `Montserrat`
- `--font-display`: `Montserrat`
- `--font-hero`: `Bebas Neue`
- `--color-maroon`: `#4c0d30`
- `--color-slate-grey`: `#6c7570`
- `--color-cream`: `#f6f4ef`

### Visual Direction

- premium brochure aesthetic
- strong use of maroon as brand accent
- grayscale or muted photography
- uppercase headings and labels
- large editorial typography
- high spacing and airy layouts
- white, cream, and maroon palette

### Motion / Animation

- hero text entrance animation on home page
- marquee effect for weather strip on home page
- motion-driven reveal animations on several inner pages
- mobile menu slide-in animation in navbar

## Navigation and Global Layout

### Navbar

`src/components/Navbar.tsx`

- Top utility bar shows:
  - `bookings@charamtravel.com`
  - `+27 (0) 82 713 9660`
- Main nav links:
  - Home
  - Fares (`/specials`)
  - Bookings (external WhatsApp link)
  - Contact Us
- Sticky navbar with backdrop blur
- Mobile nav opens full-screen overlay
- Only route-based links get active state styling

### Footer

`src/components/Footer.tsx`

- Displays copyright:
  - `Copyright © 2026 Charam Travel. All Rights Reserved.`
- Footer links:
  - Privacy Policy
  - Terms of Service
  - FAQ

### Breadcrumbs

`src/components/Breadcrumbs.tsx`

- Used on all inner pages, not on home page
- Builds breadcrumb trail from current pathname
- Returns `null` for `/`
- Last segment is not title-cased beyond replacing `-` with spaces

## Page-by-Page Behavior

### Home Page

`src/pages/Home.tsx`

Purpose:

- primary landing page
- introduces brand, services, popular tours, and cookie banner

Sections:

- Hero with large three-line welcome typography
- About Us with three circular image columns:
  - Professional
  - Reliable
  - Services
- Services grid:
  - Airport Transfers
  - Executive Transfers
  - Guided Tours
  - Group Travel
- Faux weather strip marquee
- Popular tours section over maroon background:
  - Johannesburg Highlights
  - Soweto Heritage Tour
  - Pretoria Landmarks
  - North West Escapes
- Cookie notice

Important implementation notes:

- Home uses hardcoded arrays directly inside the page file
- Many images are external Unsplash URLs
- The “weather” strip is static mock data, not live weather
- Cookie notice uses local React state only
- Accepting cookies only hides the banner for the current runtime session
- No localStorage, cookie, or consent audit trail is implemented

### Specials Page

`src/pages/Specials.tsx`

Purpose:

- presents featured offers / fares / packages

Content model:

- specials array with title, price, description, category, tag, features
- booking notes cards below the offers
- final CTA section points users to contact page for custom quotes

Important behavior:

- each offer card links externally to WhatsApp `https://wa.me/27827139660`
- content is static; there is no pricing engine or API

### About Page

`src/pages/AboutPage.tsx`

Purpose:

- establishes brand identity, credibility, leadership, and service positioning

Notable content:

- “Established 2010”
- Sandton / Illovo positioning
- vision and mission language
- B-BBEE messaging
- leadership team:
  - Charles Ramalitse
  - Mohapi Ramalitse

Important behavior:

- uses `motion/react` for reveal animations
- contains static partner / social proof names at the bottom

### Contact Page

`src/pages/ContactPage.tsx`

Purpose:

- main inquiry and booking contact page

Sections:

- hero banner image
- four contact info cards
- inquiry form
- office/support details card
- optional interactive map

Important technical behavior:

- The form does not submit anywhere.
- No `onSubmit` handler exists.
- Inputs are uncontrolled and purely presentational.
- Submit button has no functional booking workflow behind it.
- Google map only renders if `process.env.GOOGLE_MAPS_PLATFORM_KEY` is present and not equal to `YOUR_API_KEY`.
- If the key is missing, a fallback panel shows the address:
  - `35 Fricker Road, Illovo, Johannesburg`

### FAQ Page

`src/pages/FAQ.tsx`

Purpose:

- answers common booking and service questions

Behavior:

- local accordion controlled by `openIndex`
- only one item open at a time

Content note:

- FAQ uses `info@charamtravel.com` in one answer, while other live areas primarily use `bookings@charamtravel.com`
- this is a content consistency issue to watch

### Safety Policy Page

`src/pages/SafetyPolicy.tsx`

Purpose:

- communicates safety standards, maintenance, driver professionalism, monitoring, and insurance

Implementation note:

- contains a “Download Full Safety PDF” button
- button is not wired to a file or action

### Terms of Service Page

`src/pages/TermsOfService.tsx`

- static legal content
- shows `Last updated: May 2026`

### Privacy Policy Page

`src/pages/PrivacyPolicy.tsx`

- static privacy content
- shows `Last updated: May 2026`
- references POPIA

## Environment Variables and Runtime Configuration

### Actively Relevant

- `GOOGLE_MAPS_PLATFORM_KEY`
  - injected in `vite.config.ts` as `process.env.GOOGLE_MAPS_PLATFORM_KEY`
  - used by `src/pages/ContactPage.tsx`
  - if absent, page shows a static fallback instead of the live map

### Present but Probably Stale

From `.env` and `.env.example`:

- `GEMINI_API_KEY`
- `APP_URL`

These are not part of the visible website’s active user-facing behavior based on current source wiring.

## Assets

Local public assets:

- `public/logo.webp`
- `public/logo.png`
- `public/logo.transparent.png`
- `public/logo.jpeg`
- `public/logo@2x.png`
- `public/highway.jpeg`
- `public/highway.avif`
- `public/highway.webp`

Usage notes:

- navbar uses `/logo.transparent.png`
- multiple pages use `/highway.webp`
- many other visuals are loaded from remote Unsplash URLs, not local assets

## Content and Business Facts Embedded in Code

These are hardcoded throughout the app and should be treated as business content, not just UI text:

- company name: `Charam Travel`
- legal-style reference: `Charam Travel (PTY) Ltd`
- founding year: `2010`
- ownership positioning:
  - `100% Black Owned`
  - `Level 1 B-BBEE`
- main email used in nav/contact page: `bookings@charamtravel.com`
- alternate email references still appear:
  - `info@charamtravel.com`
- phone:
  - `+27 (0) 82 713 9660`
- service base language:
  - Johannesburg
  - Sandton
  - Illovo
- office/location string:
  - `35 Fricker Road, Illovo, Johannesburg`

If one of these changes, multiple page files may need manual updates because there is no centralized content source yet.

## Inactive / Dormant Components

The following components exist under `src/components` but are not currently mounted by `src/App.tsx` or active pages:

- `About.tsx`
- `Clients.tsx`
- `Contact.tsx`
- `ExperienceGallery.tsx`
- `Fleet.tsx`
- `Hero.tsx`
- `Services.tsx`
- `WeatherWidget.tsx`

These appear to come from an earlier or alternate homepage architecture with richer section-based composition.

Important implications:

- there is duplicated business content across active pages and inactive components
- contact details and service claims may diverge over time
- changes to “the site” should be made carefully after confirming whether the user means:
  - the currently live routed pages
  - the older section components
  - both

## Code Quality / Maintenance Notes

### Current Strengths

- small, understandable app structure
- route separation is clear
- styling is consistent
- no heavy data layer complexity
- easy to make presentational edits quickly

### Current Weaknesses

- static content duplicated in many places
- no centralized site config for contact info, offers, routes, or legal metadata
- no functional form handling
- no persistent cookie consent
- no SEO layer
- no 404 page
- no test suite
- stale boilerplate files still present
- mixed business emails across pages
- some buttons imply functionality that does not exist yet

### Buttons / CTAs That Are Presentational or Partial

- Contact page submit button
- Safety page PDF download button
- several “book now” style patterns in dormant components

## Suggested Safe Assumptions For Future Codex Sessions

Unless the user says otherwise, assume:

- this is a marketing/brochure frontend first, not a production booking platform
- most requested work will be:
  - content edits
  - design refinements
  - page additions
  - making CTAs functional
  - cleaning stale scaffolding
  - centralizing data
- changes should preserve the brand’s premium, editorial, maroon-forward aesthetic
- the user likely cares about the currently routed page files more than the dormant section components

## Recommended Refactor Directions

If the user asks for structural improvement, the highest-value changes are:

- centralize site content in one config/module
  - company info
  - phone
  - emails
  - address
  - services
  - offers
  - legal update dates
- replace duplicated hardcoded content with shared data sources
- decide whether to keep or remove dormant section components
- wire contact form to email, API, WhatsApp, Formspree, or serverless endpoint
- add persistent cookie consent if legally required
- update README and package metadata to match the actual site
- add SEO metadata and social sharing tags
- add a not-found route

## File Map

### Core App

- `src/main.tsx`
- `src/App.tsx`
- `src/index.css`

### Active Shared Components

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/Breadcrumbs.tsx`

### Active Pages

- `src/pages/Home.tsx`
- `src/pages/Specials.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/SafetyPolicy.tsx`
- `src/pages/TermsOfService.tsx`
- `src/pages/PrivacyPolicy.tsx`

### Dormant Components

- `src/components/About.tsx`
- `src/components/Clients.tsx`
- `src/components/Contact.tsx`
- `src/components/ExperienceGallery.tsx`
- `src/components/Fleet.tsx`
- `src/components/Hero.tsx`
- `src/components/Services.tsx`
- `src/components/WeatherWidget.tsx`

## Practical Guidance For Codex

- Start with `src/App.tsx` to understand what is actually live.
- Prefer editing `src/pages/*` for visible site changes unless the user explicitly asks to revive or reuse dormant components.
- If editing contact info, search the whole repo first because the data is duplicated.
- If adding Google Maps behavior, verify `GOOGLE_MAPS_PLATFORM_KEY` handling in both `vite.config.ts` and `ContactPage.tsx`.
- If implementing form submission, treat the current form as UI only and add real validation plus submission flow explicitly.
- If asked to “document the whole website,” use this file as the base canonical orientation.

## Quick Truth Summary

- This is a Vite + React + TypeScript travel brochure site.
- The live website is driven by routed page files in `src/pages`.
- Only `Navbar`, `Footer`, and `Breadcrumbs` are shared active components.
- Several richer section components exist but are currently unused.
- The site has strong branding and polished visuals, but limited real functionality.
- The contact form, cookie banner persistence, and safety PDF download are not implemented end-to-end.
- Some repo metadata and docs are stale and still reference AI Studio / Gemini scaffolding.
