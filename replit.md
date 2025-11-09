# VenbaCraft - Tamil Classical Poetry Generator

## Overview
VenbaCraft is a SvelteKit web application that generates authentic Tamil classical poetry in the Venba (வெண்பா) style using OpenAI's GPT models. Users can customize the tone, classicalness level, and length of their poems, with optional transliteration and explanatory notes.

**Current Status:** MVP Complete (November 8, 2025)

## Recent Changes
- **2025-11-09:** SEO Optimization & Content Pages
  - Added comprehensive meta tags (Open Graph, Twitter cards, JSON-LD schema)
  - Created About page with வெண்பா educational content and FAQs
  - Created Examples page with curated sample poems
  - Implemented sitemap.xml endpoint for search engines
  - Added robots.txt for crawler guidance
  - Added navigation links to About and Examples pages
  - Configured prerendering for static routes
  - Added social preview image for sharing
  - Fixed spelling: வேண்பா → வெண்பா throughout app
  
- **2025-11-08:** Initial project setup
  - Created SvelteKit project with TypeScript
  - Configured Tailwind CSS for styling
  - Implemented OpenAI API integration for poem generation
  - Built responsive UI with Tamil font support (Noto Sans Tamil)
  - Added features: Copy, Download PNG, Share URL
  - Set up development workflow on port 5000

## Project Architecture

### Tech Stack
- **Framework:** SvelteKit 2.0 with TypeScript
- **Styling:** Tailwind CSS 3.3
- **Fonts:** Noto Sans Tamil (Google Fonts)
- **Backend:** SvelteKit server routes
- **LLM:** OpenAI GPT-4o-mini via Chat Completions API
- **Image Export:** html-to-image library
- **Hosting:** Replit

### Project Structure
```
src/
  routes/
    +page.svelte              # Main UI page
    +layout.svelte            # Layout wrapper
    api/
      generate/+server.ts     # OpenAI API endpoint
  lib/
    components/
      PromptForm.svelte       # Input form component
      OutputCard.svelte       # Poem display component
      TonePicker.svelte       # Emotion selector
      StrictnessSlider.svelte # Classicalness slider
    utils/
      transliterate.ts        # Tamil to Latin transliteration
      heuristics.ts           # Meter analysis utilities
  app.html                    # HTML template
  app.css                     # Global styles & Tailwind imports
```

### Key Features
1. **Customizable Generation:**
   - Keywords/theme input (Tamil or English)
   - Emotion selector (Serene, Romantic, Melancholic, Devotional, Playful, Heroic)
   - Classicalness slider (0-100) for language sophistication
   - Length options (Short, Standard, Extended)

2. **Display Options:**
   - Optional romanized transliteration
   - Optional English gloss (meaning)
   - Optional meter note

3. **Actions:**
   - Regenerate poem with same parameters
   - Copy to clipboard
   - Download as PNG image
   - Share via URL with query parameters

### Environment Variables
- `OPENAI_API_KEY` - Required for poem generation (stored in Replit Secrets)
- `VITE_SITE_URL` - Base URL for SEO meta tags (defaults to https://venbacraft.repl.co)

## User Preferences
None specified yet.

## Dependencies
**Core:**
- @sveltejs/kit: ^2.0.0
- svelte: ^5.0.0
- openai: ^6.8.1
- html-to-image: ^1.11.11

**Styling:**
- tailwindcss: ^3.3.6
- postcss: ^8.4.32
- autoprefixer: ^10.4.16

## Development

### Running Locally
```bash
npm run dev
```
App runs on http://localhost:5000

### Building for Production
```bash
npm run build
npm run preview
```

## API Integration
The app uses OpenAI's Chat Completions API (not the deprecated Responses API mentioned in original spec). The system prompt guides GPT-4o-mini to generate authentic Tamil Venba poetry with appropriate classicalness levels.

## Notes
- The app is designed for Replit's environment with host set to 0.0.0.0:5000
- Tamil script rendering requires Noto Sans Tamil font
- URL sharing preserves user's input parameters via query strings
- PNG export captures the styled poem container with background
