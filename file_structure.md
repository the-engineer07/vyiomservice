# 📁 Project File Structure — Veyom Digital Solutions

## Current Organized Structure

```
veyom-website/
│
├─── Root HTML Files (Pages)
│   ├── index.html              (Homepage with hero carousel)
│   ├── about.html              (About page with image carousel)
│   ├── services.html           (Services showcase)
│   ├── careers.html            (Careers & opportunities)
│   ├── contact.html            (Contact form & info)
│   └── blog.html               (Blog articles)
│
├─── Configuration Files
│   ├── netlify.toml            (Netlify deployment config)
│   ├── _redirects              (URL redirect rules)
│   ├── _nav.css                (Main stylesheet)
│   ├── .gitignore              (Git ignore rules)
│   └── .vscode/                (VS Code settings)
│
├─── Documentation Files
│   ├── README.md               (Project overview)
│   ├── STYLE_GUIDE.md          (Design system documentation)
│   ├── PRODUCTION_CHECKLIST.md (Deployment checklist)
│   ├── UPDATES_SUMMARY.md      (Change log)
│   ├── NETLIFY_DEPLOYMENT.md   (Deployment guide)
│   └── FILE_STRUCTURE.md       (This file)
│
├─── Assets Directory
│   └── assets/
│       ├── css/                (Additional stylesheets)
│       │   └── (empty - for future expansions)
│       │
│       ├── images/
│       │   ├── logos/
│       │   │   ├── logo1.png   (Main logo)
│       │   │   └── logo5.png   (Alternative logo)
│       │   │
│       │   └── content/
│       │       ├── person-working-html-computer.jpg
│       │       ├── digital-blue-hud-interface-global-concept.jpg
│       │       ├── 4K Earth Wallpapers on WallpaperDog.jpg
│       │       ├── robot ai.jpg
│       │       └── 2151964669.jpg
│       │
│       └── js/                 (JavaScript modules)
│           └── (empty - for future expansions)
│
├─── Legacy Folder
│   └── images/                 (Old image assets - archive)
│
└─── System Files
    └── .vscode/               (VS Code configuration)
```

## File Organization Details

### Root Level (HTML & Config)
All HTML files and configuration files are in the root directory for simplicity:
- **HTML files**: Directly accessible as pages
- **Config files**: Easy to find and modify (_nav.css, netlify.toml, etc.)
- **Docs**: Quick reference for developers

### Assets Directory
Production-ready structure following industry standards:

#### assets/css/
- Current: Empty (main CSS is _nav.css in root)
- Future: Custom stylesheets, page-specific styles

#### assets/images/logos/
- `logo1.png` - Main brand logo (used in navbar, footer)
- `logo5.png` - Alternative logo (backup)

#### assets/images/content/
- `person-working-html-computer.jpg` - Hero carousel
- `digital-blue-hud-interface-global-concept.jpg` - Hero carousel
- `4K Earth Wallpapers on WallpaperDog.jpg` - Hero carousel
- `robot ai.jpg` - Hero carousel
- `2151964669.jpg` - Hero carousel

#### assets/js/
- Current: Empty (JavaScript in HTML <script> tags)
- Future: Modular JavaScript files

## Referenced in HTML Files

All image references in HTML files use the following paths:

```html
<!-- Logos -->
<img src="assets/logo/logo1.png" alt="Veyom">

<!-- Content Images -->
<div class="hero-slide" style="background-image: url('assets/images/aech.jpg');"></div>
```

## Build & Deployment

### No Build Step Required
This is a static website with no build process:
- HTML files served directly
- CSS and images linked from assets
- Ready for immediate deployment

### Netlify Deploy
```
Build command:    (none)
Publish dir:      .
Include:          All root and assets/ files
Exclude:          images/ folder, .vscode/
```

## Maintenance Guidelines

### Adding New Images
1. Determine category (logos, content, etc.)
2. Place in appropriate `assets/images/` subfolder
3. Optimize before adding (compress JPG/PNG)
4. Update HTML references with full `assets/images/` path

### Adding New Stylesheets
1. Create in `assets/css/` if independent from _nav.css
2. Link in HTML `<head>` with proper path
3. Document in STYLE_GUIDE.md

### Adding New JavaScript
1. Create modules in `assets/js/`
2. Reference with full path from HTML
3. Consider moving inline scripts here for organization

## File Size & Performance

Current structure is optimized for:
- **Fast delivery**: Assets in subdirectories with CDN caching
- **Easy management**: Clear organization by type
- **Scalability**: Ready for growth without restructuring

## Git Ignore Rules

Files excluded from version control:
```
node_modules/
.DS_Store
.env
```

All HTML, CSS, and images are version-controlled.

## Migration Notes

**Previous Structure** → **Current Structure**
- Images in root → `assets/images/content/` and `assets/images/logos/`
- All CSS in root → `_nav.css` remains in root, additional CSS can go to `assets/css/`
- No JS folder → `assets/js/` ready for future use

## Next Steps

1. **Verify** all links work correctly
2. **Test** on staging before production
3. **Monitor** Netlify build logs
4. **Update** this guide as structure evolves

---

**Last Updated**: May 28, 2026
**Status**: Production Ready ✅
