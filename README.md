Openhouse Programs — Static App
================================

This is a zero-backend, static web app you can deploy on GitHub Pages (or Netlify/Vercel). It contains:

- `index.html` — the entire app (HTML + CSS + JS)
- `media/` — configurable media library and optional local videos
- `assets/icons/` — optional SVG/PNG icons for categories

Run locally
-----------

- Python: `python3 -m http.server 8000`
- Visit: `http://localhost:8000/`

Why a local server? Opening via `file://` can block media and script features on some browsers. Serving over HTTP avoids those issues.

Configure media
---------------

- Edit `media/media.js`.
- Preschool overview (Option 1 — Case A):
  - `window.MEDIA_PRESCHOOL = { videos: [...], deck: 'media/preschool/deck.pdf' }`
- Category videos (grade/parent–toddler):
  - `window.MEDIA_LIBRARY = { 'music': [...], 'robotics': [...], ... }`
- Each item can be YouTube (`yt: 'ID'`) or local file (`file: 'media/videos/...mp4'`), plus optional `poster`.

Deploy to GitHub Pages
----------------------

1) Create a new repo on GitHub (or use an existing one).
2) Initialize locally and push:

   git init
   git add .
   git commit -m "Initial Openhouse static app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main

3) Enable GitHub Pages:
   - Repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` → `/ (root)`
   - Save. Wait for the green check; your site will be at `https://<your-username>.github.io/<your-repo>/`.

Deploy to Netlify (optional)
----------------------------

- Drag & drop the folder onto https://app.netlify.com/drop
- Or connect your GitHub repo and set build = none, publish directory = `/`.

Deploy to Vercel (optional)
---------------------------

- Import the GitHub repo on https://vercel.com/new
- Framework preset: Other; Output directory: `/` (root). No build step needed.

Notes
-----

- The app uses hash-based routing (e.g., `#preschool-intro`, `#grades`), so it works fine on GitHub Pages without special 404 handling.
- If a YouTube video shows an embed error (e.g., 153), the app will still show a thumbnail, and the lightbox offers an "Open in YouTube" link.
