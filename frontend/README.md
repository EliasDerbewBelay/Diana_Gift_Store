This is a custom [Next.js](https://nextjs.org) App Router storefront built for a handmade gifts business with TypeScript, Tailwind CSS, Zustand, Zod, React Hook Form, and modern feature-based architecture.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

- `app/` — App Router pages and route groups
- `components/` — Reusable UI and layout building blocks
- `lib/` — Local seed data and utility helpers
- `services/` — Backend integration contracts and API layers
- `store/` — Zustand state stores for cart, favorites, waitlist, and auth
- `types/` — Global TypeScript interfaces

## Routes

- `/` — Home
- `/products` — Product catalog
- `/product/[id]` — Product detail
- `/cart` — Cart overview
- `/favorites` — Saved favorites
- `/waitlist` — Saved waitlist items
- `/login` — Login page
- `/register` — Register page
- `/checkout` — Protected checkout flow

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
