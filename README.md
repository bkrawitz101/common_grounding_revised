# Common Grounding — Static Site (Local)

This repository contains a small static multi-page scaffold for the Common Grounding site.

Files of interest
- `index.html`, `projects.html`, `guilds.html`, `portal.html`, `join.html` — pages
- `css/styles.css` — visual system (do not overwrite)
- `js/main.js` — site interactions (mobile nav toggle, smooth anchors)

Quick start (serve locally)

```bash
cd /Users/bk/Documents/GitHub/common_grounding_revised
python3 -m http.server 8000
# open http://localhost:8000/ in your browser
```

Stopping the server

Press `Ctrl-C` in the terminal where the server is running.

Key class-name conventions
- Buttons: use the base class `btn` plus a modifier, e.g. `btn btn--primary`, `btn btn--secondary`, `btn btn--accent`.
- Cards: use `card` for standard cards. Guild cards may use `guild-card` and helpers like `guild-card__icon`, `guild-card__title`, `guild-card__label`, `guild-card__description`.
- Nav: the toggle button is expected as `id="menuToggle"` or `.nav-toggle`; the nav element should have class `site-nav` or `top-nav`.

Notes
- `css/styles.css` already defines the visual tokens (Soil, Mycelium, Canopy, Ember, Mist, Glow) and component styling. Avoid overwriting it.
- `js/main.js` is written in vanilla JS and handles the mobile nav toggle and smooth scrolling for internal anchors.

Next steps
- Add favicon, metadata, or CMS configuration for deployment (GitHub Pages, Netlify, etc.).

If you want, I can add a small favicon and `docs/` deployment config next.
