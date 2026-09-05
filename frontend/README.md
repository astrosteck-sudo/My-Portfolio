# Episilion Services Portfolio

Professional portfolio website for Episilion Services, a two-person digital product studio based in Accra, Ghana. The site showcases web development, mobile apps, UI/UX design services, and selected project work.

## Project Overview

This portfolio serves as the primary digital presence for Episilion Services, helping to:
- Showcase technical capabilities and project experience
- Attract potential clients seeking web/mobile development services
- Provide a professional, credible online presence
- Enable direct contact through a functional contact form

**Target Audience:** Small business owners, startups, and organizations looking to hire a developer for web or mobile projects.

## Tech Stack

### Frontend
- **React 19.2.7** - UI framework
- **Vite 8.1.0** - Build tool and dev server
- **React Router DOM 7.18.1** - Client-side routing
- **Lucide React 1.24.0** - Icon library

### Backend (Contact Form)
- **Node.js** - Runtime environment
- **Express 4.18.2** - Web framework
- **Nodemailer 6.9.7** - Email sending
- **express-rate-limit 7.1.5** - Rate limiting
- **Helmet 7.1.0** - Security headers
- **CORS 2.8.5** - Cross-origin resource sharing

### Development Tools
- **ESLint 10.5.0** - Code linting
- **Google Fonts** - Inter & Space Grotesk typography

## Design Direction

The site features a "Refined Tech Professional" aesthetic:
- **Dark theme** with sophisticated color palette (deep charcoal background, electric blue-teal accent)
- **Typography**: Space Grotesk for headings, Inter for body text (via Google Fonts)
- **Clean, confident design** with generous whitespace and deliberate visual hierarchy
- **Subtle animations** and micro-interactions for enhanced UX
- **Glassmorphism effects** on navigation and panels
- **Mobile-first responsive design** with intentional layouts at all breakpoints
- **Removed** generic grid/scanline backgrounds in favor of subtle gradients

### Mobile-First Responsiveness

The site is designed mobile-first with responsive breakpoints:
- **480px and below**: Extra small phones - single column layouts, reduced padding
- **768px and below**: Tablets/small phones - adjusted typography and spacing
- **992px and below**: Laptops/tablets - grid adjustments and layout shifts
- **Above 992px**: Desktop - full multi-column layouts

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
│   ├── assets/            # Images and static assets
│   ├── HomePage/          # Main homepage components
│   │   ├── Hompage.jsx    # Homepage component
│   │   ├── Homepage.css   # Homepage styles
│   │   ├── CountUp.jsx    # Animated counter component
│   │   ├── ContactForm.jsx # Contact form component
│   │   ├── ContactForm.css # Contact form styles
│   │   └── ScrollReveal.jsx # Scroll animation wrapper
│   ├── PageHeader/        # Navigation header
│   │   ├── PageHeader.jsx
│   │   └── PageHeader.css
│   ├── SiteFooter/       # Footer component
│   │   ├── SiteFooter.jsx
│   │   └── SiteFooter.css
│   ├── Riser/             # Riser project landing page
│   │   └── riser-landing.jsx
│   ├── App.jsx            # Main app component with routing
│   ├── App.css            # Global styles
│   ├── index.css          # Design tokens and base styles
│   └── main.jsx           # Application entry point
├── public/                # Static files
├── index.html            # HTML template
├── package.json           # Frontend dependencies
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

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
- **Smooth Animations**: Scroll reveal animations and micro-interactions
- **Functional Contact Form**: With client-side validation and backend email forwarding
- **Rate Limiting**: Protection against form spam
- **Security**: Input sanitization, security headers, and CORS configuration
- **Modern UI**: Glassmorphism, gradient backgrounds, and refined typography
- **Project Showcase**: Case study-style project cards with status indicators
- **Skills Display**: Modern chip-based skill presentation instead of progress bars

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

The contact form requires a properly configured backend to function. The backend uses Nodemailer to send form submissions to `episilionservices@gmail.com`. 

**Important:** You must configure email credentials in the backend `.env` file before the contact form will work. See `backend/.env.example` for detailed instructions on setting up Gmail App Passwords or alternative email services like Resend.

## License

© 2024 Episilion Services. All rights reserved.
