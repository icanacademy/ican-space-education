# 🚀 Quick Start Guide - Visual Editor (Like Wix!)

Your site now has **Builder.io** - a professional visual editor just like Wix or Webflow!

---

## ⚡ 5-Minute Setup

### 1. Create Builder.io Account (FREE)
👉 **https://builder.io/signup**

### 2. Get API Key
1. Sign up/login to Builder.io
2. Click profile icon → **"Account Settings"**
3. Copy your **Public API Key**

### 3. Add API Key
Open `.env` file and replace:
```
VITE_BUILDER_API_KEY=SETUP_REQUIRED
```
With:
```
VITE_BUILDER_API_KEY=paste_your_key_here
```

### 4. Restart Server
```bash
npm run dev
```

### 5. Start Editing!
1. Go to **https://builder.io/content**
2. Click **"New Entry"** → **"Page"**
3. Set URL to `/builder`
4. **Drag the "Hero Section" component** onto your page
5. **Click elements to edit** them!
6. Click **"Publish"**

---

## 🎨 What You Can Do Now

### Visual Editing (Like Wix!)
✅ **Click to edit** - Click any text to change it
✅ **Drag & drop** - Add components by dragging
✅ **Color picker** - Change colors visually
✅ **Image upload** - Drag images onto your page
✅ **Real-time preview** - See changes instantly
✅ **Responsive design** - Edit for mobile/tablet/desktop
✅ **No code needed** - Edit everything visually!

### Your Custom Components
- **Hero Section** - Title, description, buttons, stats

---

## 📍 Important URLs

- **Your Site:** http://localhost:3003/
- **Builder.io Dashboard:** https://builder.io/content
- **Builder Editor:** https://builder.io/content (create a page first)
- **Setup Guide:** `BUILDER_SETUP_GUIDE.md`

---

## 🎯 How It Works

```
┌─────────────────────────────────────┐
│    You Edit in Builder.io           │
│    (Visual drag-and-drop)           │
└──────────────┬──────────────────────┘
               │
               │ Click "Publish"
               ↓
┌─────────────────────────────────────┐
│    Changes Appear on Your Site      │
│    (Instantly!)                     │
└─────────────────────────────────────┘
```

---

## ✨ Visual Editing Demo

### In Builder.io Editor:

1. **Add Component**
   - Find "Hero Section" in left sidebar
   - Drag it onto your page

2. **Edit Text**
   - Click the component
   - See all fields in right panel
   - Type new text

3. **Change Image**
   - Click "Background Image" field
   - Upload new image or paste URL

4. **Style Elements**
   - Use the style panel (right side)
   - Change colors, spacing, fonts
   - All visual - no code!

5. **Preview**
   - Toggle device views (desktop/mobile)
   - See exactly how it looks

6. **Publish**
   - Click "Publish" button
   - Changes go live!

---

## 🆘 Troubleshooting

### "Setup Required" Message?
→ Add your API key to `.env` and restart server

### Components not showing in Builder?
→ Make sure dev server is running: `npm run dev`

### Changes not appearing?
→ Click "Publish" in Builder.io (not just save)

### Need more help?
→ Read full guide: `BUILDER_SETUP_GUIDE.md`

---

## 📚 Documentation

- **This Quick Start** - `QUICK_START.md` (you're here!)
- **Full Builder Guide** - `BUILDER_SETUP_GUIDE.md`
- **Content Editing** - `CONTENT_EDITING_GUIDE.md`
- **Builder.io Docs** - https://builder.io/c/docs

---

## 🎉 You're Ready!

**Start editing visually:**
1. Go to https://builder.io/content
2. Create a page
3. Drag components
4. Click to edit
5. Publish!

**It's as easy as Wix!** 🎨✨

---

Need help? Read `BUILDER_SETUP_GUIDE.md` for complete instructions.
