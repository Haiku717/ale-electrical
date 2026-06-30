# A.L.E Electrical website

A friendly, family-feel website for Jake's electrical business, based in Darfield and serving the Selwyn district.

Static HTML/CSS/JS, no build step. Just open `index.html` in a browser to preview.

## Files
- `index.html`: the main homepage
- `areas/`: local landing pages (Darfield, Kirwee, West Melton, Rolleston, Selwyn) for local Google searches
- `css/styles.css`: all the styling
- `js/main.js`: mobile menu + footer year
- `robots.txt` / `sitemap.xml`: help Google find the pages

---

## ⚠️ Placeholders to fill in before going live

I've used obvious dummy details so we don't publish anything wrong. Search-and-replace these everywhere:

| Placeholder | Replace with |
|---|---|
| `027 000 0000` and `+64270000000` | Jake's real mobile number |
| `hello@aleelectrical.co.nz` | Jake's real email |
| `aleelectrical.co.nz` | Jake's real domain (whatever he registers) |
| `your-form-id` (in the contact form) | A real form endpoint: see below |
| Photo boxes (📷) | Real photos of Jake, the family and the van |
| Review text in "What the locals say" | Jake's real Google reviews once he has some |

Things worth confirming with Jake:
- **Registration number**: NZ electricians can show their EWRB registration number for trust. Add it to the footer.
- **Exact services**: I listed the common ones (repairs, lighting, switchboards, heat pumps, new builds, EV chargers, rural). Trim or add to match what Jake actually does.
- **Hours**: I put Mon-Fri 7am-5pm as a guess.
- **What "A.L.E" stands for**: left as just the business name for now.

## Making the contact form actually send emails
Right now the form points at a placeholder. Easiest free option is [Formspree](https://formspree.io):
1. Sign up, create a form, copy its endpoint (looks like `https://formspree.io/f/abc123`).
2. Paste it into the `action="..."` of the `<form>` in `index.html`.
That's it: submissions land in Jake's inbox.

## Going live
This is built the same way as chillair.co.nz (static site, GitHub Pages friendly). When Jake's happy with the content and has a domain, we can host it on GitHub Pages with a custom domain, same as Chill Air.
