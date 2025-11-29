// Edit this file to configure videos per category.
// With defaults removed, only entries here will appear in the app.

// Tip: Each item can use one of:
// - { yt: "YOUTUBE_ID" }
// - { gdriveLink: "https://drive.google.com/file/d/FILE_ID/view" }
// - { file: "media/videos/<category>/video.mp4", poster: "optional_thumb.jpg" }
// Optional per-item: { minGrade: "ukg" } to show only UKG and above

window.MEDIA_LIBRARY = {
  // Language
  "language": [
    // { title: "Phonics Play", yt: "YOUTUBE_ID" },
    // { title: "Story Time", gdriveLink: "https://drive.google.com/file/d/FILE_ID/view" },
    // { title: "Alphabet Song", file: "media/videos/language/alphabet.mp4" }
  ],

  // Art
  "art": [
    // { title: "Creative Art", yt: "YOUTUBE_ID" },
    { title: "Art Overview", gdriveLink: "https://drive.google.com/file/d/1hjkRiC6m5Nsj-7VlP9EY646fbx9tlURw/view?usp=drive_link", minGrade: "ukg" },
    { title: "Art Showcase", gdriveLink: "https://drive.google.com/file/d/1COnQq-BqhZKnaOtiHL1XmR1C76OorhJW/view?usp=drive_link", minGrade: "ukg" },
    { title: "Artventure Game", gdriveLink: "https://drive.google.com/file/d/1WT2wZA_0CxS0lKY5F6AVvw2SFnxjnx2z/view?usp=drive_link", minGrade: "ukg" },
    
  ],

  // Music
  "music": [
    // { title: "Choir Performance", gdriveLink: "https://drive.google.com/file/d/FILE_ID/view" },
    { title: "Music Overview", gdriveLink: "https://drive.google.com/file/d/1XReM4Rjp6FZAgrIMgDQreMQrWhlOlqwW/view?usp=drive_link", minGrade: "ukg" },
    { title: "Music Showcase", gdriveLink: "https://drive.google.com/file/d/17e4LTn9zjbCLltciHL6w9Kztc0yS2pyh/view?usp=drive_link", minGrade: "ukg" }
  ],

  // STEM
  "stem": [
    // { title: "Tinkering Lab", yt: "YOUTUBE_ID" },
    // { title: "Simple Machines", file: "media/videos/stem/simple-machines.mp4" }
  ],

  // Fitness
  "fitness": [
    // { title: "Kids Workout", yt: "YOUTUBE_ID" }
  ],

  // Public Speaking
  "public-speaking": [
    // { title: "Overview", yt: "YOUTUBE_ID" },
    { title: "Public Speaking Showcase", gdriveLink: "https://drive.google.com/file/d/1lsXHMDFCkKsSU_EfNB6HhVcsWrmmEUEA/view?usp=drive_link", minGrade: "ukg" },
    { title: "Improv Survival Game", gdriveLink: "https://drive.google.com/file/d/1D2XXoeHFz0v6_2Z0NbK3jTkKPuqMg-05/view?usp=drive_link", minGrade: "ukg" },
    { title: "Script Flip Game", gdriveLink: "https://drive.google.com/file/d/1aMqGDDIFF3eMp-ykY0GuebNvLhh9E9FW/view?usp=drive_link", minGrade: "ukg" },
    { title: "Guess Roleplay Game", gdriveLink: "https://drive.google.com/file/d/18v7_ExhilINXJsV8XdBwGS4FlvTUcDxT/view?usp=drive_link", minGrade: "ukg" },
    
    
    
  ],

  // Chess
  "chess": [
    // { title: "Chess Basics", yt: "YOUTUBE_ID" }
  ],

  // Robotics
  "robotics": [
    // { title: "Robot Build", yt: "YOUTUBE_ID" },
    // { title: "Coding Robots", file: "media/videos/robotics/coding.mp4" }
    { title: "Robotics Showcase", gdriveLink: "https://drive.google.com/file/d/1V-s_GZj7955mvAhb-gHcPHPgrDxleh2Q/view?usp=drive_link", minGrade: "ukg" },
    { title: "Robotics Showcase", gdriveLink: "https://drive.google.com/file/d/1f0NBKmnEZ0Fm5st6vCy2Qj_x8Aii6z21/view?usp=drive_link", minGrade: "ukg" },
    
  ],

  // Parent–Toddler subjects (uncomment a block below to override placeholders)
  // "pt-art-colours": [
  //   { title: "Colour Hunt", items: [
  //     { img: "media/images/pt/colours/red.jpg", title: "Red" },
  //     { img: "media/images/pt/colours/blue.jpg", title: "Blue" }
  //   ] }
  //   // Or auto-load from Drive:
  //   // { title: "Art | Colours", gdriveFolder: "DRIVE_FOLDER_ID" }
  // ],
  // "pt-sensory-food": [
  //   { title: "Food Textures", items: [ { img: "media/images/pt/food/oats.jpg" } ] }
  // ],
  // "pt-sensory-nature": [
  //   { title: "Nature Tray", items: [ { img: "media/images/pt/nature/leaves.jpg" } ] }
  // ],
  // "pt-movement-things-that-move": [
  //   { title: "Rolling & Pushing", items: [ { yt: "YOUTUBE_ID", title: "Warmup" } ] }
  // ],
  // "pt-movement-my-body": [
  //   { title: "My Body Slideshow", gdriveFolder: "DRIVE_FOLDER_ID" }
  // ],
  // "pt-music-storytelling-animals": [
  //   { title: "Animal Rhythms", items: [ { yt: "YOUTUBE_ID" } ] }
  // ],
  // "pt-practical-life-me-home": [
  //   { title: "Me & My Home", items: [ { img: "media/images/pt/home/sorting.jpg" } ] }
  // ]
};

// Optional: API key for Drive folder auto-load (see media/README.md)
// window.DRIVE_API_KEY = "YOUR_GOOGLE_API_KEY";

// Preschool / Daycare overview (used in the under-30-months flow)
// Pre-filled; update IDs/paths or add more entries.
window.MEDIA_PRESCHOOL = {
  videos: [
    { title: "Preschool Overview", yt: "yQBz2Rumf7s" },
    { title: "A Day at Preschool", yt: "17JBTSm8at0" },
    { title: "Sensory Play", yt: "YrnIiDFBvdo" },
    // You can add more entries or slideshows, e.g.:
    // { title: "Campus Tour", yt: "YOUTUBE_ID" },
    // { title: "Gallery", items: [ { img: "media/images/preschool/1.jpg" }, { img: "media/images/preschool/2.jpg" } ] },
    // { title: "Highlights", gdriveFolder: "DRIVE_FOLDER_ID" }
  ],
  deck: "media/preschool/deck.pdf"
};
