# Luxury Real Estate Website - Project Structure

## 📁 Project Overview

A modern, luxury real estate website built with Next.js 15, TypeScript, and Tailwind CSS featuring a single agent portfolio with property listings, neighborhoods, and lead capture functionality.

---

## 🗂️ Pages Structure

### `/app` (Next.js App Router)

```
/app
├── page.tsx                          # Homepage (Index)
├── layout.tsx                        # Root layout with fonts & metadata
├── globals.css                       # Global styles & Tailwind config
├── /listings
│   └── page.tsx                      # All property listings page
├── /listings/[id]
│   └── page.tsx                      # Individual property details (dynamic route)
├── /about
│   └── page.tsx                      # Agent profile & biography
├── /neighborhoods
│   └── page.tsx                      # Featured neighborhoods overview
└── /contact
    └── page.tsx                      # Contact page with form
```

---

## 🧩 Components Structure

### `/components/layout`
```
/components/layout
├── Header.tsx                        # Main navigation with mobile menu
└── Footer.tsx                        # Dark-themed footer with links & social
```

### `/components/home` (Homepage Sections)
```
/components/home
├── Hero.tsx                          # Hero section with property search
├── Stats.tsx                         # Statistics section (4 stats cards)
├── FeaturedListings.tsx              # Featured properties grid
├── AboutPreview.tsx                  # Agent introduction preview
├── FeaturedNeighborhoods.tsx         # Neighborhoods image grid
├── Testimonials.tsx                  # Client testimonials section wrapper
├── CTASection.tsx                    # Call-to-action banner
└── LeadCapture.tsx                   # Contact form with map & info cards
```

### `/components/shared` (Reusable Components)
```
/components/shared
├── PropertyCard.tsx                  # Property listing card component
└── TestimonialsSlider.tsx            # Auto-playing testimonials carousel
```

### `/components/about` (About Page Components)
```
/components/about
└── AgentProfile.tsx                  # Complete agent profile section
```

### `/components/property` (Property Detail Components)
```
/components/property
├── ImageGallery.tsx                  # Full-screen image gallery with lightbox
├── PropertyHeader.tsx                # Price, address, status badge
├── PropertyDetails.tsx               # Beds, baths, sqft grid
├── PropertyDescription.tsx           # Full property description
├── PropertyAmenities.tsx             # Features & amenities list
├── PropertyMap.tsx                   # Location map placeholder
├── MortgageCalculator.tsx            # Interactive mortgage calculator
├── ContactAgent.tsx                  # Sticky contact form sidebar
└── SimilarListings.tsx               # Related properties grid
```

### `/components/contact` (Contact Page Components)
```
/components/contact
└── ContactSection.tsx                # Contact form, info cards, map
```

---

## 📄 Page Breakdown

### 1. **Homepage** (`/app/page.tsx`)
**Sections (in order):**
1. Hero - Full-width hero with property search bar
2. Stats - 4 statistics cards (years, sales, clients, neighborhoods)
3. FeaturedListings - Grid of 8 property cards (3-4 per row)
4. AboutPreview - Agent introduction section
5. FeaturedNeighborhoods - 6 neighborhood cards with images
6. Testimonials - Auto-playing testimonial slider
7. CTASection - Call-to-action banner
8. LeadCapture - Contact form with map

**Purpose:** Main landing page showcasing properties and agent

---

### 2. **Listings Page** (`/app/listings/page.tsx`)
**Features:**
- Property search filters
- Grid of all available properties
- Sorting options
- Pagination (if needed)

**Components Used:**
- PropertyCard (shared)
- Filter controls
- Search functionality

---

### 3. **Property Detail Page** (`/app/listings/[id]/page.tsx`)
**Dynamic route for individual properties**

**Sections:**
1. ImageGallery - 5-8 images with lightbox
2. PropertyHeader - Price, address, status
3. PropertyDetails - Key specs grid (6 items)
4. PropertyDescription - Full text description
5. PropertyAmenities - Features list (16 items)
6. PropertyMap - Location with Google Maps
7. MortgageCalculator - Interactive calculator
8. ContactAgent - Sticky sidebar form
9. SimilarListings - 4 related properties

**Layout:** 2-column (content + sticky sidebar)

---

### 4. **About Page** (`/app/about/page.tsx`)
**Agent profile and biography**

**Sections:**
1. Agent portrait (circular with placeholder)
2. Name, title, location
3. Stats grid (3 cards: Experience, Homes Sold, Sales Volume)
4. Biography (3 paragraphs)
5. Awards & Recognition (4 awards)
6. Contact info (phone, email)
7. CTA buttons (Schedule Consultation, View Properties)

**Purpose:** Build trust and showcase expertise

---

### 5. **Neighborhoods Page** (`/app/neighborhoods/page.tsx`)
**Featured communities overview**

**Features:**
- Grid of neighborhood cards
- Each card shows: name, avg price, description
- Links to filtered listings
- Large photography with hover overlays

**Components Used:**
- Similar to FeaturedNeighborhoods
- May include additional filtering

---

### 6. **Contact Page** (`/app/contact/page.tsx`)
**Lead capture and contact information**

**Sections:**
1. Contact form (Name, Email, Phone, Message)
2. Contact info cards (Phone, Email, Address)
3. Google Maps embed
4. Office hours
5. Social media links

**Purpose:** Convert leads and provide contact methods

---

## 🎨 Component Details

### **Hero Component**
**File:** `/components/home/Hero.tsx`
- Full-width background image
- Large headline (up to 9xl responsive)
- 4-field property search:
  - Location (text input)
  - Price Range (dropdown)
  - Property Type (dropdown)
  - Bedrooms (dropdown)
- Search button with gradient
- 2 CTA buttons below
- Dark overlay for readability

---

### **PropertyCard Component**
**File:** `/components/shared/PropertyCard.tsx`
**Props:** property object, index (for animation delay)

**Features:**
- Image with hover zoom (110% scale)
- Status badge (For Sale/Sold/Pending)
- Favorite heart button (toggleable)
- Price display
- Location with map pin
- Beds, Baths, Sqft details
- "View Property" button with arrow
- Hover lift animation

**Used in:**
- FeaturedListings
- SimilarListings
- Listings page

---

### **TestimonialsSlider Component**
**File:** `/components/shared/TestimonialsSlider.tsx`

**Features:**
- 5 client testimonials
- Auto-play (5 seconds per slide)
- 5-star rating display
- Client name, location
- Avatar with initial
- Previous/Next arrows
- Dot indicators
- Progress bar
- Smooth transitions (700ms)

**Design:**
- White card with shadow
- Rounded corners (rounded-3xl)
- Decorative quote icon
- Luxury gold accents

---

### **ListingsGrid Component**
**File:** `/components/home/FeaturedListings.tsx`

**Layout:**
- Responsive grid: 1 → 2 → 3 → 4 columns
- 8 property cards
- Staggered animations (100ms delays)
- "View All Listings" CTA button

**Card Features:**
- All PropertyCard features
- Status badges
- Hover effects

---

### **AgentSection Component**
**File:** `/components/about/AgentProfile.tsx`

**Elements:**
1. Circular portrait (264px)
2. Name (5xl-6xl serif)
3. Title & location
4. 3 stats cards (gradient icons)
5. Biography (3 paragraphs)
6. Awards section (4 awards in grid)
7. Contact cards (phone, email)
8. 2 CTA buttons

**Design:**
- Centered layout
- Soft neutral colors (white, gray-50)
- Gold accents
- Staggered fade-in animations

---

### **ContactForm Component**
**File:** `/components/home/LeadCapture.tsx`

**Fields:**
- Name* (required, user icon)
- Email* (required, mail icon)
- Phone (optional, phone icon)
- Message* (required, 5 rows, message icon)

**Features:**
- Icon indicators
- Focus states (gold ring)
- Loading state with spinner
- Success state with checkmark
- Auto-reset after 3 seconds
- Privacy policy notice
- Full-width gradient submit button

**Validation:**
- Required field markers
- Email format validation
- Form state management

---

### **MapSection Component**
**File:** `/components/property/PropertyMap.tsx`

**Features:**
- 400px height container
- Google Maps placeholder
- Coordinates display
- "Open in Google Maps" link
- Ready for API integration
- White card with shadow

**Note:** Includes commented iframe code for actual Google Maps embed

---

## 🎯 Key Features Summary

### **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid layouts adapt: 1 → 2 → 3 → 4 columns
- Hamburger menu on mobile

### **Animations**
- Fade-in on scroll
- Hover scale effects
- Smooth transitions (300-700ms)
- Staggered delays (100ms increments)
- Loading spinners
- Progress bars

### **Interactive Elements**
- Property search with form submission
- Favorite/save properties
- Auto-playing sliders
- Lightbox image galleries
- Mortgage calculator
- Contact forms with validation
- Social share buttons

### **Luxury Design**
- Gold accent color (#D4AF37)
- Black background (#0A0A0A)
- Serif fonts for headings (Playfair Display)
- Sans-serif for body (Inter)
- Premium spacing (generous padding/margins)
- Subtle shadows
- Rounded corners (xl, 2xl, 3xl)
- Gradient buttons

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, Playfair Display)
- **State:** React Hooks (useState, useEffect)

---

## 📊 Data Structure

### Property Object
```typescript
{
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  featured?: boolean;
  status?: "For Sale" | "Sold" | "Pending";
}
```

### Neighborhood Object
```typescript
{
  id: number;
  name: string;
  averagePrice: number;
  image: string;
  description: string;
}
```

### Testimonial Object
```typescript
{
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
}
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Development URL:** http://localhost:3000

---

## 📝 Customization Checklist

- [ ] Replace agent name and bio
- [ ] Add real property data
- [ ] Update contact information (phone, email, address)
- [ ] Add actual property images
- [ ] Replace agent headshot
- [ ] Update brand name/logo
- [ ] Add Google Maps API key
- [ ] Connect contact form to email service
- [ ] Add social media links
- [ ] Update testimonials with real reviews
- [ ] Configure SEO metadata
- [ ] Add Google Analytics

---

## 📂 File Tree

```
realtor/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── listings/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── neighborhoods/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── FeaturedListings.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── FeaturedNeighborhoods.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── LeadCapture.tsx
│   │   ├── shared/
│   │   │   ├── PropertyCard.tsx
│   │   │   └── TestimonialsSlider.tsx
│   │   ├── about/
│   │   │   └── AgentProfile.tsx
│   │   ├── property/
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── PropertyHeader.tsx
│   │   │   ├── PropertyDetails.tsx
│   │   │   ├── PropertyDescription.tsx
│   │   │   ├── PropertyAmenities.tsx
│   │   │   ├── PropertyMap.tsx
│   │   │   ├── MortgageCalculator.tsx
│   │   │   ├── ContactAgent.tsx
│   │   │   └── SimilarListings.tsx
│   │   └── contact/
│   │       └── ContactSection.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── tailwind.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Color Palette

- **Primary Gold:** #D4AF37
- **Luxury Black:** #0A0A0A
- **White:** #FFFFFF
- **Gray Shades:** 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (1 column)
- **Tablet:** 768px - 1023px (2 columns)
- **Desktop:** 1024px - 1279px (3 columns)
- **Large Desktop:** ≥ 1280px (4 columns)

---

*Built with ❤️ for luxury real estate professionals*
