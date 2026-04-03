# Dreamhouse Finance - Agent Documentation

## Project Overview

Dreamhouse Finance is a German-language website for a real estate and financing agency based in Bremen, Germany. The business is run by Esperanza Weiher Muñoz, who operates as both a certified real estate agent (Immobilienmaklerin) and financing expert (Finanzierungsexpertin).

**Live Site:** https://dreamhouse-finance.de

**Business Value Proposition:** "Immobilien & Finanzierung aus einer Hand" (Real Estate & Financing from a Single Source)

---

## Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Framework | Astro | ^4.5.0 |
| Styling | Tailwind CSS | ^3.4.1 |
| Integration | @astrojs/tailwind | ^5.1.0 |
| Typography | @tailwindcss/typography | ^0.5.10 |
| Icons | @fortawesome/fontawesome-free | ^7.2.0 |
| Runtime | Node.js | >=18.0.0 |

### Font Assets (Self-hosted)
- **Bodoni Moda** (400, 600, 700) - Used for main headings (H1, H2)
- **Montserrat** (400, 500, 600, 700) - Used for body text and subheadings (H3-H6)

---

## Project Structure

```
.
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
├── netlify.toml              # Netlify deployment configuration
├── package.json              # Dependencies and scripts
├── public/                   # Static assets
│   ├── favicon.svg
│   ├── robots.txt            # SEO robots configuration
│   ├── sitemap.xml           # SEO sitemap
│   ├── fonts/                # Self-hosted font files (TTF)
│   │   ├── bodoni-moda-400.ttf
│   │   ├── bodoni-moda-600.ttf
│   │   ├── bodoni-moda-700.ttf
│   │   ├── montserrat-400.ttf
│   │   ├── montserrat-500.ttf
│   │   ├── montserrat-600.ttf
│   │   └── montserrat-700.ttf
│   └── images/               # Site images
│       ├── hero.jpeg
│       ├── leistung1.jpeg
│       ├── leistung2.png
│       ├── logo.jpeg
│       └── ubermich.jpeg
└── src/
    ├── env.d.ts              # TypeScript declarations
    ├── styles/
    │   └── global.css        # Global CSS with custom properties
    ├── layouts/
    │   └── Layout.astro      # Base page layout with SEO, fonts, structured data
    ├── components/
    │   ├── Header.astro      # Navigation header with mobile menu
    │   ├── Footer.astro      # Site footer with links and contact info
    │   ├── ServiceCard.astro # Service feature cards (icon, title, description)
    │   ├── ProcessStep.astro # Process step component (number, title, description)
    │   ├── CookieBanner.astro # DSGVO cookie consent banner
    │   ├── WhatsAppButton.astro # Floating WhatsApp button
    │   └── CalculatorIframe.astro # Embedded calculator iframes with 2-click solution
    └── pages/
        ├── index.astro       # Homepage
        ├── leistungen.astro  # Services page
        ├── ueber-uns.astro   # About page with Google Maps
        ├── rechner.astro     # Calculator tools page (12 calculators)
        ├── kontakt.astro     # Contact page with Web3Forms
        ├── kontakt/
        │   └── erfolg.astro  # Contact form success page
        ├── impressum.astro   # Legal imprint
        ├── datenschutz.astro # Privacy policy (DSGVO)
        └── 404.astro         # 404 error page
```

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview

# Astro CLI
npm run astro -- [command]
```

---

## Architecture Details

### Astro Configuration (`astro.config.mjs`)
- **Output Mode:** Static (`output: 'static'`)
- **Build Format:** Directory (`build.format: 'directory'`)
- **HTML Compression:** Enabled (`compressHTML: true`)
- **Site URL:** https://dreamhouse-finance.de
- **Integration:** Tailwind CSS

### Tailwind Configuration (`tailwind.config.mjs`)

**Custom Colors:**
```javascript
primary: {
  DEFAULT: '#fb4285',    // Pink/coral brand color
  hover: '#e63a77',      // Darker shade for hover states
  light: '#fef0f5',      // Very light pink for backgrounds
}
slate: {
  850: '#1e293b',        // Extended slate palette
  900: '#0f172a',
}
```

**Font Families:**
- `font-sans`: Montserrat, system-ui stack (body text)
- `font-heading`: Bodoni Moda, Georgia, serif (H1, H2)
- `font-subheading`: Montserrat, system-ui, sans-serif (H3-H6, uppercase with wide letter-spacing)

**Custom Shadows:**
- `shadow-soft`: `0 4px 20px -2px rgba(0, 0, 0, 0.08)`
- `shadow-card`: `0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)`

---

## Code Organization Patterns

### Page Structure
All pages follow this consistent pattern:

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import CookieBanner from '../components/CookieBanner.astro';
import WhatsAppButton from '../components/WhatsAppButton.astro';

const title = 'Page Title';
const description = 'SEO meta description';
---

<Layout title={title} description={description}>
  <Header slot="header" />
  
  <main>
    <!-- Page content -->
  </main>
  
  <Footer slot="footer" />
  <CookieBanner slot="cookie-banner" />
  <WhatsAppButton slot="whatsapp" />
</Layout>
```

### Component Conventions
- Props interfaces defined at the top of each component
- Semantic HTML with ARIA attributes for accessibility
- Tailwind utility classes for styling
- German comments for section demarcation (`<!-- ======================================== -->`)
- Props destructuring: `const { title, description } = Astro.props;`

---

## Key Integrations

### Contact Form (Web3Forms)
- **Endpoint:** `https://api.web3forms.com/submit`
- **⚠️ IMPORTANT:** Access key is a placeholder (`IHRE_WEB3FORMS_ACCESS_KEY`)
- Must be replaced with actual key before deployment (get from https://web3forms.com/)
- Includes honeypot spam protection (`botcheck` field)
- Redirects to `https://dreamhouse-finance.de/kontakt/erfolg/` after submission
- Form fields: name, email, phone, betreff (subject), message, dsgvo checkbox

### Calculator Tools (eHyp)
- **Provider:** eHyp (weihermunoz.ehyp.de)
- **12 embedded calculators** via iframe with DSGVO-compliant 2-click loading:
  1. Budgetrechner (69305b010a42e758b5129d16)
  2. Tilgungsrechner (69305b010a42e758b5129d20)
  3. Ratenkreditrechner (69305b010a42e758b5129d17)
  4. Anschlussfinanzierungsrechner (69305b010a42e758b5129d18)
  5. Volltilgungsrechner (69305b010a42e758b5129d19)
  6. Haushaltsrechner (69305b010a42e758b5129d1a)
  7. Zinsrechner (69305b010a42e758b5129d1b)
  8. Zinsverlauf (69305b010a42e758b5129d1c)
  9. Zinscheck / Zinsvergleich (69305b010a42e758b5129d1d)
  10. Immobilienwertrechner (69305b010a42e758b5129d1e)
  11. Sanierungsrechner (69305b010a42e758b5129d1f)
  12. Finanzierungsanfrage (69a0a1ea21e575ae47b28e79)
- **CalculatorIframe.astro** component manages loading via `window.CalculatorManager`
- Communicates via postMessage for height adjustments

### WhatsApp Integration
- **Business number:** `+49 162 2894304`
- Floating button on all pages
- Direct link to WhatsApp Web/App via `https://wa.me/491622894304`

### Google Maps
- **2-click solution** on Über Uns page for DSGVO compliance
- Placeholder shown first, iframe loaded after user clicks "Karte anzeigen"
- Location: Andreestraße 59, 28215 Bremen

---

## DSGVO / GDPR Compliance

### Cookie Consent System
- Custom implementation using `localStorage` (not cookies)
- Storage key: `dreamhouse_cookie_consent_v2`
- Two consent levels: `essential` or `accepted`
- Dispatches `cookieConsentChanged` custom event
- Banner appears after 500ms if no consent stored
- Loads eHyp calculators only after consent given

### External Content Loading
- **Google Maps:** 2-click solution on Über Uns page
- **eHyp Calculators:** Consent-gated loading via CalculatorManager
- **Web3Forms:** Only loads on form submission

### Legal Pages
- `impressum.astro` - Legal imprint (German TMG requirements)
- `datenschutz.astro` - Privacy policy (DSGVO compliant)
- Both marked with `noindex={true}`

---

## Security Configuration

### Netlify Headers (`netlify.toml`)
```toml
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "strict-origin-when-cross-origin"
Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
Permissions-Policy = "accelerometer=(), camera=(), ..."
Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; ..."
```

### Cache Strategy
- Static assets (fonts, images, CSS, JS): 1 year immutable
- HTML pages: No cache (must-revalidate)

---

## SEO Configuration

### Layout.astro SEO Features
- Meta description, Open Graph, Twitter Cards
- Canonical URLs auto-generated
- Schema.org LocalBusiness structured data (JSON-LD)
- `noindex` prop for legal pages
- Robots meta tag control
- Preconnect to Web3Forms API
- Preload critical fonts (Bodoni Moda 600, Montserrat 400)

### Static SEO Files
- `public/robots.txt` - Allows all, points to sitemap
- `public/sitemap.xml` - Manual sitemap with all pages

---

## Accessibility Standards

The codebase follows WCAG 2.1 AA guidelines:

- Semantic HTML5 elements (`<main>`, `<section>`, `<nav>`, `<article>`, etc.)
- ARIA labels on all interactive elements
- Focus visible styles with primary color outline (2px solid)
- Skip-to-content link support (`.skip-link` class in global.css)
- Alt text on all images
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support for mobile menu (Escape to close)
- Reduced motion considerations
- Language attribute set to `de` on html element
- `aria-current="page"` for active navigation items
- `aria-expanded` for mobile menu toggle
- `sr-only` class for screen reader only text

---

## Business Contact Information

When updating contact details, update ALL these locations:

1. `src/components/Footer.astro` - `contactInfo` object
2. `src/pages/kontakt.astro` - `contactInfo` object
3. `src/pages/impressum.astro` - `contactInfo` object
4. `src/components/WhatsAppButton.astro` - `whatsappNumber` constant
5. `src/layouts/Layout.astro` - Schema.org structured data

**Current Contact:**
- Name: Esperanza Weiher Muñoz
- Company: Dreamhouse Finance
- Address: Andreestraße 59, 28215 Bremen
- Phone: 0162 2894304
- Email: Info@dreamhouse-finance.de
- Hours: Mo-Fr: 09:00 - 18:00 Uhr

---

## Testing Checklist

Before deploying changes:

- [ ] Build completes without errors (`npm run build`)
- [ ] All pages render correctly in preview (`npm run preview`)
- [ ] Mobile menu works on small screens
- [ ] Cookie banner displays and stores consent
- [ ] Contact form submits successfully (test with real Web3Forms key)
- [ ] Calculators load after consent given
- [ ] WhatsApp button links correctly
- [ ] No console errors
- [ ] Lighthouse score >90 for accessibility

---

## Deployment

**Platform:** Netlify
**Build Command:** `npm run build`
**Publish Directory:** `dist`
**Node Version:** 18

### Redirects (in `netlify.toml`)
- `/impressum` → `/impressum/` (301)
- `/datenschutz` → `/datenschutz/` (301)

---

## Code Style Guidelines

### Language
- All content is in **German**
- Maintain German text when editing
- Use German comments to match existing code style

### CSS/Tailwind
- Always use the Tailwind primary/slate color palette
- Never hardcode colors; use `primary`, `primary-hover`, `primary-light`
- Use custom box shadows: `shadow-soft`, `shadow-card`
- Use `scroll-mt-*` for anchor link offset (sticky header compensation)

### Images
- Place new images in `public/images/`
- Use absolute paths (`/images/filename.png`)
- Include proper `alt` attributes for accessibility
- Use `loading="lazy"` for below-fold images
- Use `loading="eager"` for hero/above-fold images
- Include `width` and `height` attributes to prevent layout shift

### Forms
- Always include DSGVO checkbox with link to privacy policy
- Mark required fields with red asterisk (`<span class="text-primary">*</span>`)
- Include `aria-required="true"` on required inputs
- Include `aria-label` on interactive elements without visible text
- Use `action` and `method` attributes for form submission
- Include honeypot field (`botcheck`) for spam protection

### SEO
- Every page needs unique `title` and `description` props
- Use `noindex={true}` for legal pages (impressum, datenschutz, 404, erfolg)
- Canonical URLs are auto-generated in Layout.astro

### Typography
- H1, H2: Use Bodoni Moda (automatic via global.css)
- H3-H6: Use Montserrat with semibold weight
- Body: Default sans (Montserrat)
- Subheadings with `font-subheading` class for uppercase + letter-spacing

---

## Notes for AI Agents

1. **Language:** All content is in German. Maintain German text when editing.
2. **Comments:** Use German comments to match existing code style.
3. **Colors:** Always use the Tailwind primary/slate color palette, never hardcode colors.
4. **Images:** Place new images in `public/images/` and use absolute paths (`/images/filename.png`).
5. **Forms:** Always include DSGVO checkbox and required field indicators.
6. **SEO:** Every page needs unique `title` and `description` props.
7. **Accessibility:** Always include `aria-label` on interactive elements without visible text.
8. **Font Loading:** Fonts are self-hosted in `public/fonts/` and loaded via inline `@font-face` in Layout.astro.
9. **External Content:** Always use 2-click solution for external iframes (DSGVO compliance).
10. **Contact Info:** Update in multiple locations when changing (see Business Contact Information section).
