# Changelog

A plain-English record of every change made to the A.L.E Electrical website.
Newest first. (The full technical history is in the GitHub commit log.)

## 2026-07-10

- **Contact form thank-you popup:** the form now submits quietly in the background (via Web3Forms) and shows a fading "Thanks for your message! We'll be in touch soon." message, instead of sending the visitor off to the Web3Forms success page. Button shows "Sending..." while it works, and the form clears on success.
- **Custom domain going live:** pointed the site at aleelectrical.co.nz. Squarespace A records added for the root domain, and the custom-domain (CNAME) file published so GitHub Pages serves the site there. HTTPS certificate provisions automatically over the following minutes.
- **Contact form switched to Web3Forms**, delivering enquiries straight to jacob@aleelectrical.co.nz (replaces the temporary FormSubmit setup that went to greg@chillair.co.nz).
- **Big redesign, published.** Moved the whole site from the friendly navy + amber look to a cleaner, more professional style.
- **New colour scheme:** charcoal, muted gold and slate (white header, dark footer), a professional builder look.
- **New logo:** the A-L-E Electrical logo now sits in the header and footer on a transparent background (old lightning-bolt mark removed).
- **Less personal, more company:** removed the "Jake" personal story, photos and first-person copy across every page. The site now speaks as the business ("we/our") rather than one person.
- **Homepage rewritten:** new headline "Canterbury electrical & heating specialists", a Selwyn-based / 17 years / Ashburton to Amberley intro, professional service descriptions, and a cleaner "What you can expect from A.L.E Electrical" section.
- **Header contact:** Jacob Sommers and phone shown next to the logo. Removed the old top contact bar.
- **Menus matched** across every page (Services, Areas, Why us, Contact).
- **Services:** now Repairs, Lighting, Switchboards, Heat pumps & air conditioning, and New builds. Removed EV chargers and Rural & farm (no farm work).
- **Areas:** added Christchurch and Waimakariri pages, tidied the existing area pages.
- **Contact:** added an email (jacob@aleelectrical.co.nz) and the contact person on the form; enquiries currently route via FormSubmit.
- **Mobile polish:** logo scales down on phones, tighter spacing, and menu links now account for the sticky header.
- **Domain prep:** all links, canonical tags, sitemap and robots now use https://aleelectrical.co.nz. The custom-domain switch itself is a separate step, done once the Squarespace DNS is pointed at GitHub.

## 2026-06-30

- **Day-1 publishable cleanup:** removed the placeholder editor note and the fabricated customer testimonials. The reviews section is now "What you can expect from Jake" (honest promises), ready to swap for real Google reviews later.
- **Nav tidy:** the "Reviews" menu item is now "Why Jake" to match.
- **Live URLs set:** canonical tags, Open Graph, structured data, sitemap and robots now point at the live address (https://haiku717.github.io/ale-electrical/) instead of a domain that doesn't exist yet.
- **Recording rule added:** from now on every edit to the site gets logged here and pushed to GitHub, so there's always a clear record of what changed.
- **Address field:** the contact form's "Where are you?" box now prompts "Enter your address".
- **Email hidden:** removed the visible email address from every page. Enquiries now come through the contact form only.
- **Contact form live:** form submissions are emailed to greg@chillair.co.nz (temporary, via FormSubmit). Needs a one-time activation click on the first submission.
- **Real phone number:** Jake's mobile 027 497 7992 added across the whole site, tap-to-call on mobile.
- **Photos added:** smiling headshot in the top hero, family photo in the "Meet your electrician" section.
- **Service pages:** built 7 dedicated pages (repairs & fault finding, lighting & LED, switchboards, heat pumps, new builds & renovations, EV chargers, rural & farm) and linked them from the homepage and footer.
- **Mobile polish:** menu, tap-to-call button, full-width buttons and stacked layouts on small screens.
- **Removed em/en-dashes** from all copy (a common AI tell).
- **Published** to GitHub Pages — live at https://haiku717.github.io/ale-electrical/
- **First build:** family-friendly site for A.L.E Electrical (Darfield / Selwyn electrician). Homepage plus 5 local area pages (Darfield, Kirwee, West Melton, Rolleston, Selwyn), warm navy + amber styling, mobile-first, with SEO basics (meta tags, structured data, sitemap).
