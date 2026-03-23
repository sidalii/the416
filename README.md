# The 416 — Restaurant Website

Official website for **The 416**, a restaurant based in Oran, Algeria.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **SCSS** (modular styles)
- **Docker** (containerized deployment)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Docker

```bash
docker build -t the416 .
docker run -p 3000:3000 the416
```

## Sections

- **Hero** — Full-screen video background with call to action
- **About** — Story and chef introduction
- **Menu** — Featured dishes
- **Reservation** — Booking form
- **Footer** — Hours, contact info, and social links

## Social

- Instagram: [@the_416_oran](https://www.instagram.com/the_416_oran/)