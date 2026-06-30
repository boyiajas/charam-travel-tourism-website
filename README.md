# Charam Travel

Charam Travel is a React + Vite marketing website for an executive transportation and tours business based in Illovo, Sandton, Johannesburg.

The site focuses on:

- airport transfers
- executive and private transfers
- corporate travel support
- guided tours across Gauteng and the North West Province

## Stack

- React 19
- TypeScript
- Vite
- React Router 7
- Tailwind CSS 4
- `motion/react`
- Lucide React
- optional Google Maps integration via `@vis.gl/react-google-maps`

## Local Development

Prerequisites:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the TypeScript check:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Environment

The only environment variable currently used by the visible website is:

- `GOOGLE_MAPS_PLATFORM_KEY`

This is used on the contact page to render the embedded Google Map. If it is missing, the site shows a static fallback location card instead.

Note:

- `.env` and `.env.example` still contain some older AI Studio / Gemini placeholders that do not drive the current brochure site experience.

## Project Structure

```text
src/
  components/
    Breadcrumbs.tsx
    Footer.tsx
    Navbar.tsx
  pages/
    AboutPage.tsx
    ContactPage.tsx
    FAQ.tsx
    Home.tsx
    PrivacyPolicy.tsx
    SafetyPolicy.tsx
    Specials.tsx
    TermsOfService.tsx
  App.tsx
  index.css
  main.tsx

public/
  logo.transparent.png
  highway.webp
  IMG-20260620-WA0028.jpg
  apartheid-museum.jpg
  soweto.jpg
  statue-of-nelson-mandela.jpg
  sun-city-day-tour-large.jpg
```

## Routes

- `/` home page
- `/specials` fares and offers
- `/about` about page
- `/contact` contact page
- `/faq` FAQ
- `/safety` safety policy
- `/terms` terms of service
- `/privacy` privacy policy

## Current Site Notes

- The site is primarily a brochure frontend, not a complete booking platform.
- The contact form is currently presentational and does not submit to a backend.
- Cookie consent on the home page is UI-only and not persisted.
- Some older repo metadata still reflects previous AI Studio scaffolding and should not be treated as the source of truth for the current website.

## Design Direction

The current UI uses:

- maroon as the main brand accent
- editorial uppercase headings
- grayscale or subdued photography
- high-spacing brochure-style layouts
- a premium, executive-travel visual tone

## Codex Context

For a deeper technical and content overview of the site, see:

- [CODEX_CONTEXT.md](/var/www/React_Projects/charam-travel/CODEX_CONTEXT.md)

That file documents:

- live routes and page behavior
- shared components
- active vs dormant code
- hardcoded business content
- environment usage
- maintenance risks and recommended refactors
