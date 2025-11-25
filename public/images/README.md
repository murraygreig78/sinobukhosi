# Images Directory

This directory contains images downloaded from https://www.sinobukhosi.co.za/

## Images Available

### Logo
- `logo.png` - Logo (192x192px optimized version)
- `logo-full.png` - Full resolution logo (recommended for use)

### Hero/Background Images
- `hero-background.jpg` - Small hero background image (138x78px)
- `hero-background-full.jpg` - Full resolution hero background (167KB, recommended for use)

### Leadership
- `luleka-masinda.jpg` - Luleka Masinda profile photo (375x443px optimized)
- `luleka-masinda-full.jpg` - Full resolution profile photo (94KB, recommended for use)

### About Page
- `about-image.jpg` - Image used on the about page

## Usage in Astro

Images in the `public/images/` folder can be referenced directly:

```astro
<img src="/images/logo-full.png" alt="Sinobukhosi Logo" />
```

Or using Astro's Image component:

```astro
---
import { Image } from 'astro:assets';
---

<Image src="/images/logo-full.png" alt="Sinobukhosi Logo" />
```

## Image Optimization

For production, consider:
- Using Astro's built-in image optimization
- Converting to WebP format for better compression
- Using responsive images with `srcset` for different screen sizes

