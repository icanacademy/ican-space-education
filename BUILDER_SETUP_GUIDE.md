# 🎨 Builder.io Visual Editor Setup Guide

You now have **Builder.io** integrated into your site - the same visual editing experience as Wix/Webflow!

## 🚀 Quick Start (5 Minutes)

### Step 1: Create Builder.io Account

1. Go to **https://builder.io/signup**
2. Sign up for a **FREE account** (no credit card needed)
3. Choose a workspace name (e.g., "ICAN Space Education")

### Step 2: Get Your API Key

1. After signup, you'll land on the dashboard
2. Click your profile icon (top right)
3. Select **"Account Settings"** or **"Organization"**
4. Find your **Public API Key** (looks like: `abc123def456...`)
5. **Copy this key** - you'll need it next!

### Step 3: Add API Key to Your Project

1. Open this file: `.env`
2. Replace the line:
   ```
   VITE_BUILDER_API_KEY=SETUP_REQUIRED
   ```
   With:
   ```
   VITE_BUILDER_API_KEY=your_actual_api_key_here
   ```
3. Save the file

### Step 4: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Step 5: Create Your First Page in Builder.io

1. Go to **https://builder.io/content**
2. Click **"New Entry"** button
3. Select **"Page"** model
4. Set URL to `/builder`
5. Click **"Create"**

Now you're in the **visual editor**! 🎉

---

## 🎨 How to Use the Visual Editor

### Adding Your Custom Hero Component

1. In Builder.io editor, look for the **left sidebar**
2. Find **"Hero Section (ICAN Space Education)"** in the components list
3. **Drag and drop** it onto your page
4. Click the component to see **all editable fields** in the right panel

### What You Can Edit Visually:

✏️ **Text Content**
- Main title (line 1 & 2)
- Brand tagline
- Description paragraphs
- Button text

🔗 **Links**
- Primary button destination
- Secondary button destination

🎨 **Styling**
- Background images (upload or URL)
- Stat colors (color picker)
- Icon classes

📊 **Statistics**
- Add/remove stats
- Change values & labels
- Customize colors

---

## 🖱️ Visual Editing Features (Like Wix!)

### Click-to-Edit
- Click any text to edit it inline
- See changes in real-time

### Drag & Drop
- Drag components from the sidebar
- Rearrange sections by dragging
- Resize elements visually

### Style Editor
- Right-click elements for style options
- Change colors, fonts, spacing
- Add animations and effects

### Responsive Design
- Toggle device views (desktop/tablet/mobile)
- Adjust layout for each screen size
- Preview how it looks on different devices

### Media Library
- Upload images directly in Builder.io
- Drag images onto your page
- Automatic image optimization

---

## 📋 Complete Visual Editing Workflow

### Creating a New Page:

1. **In Builder.io Dashboard:**
   - Go to https://builder.io/content
   - Click "New Entry" → "Page"
   - Set URL path (e.g., `/about`, `/services`)
   - Click "Create"

2. **In the Visual Editor:**
   - Drag components from the left sidebar
   - Click elements to edit text, images, links
   - Use the right panel to style components
   - Preview on different devices

3. **Publishing:**
   - Click **"Publish"** button (top right)
   - Changes go live immediately!
   - Visit your site to see the updates

### Editing Existing Pages:

1. Go to https://builder.io/content
2. Find your page in the list
3. Click to open in the editor
4. Make your changes
5. Click "Publish"

---

## 🛠️ Available Custom Components

### Hero Section (ICAN Space Education)
**What it does:** Full-screen hero with title, description, buttons, and stats

**Editable Fields:**
- Main title (2 lines)
- Brand tagline
- Description text
- 2 CTA buttons (text, links, icons)
- Background image
- Statistics (value, label, color)

**Use it for:** Homepage, landing pages, campaign pages

---

## 🎯 Advanced Features

### A/B Testing
1. Create page variants in Builder.io
2. Split traffic between versions
3. See which performs better

### Targeting & Personalization
- Show different content based on user location
- Personalize by device type
- Scheduled content (publish at specific times)

### Custom Code
- Add custom CSS/JavaScript
- Integrate with analytics
- Add third-party widgets

---

## 🔄 Typical Editing Workflow

### Option 1: Edit in Builder.io Dashboard (Recommended)

1. Visit **https://builder.io/content**
2. Click your page
3. Edit visually
4. Publish
5. See changes on your live site

### Option 2: Preview Mode (Advanced)

1. Add `?builder.preview=page` to your URL
2. Edit inline on your actual site
3. Requires Builder.io Chrome extension

---

## 📁 Project Structure

```
project/
├── .env                          ← Your API key goes here
├── src/
│   ├── lib/
│   │   └── builder.ts           ← Builder.io configuration
│   ├── components/
│   │   └── builder/
│   │       └── EditableHero.tsx ← Custom editable component
│   └── pages/
│       └── builder/
│           └── page.tsx         ← Builder.io page renderer
└── BUILDER_SETUP_GUIDE.md       ← This file
```

---

## 🆘 Troubleshooting

### Issue: "Builder.io Setup Required" Message

**Solution:**
- Make sure you added your API key to `.env`
- API key should NOT be `SETUP_REQUIRED`
- Restart dev server after adding key

### Issue: Components Not Showing in Builder.io

**Solution:**
- Make sure dev server is running: `npm run dev`
- Check that your site is accessible at http://localhost:3003
- In Builder.io, go to Settings → Add your local URL

### Issue: Changes Not Appearing on Site

**Solution:**
- Click "Publish" in Builder.io (not just save)
- Clear your browser cache (Ctrl+Shift+R)
- Check that the URL path matches in Builder.io

### Issue: Can't Drag Components

**Solution:**
- Make sure you're in "Edit" mode in Builder.io
- Try refreshing the Builder.io editor
- Check browser console for errors

---

## 💡 Pro Tips

### 1. Use Components Library
Create reusable sections in Builder.io:
- Create once, use everywhere
- Update in one place, changes everywhere
- Keeps your site consistent

### 2. Keyboard Shortcuts
- `Cmd/Ctrl + Z` - Undo
- `Cmd/Ctrl + Y` - Redo
- `Cmd/Ctrl + S` - Save
- `Cmd/Ctrl + P` - Publish

### 3. Organize with Folders
- Create folders in Builder.io content
- Group pages by type (Landing, Product, Blog)
- Easier to find and manage

### 4. Use Templates
- Save pages as templates
- Quickly create similar pages
- Maintain consistent design

### 5. Version History
- Builder.io auto-saves versions
- Rollback to previous versions anytime
- Never lose work

---

## 🎓 Learning Resources

### Builder.io Documentation
- **Getting Started:** https://builder.io/c/docs/getting-started
- **Visual Editor:** https://builder.io/c/docs/visual-editor
- **Components:** https://builder.io/c/docs/custom-components

### Video Tutorials
- Builder.io YouTube Channel: https://youtube.com/@builderio
- Search for "Builder.io tutorial"

### Community
- Builder.io Forum: https://forum.builder.io
- Discord: https://discord.gg/builderio

---

## 🔮 Next Steps

### 1. Create More Custom Components

Want to make other sections editable?

```typescript
// src/components/builder/EditableAbout.tsx
import { Builder } from '@builder.io/react';

const EditableAbout = ({ title, description }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

Builder.registerComponent(EditableAbout, {
  name: 'About Section',
  inputs: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'longText' }
  ]
});

export default EditableAbout;
```

### 2. Connect to Your Production Site

1. Deploy your site to hosting (Vercel, Netlify, etc.)
2. Add production URL to Builder.io settings
3. Edit live site visually!

### 3. Enable Team Collaboration

1. Invite team members in Builder.io
2. Set permissions (Editor, Admin, etc.)
3. Multiple people can edit simultaneously

### 4. Set Up Staging Environment

1. Create separate Builder.io spaces for:
   - Development
   - Staging
   - Production
2. Test changes before going live

---

## 📊 Free vs Paid Features

### FREE Forever (What You Have):
✅ Unlimited pages
✅ Visual editor
✅ Custom components
✅ 1,000 visitors/month
✅ Basic integrations

### Paid Plans (Optional):
- More visitors (10K+)
- A/B testing
- Advanced targeting
- Priority support
- Team collaboration (5+ users)

**You can do everything with the free plan for now!**

---

## 🎉 You're All Set!

### Quick Recap:
1. ✅ Builder.io account created
2. ✅ API key added to `.env`
3. ✅ Dev server restarted
4. ✅ Ready to edit visually

### Start Editing:
1. Go to **https://builder.io/content**
2. Create a new page
3. Drag the "Hero Section" component
4. Edit visually
5. Publish!

---

## 🆘 Need Help?

### Contact Options:
1. **Builder.io Support:** support@builder.io
2. **Documentation:** https://builder.io/c/docs
3. **Check this guide:** You're reading it! 📖

---

**Happy Visual Editing!** 🎨✨

Your site is now as easy to edit as Wix or Webflow!
