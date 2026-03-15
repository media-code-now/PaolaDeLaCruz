# Sanity.io CMS Setup Guide

This project is configured with **Sanity.io** as a headless CMS for managing blog posts. Paola can add, edit, and publish blog posts through an easy-to-use visual editor without touching any code.

## 📋 Quick Setup

### Step 1: Create a Sanity Project

1. Go to [https://manage.sanity.io/create](https://manage.sanity.io/create)
2. Sign up for a free account (or log in)
3. Create a new project:
   - **Project name**: "Paola De La Cruz Real Estate"
   - **Create a new dataset**: Select "production"
   - **Project type**: Choose "Blank project"

### Step 2: Get Your Project Credentials

After creating your project:

1. Go to [https://manage.sanity.io](https://manage.sanity.io) and select your project
2. Click **Settings** → **API**
3. Under "Public API", copy your **Project ID**
4. Under "Tokens", create a new token for publishing:
   - Click **New token**
   - Name it "Blog Publishing"
   - Give it these permissions: `read`, `write`, `delete`
   - Copy the token

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

### Step 4: Access the Blog Studio

Once configured, the blog studio is available at:

```
http://localhost:3000/studio
```

## 🎯 Using the Blog Studio

### Adding a New Blog Post

1. Navigate to `http://localhost:3000/studio`
2. Click **Blog Posts** in the left sidebar
3. Click **Create** → **Blog Post**
4. Fill in the following fields:

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Blog post title | ✅ |
| **Slug** | URL slug (auto-generated from title) | ✅ |
| **Published Date** | When to publish (can schedule future dates) | ✅ |
| **Category** | Select from predefined categories | Optional |
| **Author** | Defaults to "Paola De La Cruz" | Optional |
| **Featured Image** | Main blog image (upload or URL) | Optional |
| **Alt Text** | Image description for accessibility | ✅ |
| **Excerpt** | Short summary (max 250 chars) | ✅ |
| **Content** | Full blog post content (rich text editor) | Optional |
| **Status** | Draft or Published | ✅ |

### Blog Categories

Available categories:
- Market Insights
- Buyer Guide
- Relocation Tips
- Neighborhood Guide
- Investment Strategy
- Lifestyle

### Publishing Options

- **Draft**: Save without publishing (only visible to you)
- **Published**: Live on the website immediately

## 📁 Project Structure

```
/sanity/
├── schemas/              # Data structure definitions
│   ├── blog.ts          # Blog post schema
│   └── index.ts         # Schema exports
├── lib/
│   └── client.ts        # Sanity client & query functions
└── sanity.config.ts     # Sanity configuration

/src/app/blog/
├── page.tsx             # Blog listing page
└── [slug]/
    └── page.tsx         # Individual blog post page (create this next)
```

## 🔗 Useful Links

- **Sanity Dashboard**: https://manage.sanity.io
- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Next.js + Sanity Guide**: https://www.sanity.io/guides/next

## 🚀 Next Steps

1. ✅ Install dependencies: `npm install next-sanity @sanity/image-url sanity --legacy-peer-deps`
2. ✅ Set up Sanity project and get credentials
3. ✅ Add environment variables to `.env.local`
4. 🔄 Create individual blog post page (`/blog/[slug]/page.tsx`)
5. 🔄 Add image optimization with `next/image`
6. 🔄 Set up ISR (Incremental Static Regeneration) for better performance
7. 🔄 Add comments/feedback system if desired
8. 🔄 Set up email notifications when new blog posts are published

## 💡 Tips for Paola

- **Save drafts often**: Click "Save" button as you type
- **Preview images**: Use the image hotspot tool to ensure images are cropped nicely
- **Rich text formatting**: Use the toolbar to format text (bold, italic, headings, lists)
- **Schedule posts**: Set a future publish date to schedule posts in advance
- **View on website**: After publishing, the post appears on `/blog` within a few minutes

## 🐛 Troubleshooting

**Studio not loading?**
- Ensure `.env.local` has correct project ID and dataset name
- Run `npm run dev` and check for console errors

**Changes not appearing?**
- Published posts can take a few minutes to appear
- Clear your browser cache or do a hard refresh (Cmd+Shift+R)
- Check that post status is set to "Published"

**Images not showing?**
- Ensure featured image has alt text
- Check image file size (keep under 5MB for best performance)

---

**Questions?** Refer to [Sanity.io Documentation](https://www.sanity.io/docs) or contact support.
