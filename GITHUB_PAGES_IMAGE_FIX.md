# GitHub Pages Image Loading Fixes

## Issues Fixed

### 1. Base Path Support ✅
- **Problem**: Images with absolute paths (`/images/pic.jpg`) break on GitHub Pages project sites (`/repo/`)
- **Solution**: Updated `OptimizedImage` component to detect and prepend `/darna` basePath when on GitHub Pages
- **Implementation**: Client-side detection from `window.location.pathname`

### 2. Case Sensitivity ✅
- **Problem**: GitHub Pages is Linux-hosted, so `Cat.jpg ≠ cat.jpg`
- **Solution**: All image paths use consistent lowercase `/images/` folder name
- **Verification**: All components use `/images/` (lowercase) matching the actual folder name

### 3. File Publishing ✅
- **Problem**: Images might not be copied to build output
- **Solution**: Next.js static export automatically copies `public/` folder contents to `out/` folder
- **Verification**: GitHub Actions workflow builds from `./out` directory which includes all public assets

## How It Works

### BasePath Detection
```typescript
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    if (pathname.startsWith('/darna')) {
      return '/darna'  // GitHub Pages
    }
  }
  return ''  // Local development
}
```

### Path Normalization
```typescript
const normalizePath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}
```

## Testing

### Local Development
- Images load from `/images/...` (no basePath)
- Works correctly with `npm run dev`

### GitHub Pages
- Images load from `/darna/images/...` (with basePath)
- Automatically detected from URL

### Verify in Browser DevTools
1. Open DevTools → Network tab
2. Check image requests:
   - **Local**: `http://localhost:3000/images/pic.jpg`
   - **GitHub Pages**: `https://user.github.io/darna/images/pic.jpg`
3. If you see 404s, check:
   - URL includes `/darna/` prefix on GitHub Pages
   - Case matches exactly (lowercase `images`)
   - File exists in `public/images/` folder

## Current Image Files

All images are in `public/images/` with consistent naming:
- `WhatsApp Image 2025-12-25 at 19.14.32.jpeg`
- `WhatsApp Image 2025-12-25 at 19.14.53.jpeg`
- `WhatsApp Image 2025-12-25 at 19.15.19.jpeg`
- `WhatsApp Image 2025-12-25 at 19.15.34.jpeg`

## Build Process

1. **Build**: `npm run build` creates `out/` folder
2. **Copy**: Next.js automatically copies `public/images/` → `out/images/`
3. **Deploy**: GitHub Actions uploads `out/` folder to GitHub Pages
4. **Serve**: GitHub Pages serves from root, respecting basePath

## Troubleshooting

### Images Still Not Loading?

1. **Check Network Tab**:
   - What URL is being requested?
   - Does it include `/darna/` prefix?
   - Is it 404 or another error?

2. **Verify Build Output**:
   ```bash
   npm run build
   ls -la out/images/
   ```
   - Images should be in `out/images/`

3. **Check Case Sensitivity**:
   - Folder: `public/images/` (lowercase)
   - Code: `/images/` (lowercase)
   - Must match exactly

4. **Verify GitHub Actions**:
   - Check Actions tab for build errors
   - Verify `out/` folder is uploaded correctly

## Next Steps

After deployment, verify:
- ✅ Images load on GitHub Pages
- ✅ No 404 errors in Network tab
- ✅ Images appear correctly on all pages
- ✅ Works on both desktop and mobile

