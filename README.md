# Flamingo Living

Marketing site for Ciudad Flamingo (Falcón, Venezuela). Static [Astro](https://astro.build) site, no UI framework.

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at http://localhost:4321           |
| `npm run check`   | Type-check `.astro` and `.ts` files           |
| `npm run build`   | Type-check, then build static output to `dist/` |
| `npm run preview` | Serve the production build locally            |

## Structure

```
src/
  data/        Content and config: islas, avances, plots (sample), photos, site (nav, contact, flags)
  lib/         Framework-free logic: lead links, form validation, HubSpot client, Unsplash URLs
  styles/      tokens.css (design tokens), base.css (reset), utilities.css (layout/type helpers)
  layouts/     BaseLayout: <head>, header, footer, scroll reveal
  components/
    ui/        Button, Chip, Icon, Photo, ImageHero, StatusBadge
    layout/    Header (+ mobile menu), Footer, Logo
    home/      One component per home section
    proyectos/ Isla cards/rows and the detail-page sections (plot map, gallery, masterplan)
    avances/   AvanceEntry
    contacto/  ContactForm, ContactChannels, Field
  pages/       /, /proyectos/, /proyectos/[slug]/ (one per isla), /avances/, /contacto/
```

- Pages are rendered at build time; each interactive piece ships its own small script next to its markup.
- Every "Solicitar información" style CTA links to `/contacto/` with query params (`origen`, `isla`, `tamano`, `parcela`, `motivo`) built by `leadHref()`; the form reads them back to prefill fields and HubSpot hidden properties.
- Icons are Phosphor SVGs inlined at build time (`<Icon name="…" weight="light" />`).

## Configuration

Copy `.env.example` to `.env` and set the HubSpot portal and form ids. Without them the form logs the payload to the console and simulates a successful submission.

`site.showAvailability` in `src/data/site.ts` hides plot statuses (sold/reserved) when set to `false`.

## Deployment

Every push to `master` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`:
https://amssdias.github.io/flamingo-living/

The site is served under a sub-path, so `astro.config.mjs` sets `base: '/flamingo-living'` and internal links go through `url()` from `src/lib/paths.ts`. With a custom domain, set `site` to that domain and remove `base`.

HubSpot ids for production builds come from the repository variables `PUBLIC_HUBSPOT_PORTAL_ID` and `PUBLIC_HUBSPOT_FORM_ID`.

## Before launch

- Replace the Unsplash placeholder photos in `src/data/photos.ts` with the project's own photography.
- Replace `getSamplePlots()` with real availability from the CRM.
- Add the official plot plans (`plan` field in `src/data/islas.ts`) and the privacy / legal pages.
