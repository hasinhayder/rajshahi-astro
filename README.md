# Rajshahi Blog - Astro Theme

A melancholic and contemplative blog theme built with Astro, inspired by the serene beauty of Rajshahi—a city that holds countless childhood memories and shaped my appreciation for quiet moments.

## About Rajshahi

Rajshahi is a city in northwestern Bangladesh that carries an old-world charm unlike any other. During my childhood, it was a place where time seemed to move slower—where ancient mango trees lined peaceful streets, where the Padma River whispered stories of bygone eras, and where every sunset painted the sky in hues that words can barely capture.

The city's colonial architecture, with its red-brick buildings and wide verandas, created an atmosphere of gentle nostalgia. The University of Rajshahi campus, with its sprawling grounds and academic tranquility, felt like a sanctuary of learning and reflection. These memories of a scenic, peaceful, and beautifully aged town have deeply influenced the aesthetic and philosophy behind this blog theme.

## Theme Features

- **Minimal & Contemplative Design** — Clean layouts that encourage thoughtful reading
- **Dark/Light Theme Toggle** — Adapts to your preferred reading environment
- **Content Collections** — Organized blog posts with categories and tags
- **Responsive Design** — Optimized for all devices and screen sizes
- **Markdown Content Management** — Easy content creation and editing
- **Fast & Performant** — Built with Astro for optimal performance
- **Rich Embeds** — Easily embed YouTube, Vimeo, Wistia, Google Maps, PDFs, Gists, Asciinema, SoundCloud, and more using simple markdown shortcodes

## Embedding Content

You can embed rich content in your markdown using simple shortcodes:

- `#youtube <id>` — Embed a YouTube video
- `#vimeo <id>` — Embed a Vimeo video
- `#wistia <id>` — Embed a Wistia video
- `#googlemaps <query or url>` — Embed a Google Map
- `#iframe <url>` — Embed any URL in an iframe
- `#pdf <url>` — Embed a PDF
- `#embed <url>` — Embed Notion, Figma, CodePen, etc.
- `#gist <gist-id or gist-url>` — Embed a GitHub Gist
- `#asciinema <id>` — Embed an Asciinema cast
- `#soundcloud <url>` — Embed a SoundCloud track

## Getting Started

```bash
# Clone the repository
git clone https://github.com/hasinhayder/rajshahi-astro.git
cd rajshahi-astro

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Content Structure

- **Blog Posts** — `/src/content/blog/`
- **Site Content** — `/src/content/site-content/` (Homepage, About, Resources, Gears)
- **Pages** — `/src/pages/`
- **Components** — `/src/components/`
- **Layouts** — `/src/layouts/`

## Customization

This theme is designed to be a personal space for quiet reflections. Feel free to customize the colors, typography, and content to match your own contemplative journey.

## A Note on Nostalgia

```js
// Sometimes, the simplest code holds the deepest meaning.
// Like memories, each line is quiet, but together they tell a story.

const nostalgia = [
  "Mango trees in the afternoon sun", 
  "The hush of the Padma River at dusk", 
  "Red-brick walls echoing with laughter", 
  "Pages filled with handwritten dreams"
]

function reflect(memories) {
  return memories.map((m) => `Remember: ${m}`)
}

console.log(reflect(nostalgia).join("\n"))

// May your blog, like these memories, be a gentle space for reflection.
```

---

*Built with love and nostalgia for Rajshahi, Bangladesh* 🇧🇩