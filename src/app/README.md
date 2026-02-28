# Lumière Estates — Premium Real Estate Website

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Project Structure

```
lumiere-estates/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + CSS variables
│   ├── properties/
│   │   └── page.tsx        # /properties — all listings + filters
│   ├── properties/[id]/
│   │   └── page.tsx        # /properties/[id] — property detail
│   └── admin/
│       └── page.tsx        # /admin — unprotected dashboard
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Site footer
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button variants
│   │   ├── Tag.tsx         # Featured/New/Hot/Exclusive badge
│   │   ├── StatCard.tsx    # Gold stat display card
│   │   └── SectionHeader.tsx # Centered section title + divider
│   ├── sections/           # Home page sections
│   │   ├── Hero.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── FeaturedListings.tsx
│   │   ├── AgentsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   ├── property/
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyGrid.tsx
│   │   ├── FilterBar.tsx
│   │   ├── PropertyGallery.tsx
│   │   └── LeadForm.tsx
│   └── admin/
│       ├── AdminSidebar.tsx
│       ├── OverviewTab.tsx
│       ├── PropertiesTab.tsx
│       └── PropertyForm.tsx
│
├── lib/
│   ├── data.ts             # All mock data (properties, agents, blog, testimonials)
│   ├── utils.ts            # Helpers: formatPrice, waLink, cn()
│   └── types.ts            # TypeScript interfaces
│
└── public/                 # Static assets
```

## Setup

```bash
npx create-next-app@latest lumiere-estates --typescript --tailwind --eslint --app
cd lumiere-estates

# Copy all files from this project into the new app
# Then run:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Admin dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)
