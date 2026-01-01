# Professional E-football Gamer Profile

This is the gaming simple portfolio profile website for **Shoyaib YT**, a professional E-football gamer and content creator. Built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**, this project features a high-performance, secure, and visually stunning design.

## 🚀 Features

- **Next.js 16 (App Router)**: Fast, server-side rendered, and SEO-friendly.
- **Tailwind CSS v4**: Modern, utility-first styling with advanced animations.
- **Security Features**: Built-in "Anti-Theft" protection (disables right-click, F12, inspect element).
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.
- **Dynamic QR Code**: Generates a QR code linking to the official website.
- **SEO Optimized**: Pre-configured Metadata, Open Graph, and Twitter Cards.
- **Google Analytics**: Integrated support for traffic tracking (via `@next/third-parties`).
- **Custom Animations**: Rocket border effects and video background support.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Components**: React QR Code
- **Analytics**: Google Analytics 4

---

## 📂 Folder Structure

```bash
shoyaib-profile/
├── app/
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Cards, Buttons
│   │   ├── layout/      # Header, Footer
│   │   ├── protection/  # Security Logic (AntiTheft)
│   │   └── sections/    # Page Sections (Skills, QR, etc.)
│   ├── globals.css      # Global Styles & Animations
│   ├── layout.tsx       # Main Layout & SEO
│   └── page.tsx         # Homepage
├── public/
│   └── img/             # Images (profile, icons, og-image)
├── middleware.ts        # Domain Protection Logic
└── package.json         # Project Dependencies
```

---

## ⚡ Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/md-mostafa-niloy/shoyaib-profile.git
cd shoyaib-profile
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ⚙️ Customization Guide

### 1. Update Images
Place your images in the `public/img/` folder with these specific names:
- `profile.png` (Profile Picture)
- `icon.png` (Favicon/Logo)
- `og-image.jpg` (Facebook Cover - 1200x630)
- `twitter-image.jpg` (Twitter Cover - 1200x600)

### 2. Google Analytics
Go to `app/layout.tsx` and replace `G-XXXXXXXXXX` with your actual **Measurement ID**:
```tsx
<GoogleAnalytics gaId="YOUR_MEASUREMENT_ID" />
```

### 3. Domain Protection
To prevent others from deploying your code, update `middleware.ts`:
```typescript
const allowedDomains = ['localhost:3000', 'your-domain.com'];
```

---

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to **GitHub**.
2. Import the project into **Vercel**.
3. Click **Deploy**.

---

## 📝 License

This project is proprietary and developed by **Visernic Limited**.
Copyright © 2025 - 2026 **Shoyaib YT**. All Rights Reserved.

---

Developed with ❤️ by [Visernic Limited](https://visernic.com)
