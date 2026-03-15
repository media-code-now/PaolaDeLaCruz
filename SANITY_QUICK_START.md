# 🚀 Sanity CMS Blog Setup - Quick Start for Paola

## What is Sanity?

Sanity is a **headless CMS** that lets you manage blog content through a visual editor. No coding required!

## ⚡ 5-Minute Setup

### 1. Create Your Sanity Account & Project

1. Go to: **https://manage.sanity.io/create**
2. Sign up (or log in)
3. Create new project:
   - Name: `Paola De La Cruz Real Estate`
   - Dataset: `production`
   - Project type: `Blank project`

### 2. Get Your Project ID

1. After project creation, go to: **https://manage.sanity.io**
2. Select your project
3. Click **Settings** → **API**
4. Copy the **Project ID** (looks like: `abc12def`)

### 3. Create Publishing Token

1. Still in Settings → API
2. Click **New token** under "Tokens"
3. Name: `Blog Publishing`
4. Permissions: Check `read`, `write`, `delete`
5. Copy the token (keep it safe!)

### 4. Add Credentials to Website

Create/edit `.env.local` file in your project root:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

### 5. Access the Studio

Start the development server:
```bash
npm run dev
```

Then visit: **http://localhost:3000/studio**

---

## 📝 Adding Your First Blog Post

1. Go to studio: `http://localhost:3000/studio`
2. Click **Blog Posts** (left sidebar)
3. Click **Create** → **Blog Post**
4. Fill in:
   - ✅ **Title**: Your blog title
   - ✅ **Featured Image**: Upload a cover photo
   - ✅ **Excerpt**: 2-3 sentence summary
   - ✅ **Category**: Pick one
   - ✅ **Content**: Write your full post
   - ✅ **Status**: Choose "Published"
5. Click **Save**

Done! Your post appears on `/blog` within minutes.

---

## 📚 Blog Categories Available

- Market Insights
- Buyer Guide
- Relocation Tips
- Neighborhood Guide
- Investment Strategy
- Lifestyle

---

## 💡 Pro Tips

| Tip | Benefit |
|-----|---------|
| **Save as Draft first** | You can edit and preview before publishing |
| **Schedule posts** | Set future publish dates (e.g., publish Monday morning) |
| **Use hotspot for images** | Click the image to crop/adjust the preview |
| **Rich text toolbar** | Bold, italic, headings, lists available in editor |
| **Add multiple images** | Insert images throughout your post content |

---

## 🎯 Common Tasks

### Schedule a Post to Publish Later
1. Create your post
2. Set Status to "Published"
3. Set "Published Date" to future date
4. Save

### Edit an Existing Post
1. Go to Blog Posts
2. Click the post you want to edit
3. Make changes
4. Click Save

### Unpublish a Post
1. Open the post
2. Change Status from "Published" to "Draft"
3. Click Save

### Delete a Post
1. Open the post
2. Click the ⋮ menu (three dots)
3. Click "Delete"

---

## 🔗 Resources

- **Sanity Dashboard**: https://manage.sanity.io
- **Full Documentation**: https://www.sanity.io/docs
- **Need Help?** Contact your developer or check Sanity's support

---

## ✅ You're All Set!

Your blog is now ready. Start creating amazing content! 🌟

Questions? Check `SANITY_SETUP.md` for technical details.
