import express from 'express';
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set("trust proxy", 1)
const PORT = process.env.PORT || 3000;

const resend = new Resend(process.env.RESEND_API_KEY);

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { error: 'Too many contact form submissions, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Input validation and sanitization
const validateContactForm = (req, res, next) => {
  const { name, email, subject, message, budget } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Name, email, and message are required fields' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email format' 
    });
  }

  // Length validation
  if (name.length > 100 || email.length > 100 || subject?.length > 200 || message.length > 2000) {
    return res.status(400).json({ 
      error: 'One or more fields exceed maximum length' 
    });
  }

  // Sanitize input (basic XSS prevention)
  const sanitize = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/[<>]/g, '');
  };

  req.body = {
    name: sanitize(name),
    email: sanitize(email),
    subject: sanitize(subject || 'Portfolio Contact Form Submission'),
    message: sanitize(message),
    budget: sanitize(budget || 'Not specified')
  };

  next();
};

// Contact form endpoint
app.post('/api/contact', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const { name, email, subject, message, budget } = req.body;

    // Send email via Resend's HTTP API (not SMTP — Render's free tier
    // blocks outbound SMTP ports 25/465/587, but HTTPS/443 is unaffected)
    const { data, error } = await resend.emails.send({
      // Sandbox sender — we don't have a verified custom domain yet.
      // Must stay exactly this value until a domain is verified in Resend.
      from: 'onboarding@resend.dev',
      // Sandbox mode only delivers to the email address the Resend
      // account itself is registered under — must match exactly.
      to: 'episilionservices@gmail.com',
      subject: `[Episilion Portfolio] ${subject}`,
      text: `
New contact form submission from Episilion Services portfolio:

Name: ${name}
Email: ${email}
Budget: ${budget}

Message:
${message}

---
This message was sent from the Episilion Services portfolio contact form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d4ff;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #888; font-size: 12px;">This message was sent from the Episilion Services portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        error: 'Failed to send message. Please try again later.'
      });
    }

    console.log('Email sent via Resend, id:', data?.id);

    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});