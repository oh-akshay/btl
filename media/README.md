Media folder structure and usage
================================

Put all media files for the grade/category views here.

Recommended structure
---------------------

- media/
  - media.js                # Edit this file to list your videos
  - videos/                 # Your MP4 files here
    - language/             # Optional: subfolders per category
    - art/
    - music/
    - stem/
    - fitness/
    - public-speaking/
    - chess/
    - robotics/

How to configure videos
-----------------------

1) Open media/media.js and edit the MEDIA_LIBRARY object.
2) Each category key maps to a list of videos.
3) A video can be a YouTube embed by id (yt), or a local file (file).
4) Optional: add a poster image (thumbnail) using 'poster'.

Example entries
---------------

window.MEDIA_LIBRARY = {
  "music": [
    { title: "Choir Showcase", yt: "abc123XYZ" },
    { title: "Class Jam Session", file: "media/videos/music/jam-session.mp4", poster: "assets/posters/music/jam.jpg" }
  ],
  "robotics": [
    { title: "Robot Demo", file: "media/videos/robotics/robot-demo.mp4" }
  ]
};

Notes
-----

- Local files should be referenced with a relative path from the HTML page (e.g., media/videos/...)
- You don’t need to change btl.html; the page auto-loads media/media.js if present.
- If both 'yt' and 'file' are present, 'file' is used.

Slideshows (mix images + videos)
--------------------------------

You can attach a slideshow to any category item (e.g., Parent–Toddler "Movement | My Body").
Add an entry with an `items` array; each sub-item can be:

- Image: `{ img: "media/images/pt/movement1.jpg", title: "Balance beam" }`
- YouTube: `{ yt: "YOUTUBE_ID", title: "Warmup song" }`
- Local MP4: `{ file: "media/videos/pt/body/warmup.mp4", poster: "..." }`
- Google Drive: `{ gdriveLink: "https://drive.google.com/file/d/FILE_ID/view", title: "Gross motor" }`

Example:

window.MEDIA_LIBRARY = {
  "pt-movement-my-body": [
    {
      title: "My Body Slideshow",
      items: [
        { img: "media/images/pt/body/pose-1.jpg", title: "Stretching" },
        { gdriveLink: "https://drive.google.com/file/d/FILE_ID/view", title: "Jumping" },
        { yt: "abc123XYZ", title: "Freeze dance" }
      ]
    }
  ]
}

Auto-load from Google Drive folder
----------------------------------

You can point a slideshow at a Drive folder and the app will fetch items at runtime (images + videos):

1) Enable Google Drive API for your Google Cloud project and create an API key
2) In `media/media.js`, set:

   window.DRIVE_API_KEY = "YOUR_GOOGLE_API_KEY";

3) Add a slideshow with a `gdriveFolder` id (from the folder URL):

   window.MEDIA_LIBRARY = {
     "pt-movement-my-body": [
       { title: "My Body Slideshow", gdriveFolder: "17czGuJYC3_VYVeWCcCagidA0Kf-QeWFb" }
     ]
   };

Notes:
- Restrict your API key by HTTP referrer to your site (e.g., your GitHub Pages domain).
- Only files shared publicly (Anyone with the link: Viewer) will be visible.

Preschool Overview (Option 1 – Case A)
--------------------------------------

Optionally configure a dedicated preschool overview with 3 videos and a deck:

window.MEDIA_PRESCHOOL = {
  videos: [
    { title: "Campus Tour", yt: "abc123XYZ" },
    { title: "A Day at Preschool", file: "media/preschool/day-at-preschool.mp4" },
    { title: "Parent Stories", yt: "def456UVW" }
  ],
  deck: "media/preschool/deck.pdf" // PDF or external link
};

Parent–Toddler Categories (Option 1 – Case B)
---------------------------------------------

Add toddler-specific categories (optional keys shown below). The UI uses
these keys if present; otherwise, it falls back to placeholders.

window.MEDIA_LIBRARY = {
  "toddler-sensory": [ { title: "Sensory Play", file: "media/videos/toddler/sensory1.mp4" } ],
  "toddler-bonding": [ { title: "Bonding Time", yt: "ghi789RST" } ],
  "toddler-music":   [ { title: "Music & Movement", file: "media/videos/toddler/music1.mp4" } ]
};
