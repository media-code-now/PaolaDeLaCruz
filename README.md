# Elite Realty - Luxury Real Estate Website

A modern, luxury real estate website built with Next.js, TypeScript, and Tailwind CSS. Designed for a single agent specializing in high-end properties.

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Fonts:** Inter & Playfair Display (Google Fonts)

## ✨ Features

### Pages
- **Home:** Hero section, featured listings, stats, testimonials, and CTAs
- **Listings:** Property search, filters, and grid view
- **About:** Agent biography, achievements, and values
- **Neighborhoods:** Community guides with market insights
- **Contact:** Contact form, office information, and quick actions

### Components
- Responsive navigation header with mobile menu
- Property cards with favorites functionality
- Animated sections and smooth transitions
- Footer with social links and contact info
- Glass morphism effects
- Gradient accents (gold luxury theme)

### Design Features
- **Mobile-first responsive design**
- **Apple-style clean interface**
- **Dark luxury accents** (black, white, gold color scheme)
- **Smooth animations** with Tailwind and Framer Motion
- **Premium typography** with serif headings
- **Modern UI patterns** (cards, overlays, gradients)

## 🚀 Getting Started

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── listings/
│   │   └── page.tsx
│   ├── neighborhoods/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── AboutPreview.tsx
│   │   ├── CTASection.tsx
│   │   ├── FeaturedListings.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   └── Testimonials.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── shared/
│       └── PropertyCard.tsx
└── lib/
    └── utils.ts
\`\`\`

## 🎨 Customization

### Colors
The luxury color scheme is defined in `tailwind.config.ts`:
- Gold: #D4AF37
- Black: #0A0A0A
- Various grays for layering

### Fonts
- **Inter:** Body text and UI elements
- **Playfair Display:** Headings and luxury feel

### Images
Replace placeholder images from Unsplash with actual property photos:
- Hero backgrounds
- Property listings
- Agent photos
- Neighborhood images

### Content
Update the following with real data:
- Agent name and bio
- Contact information
- Property listings
- Testimonials
- Neighborhood descriptions
- Social media links

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any API keys or configuration:

\`\`\`env
# Example
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
\`\`\`

### Image Domains
If using external images, add domains to `next.config.ts`:

\`\`\`typescript
images: {
  domains: ['your-image-domain.com'],
}
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎯 SEO & Performance

- Optimized metadata in layout.tsx
- Next.js automatic image optimization
- Font optimization with Google Fonts
- Semantic HTML structure
- Fast page loads with static generation

## 📝 License

This project is for demonstration purposes. Customize and use as needed for your real estate business.

## 🤝 Support

For questions or customization requests, contact the agent at contact@eliterealty.com

---

Built with ❤️ using Next.js and Tailwind CSS
