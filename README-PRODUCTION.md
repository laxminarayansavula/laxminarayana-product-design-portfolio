# Laxminarayana Avula — Production Portfolio

Static HTML/CSS/JavaScript portfolio. No build command or package installation is required.

## Deploy to Vercel
1. Import this repository in Vercel, or connect the GitHub repository.
2. Framework preset: **Other** (static site).
3. Build command: leave empty.
4. Output directory: `.` (repository root).
5. Deploy the production branch after the preview checks pass.

## Included production refinements
- Optimized project cover images and Enquire detail screens as WebP.
- Fixed the EV case-study cover path.
- Normalized the resume PDF path.
- Added image loading priorities and async decoding.
- Added favicon, canonical/social metadata, robots.txt and sitemap.xml.
- Added Vercel response headers and a custom 404 page.
- Excluded `.git` metadata and embedded source ZIP archives from the deploy bundle.

## Final manual QA still required
- Verify the deployed resume PDF opens and is the current approved version.
- Test all project cards and contact/social links in the Vercel preview.
- Check 1440px, 1024px, 768px, 390px and 360px widths.
- Test keyboard-only navigation, 200% zoom and reduced motion.
- Verify the canonical domain and social preview image after deployment.
