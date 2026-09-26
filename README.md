# Nonagni David's portfolio

Portfolio v2 redesigns the sections below the existing hero. It uses a light monochrome palette, three service groups, three featured projects, an expandable archive, a short introduction, a four-step process, a full stack with 42 brand icons, and direct contact links.

The original hero markup, artwork, and animation functions are preserved. English and French are supported throughout the page and project dialogs. All eleven projects remain available.

## Local preview

Run `python -m http.server 5186 --bind 127.0.0.1` from the repository and open http://127.0.0.1:5186. No build or package installation is required.

## Files

- `index.html`: page structure and English fallback copy.
- `assets/css/style.css` and `style.min.css`: original styles, including the preserved hero. The page loads the minified version.
- `assets/css/portfolio-v2.css`: redesigned sections, navigation, and project dialogs.
- `assets/js/script.js`: bilingual content, hero animation, navigation, and project dialogs.
- `assets/js/script.min.js`: deployed JavaScript; regenerate with Terser after editing the source. Bump its query version in index.html when publishing an update.
- `assets/images` and `assets/screenshots`: original portrait, hero image, and project images.

GSAP, ScrollTrigger, and fonts load from the existing external providers. The redesign adds no dependencies.

## Verification

Check syntax with `node --check assets/js/script.js` and `node --check assets/js/script.min.js`. In a browser, check both languages, desktop and mobile layouts, the project archive, dialog opening and Escape dismissal, focus return, navigation, and contact links.

The site is published from `main` at https://0d4vid.is-a.dev/. The previous version is preserved on `portfolio-v1`.

See `SEO-AUDIT.md` for the comparison with the original SEO configuration.

