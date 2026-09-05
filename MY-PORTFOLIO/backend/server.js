import express from 'express';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

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

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'paulfoli122@gmail.com',
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
    };

    // Send email
    await transporter.sendMail(mailOptions);

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
