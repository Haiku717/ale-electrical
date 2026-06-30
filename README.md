# A.L.E Electrical website

A friendly, family-feel website for Jake's electrical business, based in Darfield and serving the Selwyn district.

Static HTML/CSS/JS, no build step. Just open `index.html` in a browser to preview.

## Files
- `index.html`: the main homepage
- `services/`: a page for each service (repairs, lighting, switchboards, heat pumps, new builds, EV chargers, rural)
- `areas/`: local landing pages (Darfield, Kirwee, West Melton, Rolleston, Selwyn) for local Google searches
- `images/`: Jake's photos
- `css/styles.css`: all the styling
- `js/main.js`: mobile menu + footer year
- `robots.txt` / `sitemap.xml`: help Google find the pages

---

## Done so far
- Jake's mobile number (027 497 7992) is live across the whole site
- Photos added: smiling headshot in the hero, family photo in the "Meet your electrician" section
- Contact form enquiries currently go to **greg@chillair.co.nz** (temporary, via FormSubmit). Change later when Jake has his own inbox.

## ⚠️ Still to fill in before going fully live

| Placeholder | Replace with |
|---|---|
| `greg@chillair.co.nz` (shown email + form) | Jake's real business email when he has one |
| `aleelectrical.co.nz` (in meta tags) | Jake's real domain (whatever he registers) |
| Review text in "What the locals say" | Jake's real Google reviews once he has some |

Things worth confirming with Jake:
- **Registration number**: NZ electricians can show their EWRB registration number for trust. Add it to the footer.
- **Exact services**: trim or add to match what Jake actually does.
- **Hours**: I put Mon-Fri 7am-5pm as a guess.
- **What "A.L.E" stands for**: left as just the business name for now.

## How the contact form works
The form uses [FormSubmit](https://formsubmit.co) (free, no signup) and is pointed at `greg@chillair.co.nz`.

**Important:** the very first time someone submits the form, FormSubmit emails greg@chillair.co.nz a one-time "Activate Form" link. Click it once and all future enquiries come straight through. To change the destination later, just edit the email in the `action="..."` of the `<form>` in `index.html`.

## Going live
This is built the same way as chillair.co.nz (static site, GitHub Pages friendly). When Jake's happy with the content and has a domain, we can host it on GitHub Pages with a custom domain, same as Chill Air.
