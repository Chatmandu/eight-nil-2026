# 8-0 · World Cup 2026  (eight-nil.manualmode.xyz)

A football drafting game. Spin a 2026 World Cup nation, draft one player from
their XI, fill your formation, watch all eight matches. Inspired by 38-0 / 82-0.

Vite + React, static, configured to serve at the root of
**eight-nil.manualmode.xyz**.

---

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview
```

---

## Deploy on Cloudflare (subdomain — already set up)

You're hosting this as its own Cloudflare Pages/Workers project, separate from
the blog, on the subdomain `eight-nil.manualmode.xyz`.

### Point the subdomain at the project
1. Cloudflare dashboard → **Workers & Pages** → open **eight-nil-2026**.
2. **Custom domains** tab → **Set up a custom domain**.
3. Enter `eight-nil.manualmode.xyz` → confirm.
4. Because manualmode.xyz is already in your Cloudflare account, the DNS record
   is created automatically and SSL provisions within a minute or two. Done.

No Worker route, no redirect rule, no manual DNS needed — the subdomain serves
the project root directly.

### Build settings (if you ever recreate the project)
- Build command: `npm run build`
- Output directory: `dist`
- Vite 6+ (pinned in package.json — Cloudflare's builder requires it)

---

## Check the share preview after it's live
- Facebook/WhatsApp: https://developers.facebook.com/tools/debug/
- X: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/
Paste https://eight-nil.manualmode.xyz/ and force a re-scrape so the OG card
(og-image.png) shows. The in-app "Build yours" share link uses the live URL
automatically, so shared challenges point friends straight back here.

---

## If you ever switch to a path (manualmode.xyz/eight-nil) instead
You'd need to: set Vite `base` to `/eight-nil/` and `build.outDir` to
`dist/eight-nil`, prefix the asset/meta URLs with the subpath, and add a Worker
route. The subdomain avoids all of that, which is why it's the chosen setup.

---

## What's where
```
index.html            SEO + OG + Twitter + JSON-LD (eight-nil.manualmode.xyz)
vite.config.js        base "/"
wrangler.toml         Workers Assets config + SPA fallback
public/
  og-image.png        1200×630 link-preview card
  icon-512/192, favicon-32
  site.webmanifest     PWA manifest
  robots.txt, sitemap.xml
  _headers            caching + security headers
src/
  App.jsx             the whole game (data + engine + UI)
  main.jsx            React entry
```

## Notes
- In-app **Share image** = personal result card generated on the fly.
  `og-image.png` = the site-wide link-preview card. Two different things.
- Squad data is the `SQUADS` array at the top of `src/App.jsx`, one line per
  player. Edit ratings/clubs/call-ups there; nothing else needs changing.
