# A.L.E Electrical website

The website for A.L.E Electrical, a family run electrical and heating business based in
Darfield, Selwyn, serving homes and businesses across Canterbury (Ashburton to Amberley).

**Live:** https://aleelectrical.co.nz

Static HTML/CSS/JS, no build step. Just open `index.html` in a browser to preview.

## Files
- `index.html`: homepage (hero, trust strip, services, areas, why us, contact form)
- `services/`: one page per service (heat pumps & air conditioning, ventilation, lighting,
  switchboards, repairs & fault finding, new builds & renovations)
- `areas/`: local landing pages for local Google searches (Darfield, Kirwee, West Melton,
  Rolleston, Sheffield, Hororata, Leeston, Selwyn, Christchurch, Waimakariri)
- `images/`: logo (`ale-logo.png`, header + footer)
- `css/styles.css`: all the styling
- `js/main.js`: mobile menu, footer year, contact-form AJAX + thank-you popup
- `robots.txt` / `sitemap.xml`: help Google find the pages
- `CNAME`: custom domain for GitHub Pages

## Hosting
Published with **GitHub Pages** on the custom domain **aleelectrical.co.nz** (HTTPS enforced;
`www` and the old github.io URL redirect in). DNS is managed in Squarespace.

## Contact form
The contact form uses [Web3Forms](https://web3forms.com). Submissions are emailed to
**jacob@aleelectrical.co.nz**. It posts in the background (AJAX) and shows a fading thank-you
popup instead of redirecting. The access key lives in the hidden `access_key` field of the
`<form>` in `index.html`; to change the destination, update it in the Web3Forms dashboard.

## Editing rule
Every change to the site gets a dated entry in `CHANGELOG.md`, then a commit pushed to `main`,
so the repo is always a clear record of what changed and why.
