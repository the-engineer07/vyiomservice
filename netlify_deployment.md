# Netlify Deployment Setup

Your project is now configured for Netlify deployment.

## Files Added

- **netlify.toml** - Netlify configuration with build and routing settings
- **_redirects** - Redirect rules for proper routing
- **.gitignore** - Git ignore file to exclude unnecessary files

## Deployment Steps

1. **Connect to GitHub** (if not already done)
   - Push your project to a GitHub repository

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Netlify will automatically detect the configuration

3. **Custom Domain** (optional)
   - In Netlify dashboard, go to Domain settings
   - Connect your custom domain or use Netlify's provided domain

## Configuration Details

- **Build Command**: Empty (static site, no build needed)
- **Publish Directory**: `.` (root directory)
- **Cache Headers**: 
  - HTML files: 10 minutes
  - Images: 1 year
  - Other assets: 1 hour

## Environment Variables (if needed)

Add in Netlify Dashboard → Site settings → Build & deploy → Environment
