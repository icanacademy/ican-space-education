# 📝 Content Editing Guide

Your site now has **easy-to-edit content** powered by TinaCMS! You can modify all text, images, and settings without touching the code.

## 🎯 Quick Start

### Option 1: Direct File Editing (Easiest!)

1. Open `content/home.json` in any text editor
2. Change any text you want
3. Save the file
4. Refresh your browser - changes appear instantly!

### Option 2: Visual Admin Panel (Coming Soon)

1. Visit: `http://localhost:3000/admin`
2. Follow the on-screen instructions

---

## 📂 What You Can Edit

### Hero Section (Home Page)

**File:** `content/home.json`

```json
{
  "hero": {
    "mainTitle": "우주를 배우다,",           // Main headline (line 1)
    "mainSubtitle": "미래를 바꾼다",          // Main headline (line 2)
    "brandText": "닥터아이캔 에듀스페이스...", // Subheading text
    "description": "탐험하는 배움이...",       // Description paragraph
    "descriptionHighlight": "우주적 사고",    // Highlighted text
    "descriptionEnd": "로 커리큘럼을...",     // End of description

    // Buttons
    "primaryButtonText": "상담 신청",        // Main button text
    "primaryButtonLink": "/contact",         // Where button goes
    "secondaryButtonText": "커리큘럼 보기",   // Second button text
    "secondaryButtonLink": "/curriculum",    // Second button link

    // Background
    "backgroundImage": "https://...",        // Hero background image URL

    // Statistics
    "stats": [
      {
        "value": "100+",                     // Stat number
        "label": "프로젝트 완성",             // Stat description
        "color": "#1BE7FF"                   // Stat color
      }
      // Add more stats here...
    ]
  }
}
```

---

## ✏️ How to Edit Content

### Editing Text

1. **Find the text** you want to change in `content/home.json`
2. **Edit the value** between the quotes
3. **Save the file**
4. **Refresh your browser**

**Example:**

```json
// BEFORE
"mainTitle": "우주를 배우다,"

// AFTER (your custom text)
"mainTitle": "새로운 교육의 시작,"
```

### Changing Images

Replace the URL in `backgroundImage`:

```json
"backgroundImage": "https://your-new-image-url.com/image.jpg"
```

### Editing Button Links

Change where buttons navigate to:

```json
"primaryButtonLink": "/your-page",
"secondaryButtonLink": "/another-page"
```

### Modifying Statistics

Add, remove, or edit stats:

```json
"stats": [
  {
    "value": "500+",
    "label": "학생 수",
    "color": "#1BE7FF"
  },
  {
    "value": "10년",
    "label": "교육 경력",
    "color": "#6C63FF"
  }
]
```

---

## 🎨 Color Codes

Your brand colors:

- `#1BE7FF` - Cyan (primary accent)
- `#6C63FF` - Purple (secondary accent)
- `#0A0F1A` - Dark navy (backgrounds)
- `#FFC145` - Gold
- `#FF3D7F` - Pink

---

## 🚀 Testing Your Changes

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   ```
   http://localhost:3000
   ```

3. **Make changes to content/home.json**

4. **Refresh to see updates!**

---

## 📋 Content Checklist

Before publishing changes:

- [ ] All Korean text is correct
- [ ] Button links work properly
- [ ] Images load correctly
- [ ] Colors match your brand
- [ ] Text fits in the layout
- [ ] Test on mobile devices

---

## 🆘 Troubleshooting

### Changes don't appear?

1. Make sure you saved the file
2. Hard refresh your browser (Ctrl/Cmd + Shift + R)
3. Check the browser console for errors

### JSON syntax error?

- Make sure all quotes are closed: `"text"`
- Check commas between items
- Use a JSON validator: https://jsonlint.com

### Need help?

The content file follows **JSON format**. Key rules:
- Text must be in quotes: `"text"`
- Commas between items (but not after the last one)
- Brackets for lists: `[ ]`
- Braces for objects: `{ }`

---

## 🔮 Coming Soon

Future features we're adding:

- ✨ Visual drag-and-drop editor
- 🖼️ Image upload manager
- 🌐 Multi-language editing panel
- 📱 Mobile preview
- 🔄 Change history / undo
- 👥 Multi-user editing

---

## 📁 File Structure

```
project/
├── content/              ← Your editable content
│   └── home.json        ← Home page content
├── src/
│   └── pages/
│       ├── home/
│       │   └── components/
│       │       └── HeroSection.tsx  ← Uses content/home.json
│       └── admin/
│           └── page.tsx  ← Admin panel
└── tina/
    └── config.ts        ← TinaCMS configuration
```

---

## 💡 Pro Tips

1. **Backup before big changes** - Copy `content/home.json` before major edits
2. **Use version control** - Commit changes to Git regularly
3. **Test locally first** - Always preview changes before deploying
4. **Keep content organized** - Use consistent formatting in JSON files
5. **Document custom changes** - Add comments in this file about your customizations

---

## 🎓 Next Steps

### Expand Content Editing

Want to make other sections editable? Follow this pattern:

1. Create a new JSON file in `content/` folder
2. Add its schema to `tina/config.ts`
3. Import and use the JSON in your component

**Example for "About" page:**

```typescript
// 1. Create content/about.json
// 2. Add schema to tina/config.ts
// 3. Import in component:
import aboutContent from '../../../content/about.json';
```

---

**Need help?** Check the TinaCMS docs: https://tina.io/docs/

Happy editing! 🎉
