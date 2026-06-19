# Site media assets

This folder holds the website's image and video assets.

```
public/assets/
├── logo.png        # Ebovir brand logo (used in Navbar + Footer via components/Logo.tsx)
├── images/         # photos, illustrations, graphics
└── videos/         # background / promo video clips
```

## How to use

- **Logo:** replace `logo.png` here to update the logo everywhere (no code change needed).
- **In components:** reference files with a root-absolute path, e.g.
  `/assets/images/lab.jpg` in `<img>` / `next/image`, or static-import like
  `import lab from "@/public/assets/images/lab.jpg"`.

Anything in `public/` is served from the site root, so `public/assets/images/lab.jpg`
is available at `/assets/images/lab.jpg`.
