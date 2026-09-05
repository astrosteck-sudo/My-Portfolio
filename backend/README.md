# Episilion Services - Backend API

Lightweight Node.js + Express backend for the Episilion Services portfolio contact form.

## Features

- Contact form endpoint with email forwarding
- Rate limiting to prevent spam
- Input validation and sanitization
- Security headers (Helmet)
- CORS support
- Environment variable configuration

## Tech Stack

- Node.js (>=18.0.0)
- Express.js
- Nodemailer (email sending)
- express-rate-limit (spam prevention)
- Helmet (security headers)
- CORS (cross-origin support)
- dotenv (environment variables)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your email configuration
   
   For Gmail:
   - Enable 2-Step Verification on your Google Account
   - Generate an App Password at https://myaccount.google.com/apppasswords
   - Use the 16-character app password as `EMAIL_PASS`

3. **Start the server:**
   ```bash
   # Development (with hot reload)
   npm run dev

   # Production
   npm start
   ```

## Environment Variables

- `PORT`: Server port (default: 3000)
- `EMAIL_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP server port (e.g., 587)
- `EMAIL_SECURE`: Use SSL/TLS (true for 465, false for other ports)
- `EMAIL_USER`: Email username
- `EMAIL_PASS`: Email password or app password
- `EMAIL_FROM`: From email address

## API Endpoints

### POST /api/contact
Accepts contact form submissions and forwards them via email.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "budget": "$1,000-$3,000",
  "message": "I have a project..."
}
```

**Response:**
- Success: `{ success: true, message: "Your message has been sent successfully!" }`
- Error: `{ error: "Error message" }`

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Deployment

This backend is configured for deployment on Render:

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: Add all required variables from `.env.example`
4. Deploy

## Security Features

- Rate limiting: 5 requests per 15 minutes per IP
- Input validation: Required fields, email format, length limits
- Input sanitization: Basic XSS prevention
- Security headers via Helmet
- CORS configuration

## Email Service Options

### Gmail (Default)
- Free, but requires App Password
- Follow setup instructions in `.env.example`

### Resend (Recommended for Production)
- More reliable for transactional emails
- Better deliverability
- Free tier available
- Sign up at https://resend.com/
- Update SMTP configuration in `.env` to use Resend's servers
