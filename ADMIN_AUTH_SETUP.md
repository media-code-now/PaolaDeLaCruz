# Admin Authentication Setup Guide

## 🔐 How to Access the Admin Dashboard

### Step 1: Go to Login Page
Navigate to: `http://localhost:3000/admin/login`

Or click the **Admin** button in the footer (bottom right)

### Step 2: Enter Password
Default password: `AdminPass123!`

**⚠️ IMPORTANT:** Change this password immediately in `.env.local`!

### Step 3: Access Dashboard
After login, you'll be taken to the admin dashboard at `/admin/dashboard`

---

## 📝 What You Can Do

From the admin dashboard, you can:
- **Manage Blog Posts** - Access Sanity Studio to add/edit blogs
- **Settings** - Manage website content (coming soon)

---

## 🔑 Changing the Admin Password

1. Open `.env.local` file in your project root
2. Find the line: `ADMIN_PASSWORD=AdminPass123!`
3. Change it to your secure password
4. Restart the dev server: `npm run dev`
5. Use your new password to log in

### Password Security Tips:
- Use at least 8 characters
- Mix uppercase, lowercase, numbers, and symbols
- Example: `P@ssw0rdForPaola2026!`

---

## 🛡️ Security Features

✅ **Secure httpOnly Cookies** - Tokens can't be accessed by JavaScript
✅ **Password Protected** - No database needed, environment variable based
✅ **24-Hour Sessions** - Auto logout after 24 hours of inactivity
✅ **Protected Routes** - Middleware blocks unauthorized access
✅ **No Tracking** - robots.txt prevents admin pages from being indexed

---

## 🚀 Admin Link in Footer

A discrete **Admin** link appears at the bottom of every page:
- Located in the footer bottom bar
- Hidden on mobile (shows on desktop)
- Links to `/admin/login`

---

## ⚙️ Technical Details

### Files Created:
```
/src/app/admin/
├── login/page.tsx          # Login form page
├── dashboard/page.tsx      # Admin dashboard
└── layout.tsx              # Admin layout wrapper

/src/app/api/auth/
├── login/route.ts          # Login API endpoint
└── logout/route.ts         # Logout API endpoint

middleware.ts               # Route protection middleware
.env.local                  # Environment variables
```

### Environment Variables:
```bash
ADMIN_PASSWORD=your_password_here
```

---

## 🐛 Troubleshooting

**"Invalid password" error?**
- Check that you're using the correct password
- Verify `.env.local` has the right password set
- Restart the dev server after changing `.env.local`

**Can't access admin dashboard?**
- Make sure you logged in first
- Check that cookies are enabled in your browser
- Try clearing browser cache and logging in again

**Middleware not working?**
- Ensure `middleware.ts` exists in project root
- Restart the dev server
- Check browser console for errors

---

## 📚 Next Steps

1. ✅ Change admin password in `.env.local`
2. ✅ Test login at `/admin/login`
3. ✅ Access Sanity Studio from dashboard
4. ✅ Start adding blog posts!

---

**Need help?** Check the console for any error messages or review the implementation in:
- `src/app/admin/login/page.tsx` - Login page
- `src/app/api/auth/login/route.ts` - Authentication logic
- `middleware.ts` - Route protection
