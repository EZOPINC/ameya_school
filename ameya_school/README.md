_dance-school/
  ├── _config.yml
  ├── _includes/
  │     ├── header.html
  │     ├── footer.html
  │     └── nav.html
  ├── _layouts/
  │     └── default.html
  ├── _events/
  │     ├── 2025-01-20-summer-festival.md
  │     └── 2024-11-12-cultural-night.md
  ├── _videos/
  │     └── 2025-08-youtube-showcase.md
  ├── assets/
  │     ├── css/style.css
  │     └── img/
  ├── index.html   → Home
  ├── bio.md       → Bio
  ├── events.md    → Events
  ├── videos.md    → YouTube embeds
  └── contact.md   → Contact form link / info


🎨 Design Features (HTML + CSS)

Here’s what we can do without heavy JS:

Hero Section: Full-width background video or image, text overlay with fade-in.

Image Gallery (Home): CSS Grid layout with hover zoom + caption fade.

Bio Section: Split layout (text on left, portrait on right), mobile collapses to stack.

Events Page: Cards with event image, hover animation, and tags (Upcoming / Past).

Videos Page: Responsive embedded YouTube grid.

Contact Page: Stylish form (via Formspree/Netlify Forms) + icons.

Animations:

@keyframes fade-in & slide-up for sections on scroll.

Smooth hover effects on buttons/images.

Sticky nav with transition background when scrolling.

📱 Responsiveness

Mobile-first CSS grid → collapses into single column.

Media queries for tablet & desktop → scale up gallery/events.

Flexible iframes for YouTube → auto-resize via aspect-ratio.