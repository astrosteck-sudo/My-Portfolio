# Episilion Services Portfolio

Professional portfolio website for Episilion Services, a full-stack development studio based in Accra, Ghana. The site showcases web, mobile and desktop application development, UI/UX design services, and selected project work.

## Project Overview

This portfolio serves as the primary digital presence for Episilion Services, helping to:
- Showcase technical capabilities and project experience
- Attract potential clients seeking web, mobile or desktop development services
- Provide a professional, credible online presence
- Enable direct contact through a functional contact form

**Target Audience:** Small business owners, startups, and organizations looking to hire a developer for web, mobile or desktop projects.

## Tech Stack

### Frontend
- **React 19.2.7** - UI framework
- **Vite 8.1.0** - Build tool and dev server
- **React Router DOM 7.18.1** - Client-side routing
- **Lucide React 1.24.0** - Icon library

### Backend (Contact Form)
- **Node.js** - Runtime environment
- **Express 4.18.2** - Web framework
- **Resend / Nodemailer** - Email sending
- **express-rate-limit 7.1.5** - Rate limiting
- **Helmet 7.1.0** - Security headers
- **CORS 2.8.5** - Cross-origin resource sharing

### Development Tools
- **ESLint 10.5.0** - Code linting
- **Self-hosted variable fonts** - Inter, Space Grotesk & JetBrains Mono (no external font requests)

## Design Direction

The site features a bright, editorial "engineered studio" aesthetic:
- **Light theme** — soft off-white canvas (`#f6f7fb`) with white surfaces and a single indigo→violet→sky accent gradient
- **Typography**: Space Grotesk for display headings, Inter for body copy, JetBrains Mono for labels and metadata
- **Generous whitespace** with a deliberate type scale and hairline rules instead of heavy borders
- **Subtle motion**: scroll-reveal fades, count-up statistics, floating hero chips, animated hero chart
- **Layered depth**: soft ambient colour pools, fine grain overlay, and low-contrast elevation shadows
- **Accessible**: skip link, visible focus rings, `prefers-reduced-motion` support, semantic landmarks

### Responsive Breakpoints

The site is designed mobile-first with intentional layouts at each breakpoint:
- **480px and below**: Extra small phones — single column, condensed spacing, floating chips hidden
- **640px and below**: Small phones — single-column service/work/process grids
- **860px and below**: Tablets — stacked about/stack sections, 2-up statistics
- **1080px and below**: Laptops — stacked hero, 2-up service/work grids, mobile navigation sheet
- **Above 1080px**: Desktop — full multi-column layouts

All components are tested and optimized for mobile viewing with proper touch targets and readable text sizes.

## Project Structure

```
MY-PORTFOLIO/
├── backend/                 # Express.js backend for contact form
│   ├── server.js           # Main server file
│   ├── package.json       # Backend dependencies
│   ├── .env.example       # Environment variables template
│   ├── .gitignore         # Git ignore rules
│   └── README.md          # Backend documentation
├── src/
│   ├── assets/            # Images, fonts and static assets
│   │   └── Fonts/         # Self-hosted variable fonts + font.css
│   ├── components/        # Shared UI primitives
│   │   ├── Reveal.jsx     # Scroll-reveal wrapper
│   │   ├── SectionHead.jsx # Section opener (index, eyebrow, title, lede)
│   │   ├── SectionHead.css
│   │   └── CountUp.jsx    # Animated statistic counter
│   ├── HomePage/          # Main homepage
│   │   ├── Hompage.jsx    # Homepage composition
│   │   ├── Homepage.css   # Homepage styles
│   │   ├── ContactForm.jsx # Contact form component
│   │   └── ContactForm.css # Contact form styles
│   ├── PageHeader/        # Fixed navigation header
│   │   ├── PageHeader.jsx
│   │   └── PageHeader.css
│   ├── SiteFooter/        # Footer component
│   │   ├── SiteFooter.jsx
│   │   └── SiteFooter.css
│   ├── Riser/             # Riser project landing page
│   │   └── riser-landing.jsx
│   ├── App.jsx            # Routing + scroll restoration
│   ├── App.css            # App frame styles
│   ├── index.css          # Design tokens, primitives and utilities
│   └── main.jsx           # Application entry point
├── public/                # Static files (founder photo, résumé, logos)
├── index.html            # HTML template with SEO metadata
├── package.json           # Frontend dependencies
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## Homepage Sections

1. **Hero** — positioning statement, availability badge, primary CTAs and an animated "deploy" panel
2. **Statistics** — count-up metrics in a single bordered rail
3. **About** — studio positioning plus three working principles
4. **Services** — eight offerings: web, mobile, desktop, APIs & backend, UI/UX, performance & SEO, maintenance, consulting
5. **Work** — three shipped products with status badges and stack chips
6. **Stack** — six capability groups: frontend, mobile, desktop, backend & data, cloud & DevOps, design & tooling
7. **Process** — four-step engagement model
8. **Founder** — Paul Deon Foli, with photo, background and résumé download
9. **Contact** — enquiry form with validation plus direct contact details

## Setup Instructions

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` (if it exists)
   - Set `VITE_BACKEND_URL` to your backend URL
   - For local development: `VITE_BACKEND_URL=http://localhost:3000`
   - For production: `VITE_BACKEND_URL=https://your-backend.onrender.com`

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

### Backend Setup (Contact Form)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in email configuration (see Backend README for details)
   - For Gmail, you'll need an App Password from Google Account settings

4. **Start backend server:**
   ```bash
   # Development (with hot reload)
   npm run dev

   # Production
   npm start
   ```

The backend will run on port 3000 by default (configurable via PORT environment variable).

## Environment Variables

### Frontend (.env)
- `VITE_BACKEND_URL`: URL of the backend API for contact form submissions

### Backend (backend/.env)
- `PORT`: Server port (default: 3000)
- `EMAIL_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP server port (e.g., 587)
- `EMAIL_SECURE`: Use SSL/TLS (true for 465, false for other ports)
- `EMAIL_USER`: Email username
- `EMAIL_PASS`: Email password or app password
- `EMAIL_FROM`: From email address

See `backend/.env.example` for detailed setup instructions, including how to obtain Gmail App Passwords.

## Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- **Vercel**, **Netlify**, or **GitHub Pages** for easy deployment
- Build the project (`npm run build`) and deploy the `dist` folder
- Ensure `VITE_BACKEND_URL` is set to your production backend URL

### Backend Deployment
The backend is configured for deployment on Render:
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: Add all required variables from `backend/.env.example`
4. Deploy

See `backend/README.md` for detailed backend deployment instructions.

## Key Features

- **Mobile-First Responsive Design**: Optimized for all screen sizes with intentional layouts at each breakpoint
- **Smooth Animations**: Scroll-reveal fades, count-up statistics and micro-interactions, all disabled under `prefers-reduced-motion`
- **Functional Contact Form**: Client-side validation with backend email forwarding and a success state
- **Rate Limiting**: Protection against form spam
- **Security**: Input sanitization, security headers, and CORS configuration
- **Modern UI**: Light editorial theme, accent gradient, hairline rules and soft elevation
- **Project Showcase**: Case study-style project cards with status indicators
- **Skills Display**: Chip-based capability and stack presentation
- **Accessibility**: Skip link, focus-visible rings, semantic landmarks and ARIA labelling
- **SEO**: Descriptive title, meta description, Open Graph and Twitter card metadata

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload

## Contact Form Configuration

The contact form requires a properly configured backend to function. The backend forwards form submissions to `episilionservices@gmail.com`.

**Important:** You must configure email credentials in the backend `.env` file before the contact form will work. See `backend/.env.example` for detailed instructions on setting up Gmail App Passwords or alternative email services like Resend.

## License

© 2024 Episilion Services. All rights reserved.
