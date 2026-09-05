import { useState } from "react";
import "./ContactForm.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    } else if (formData.email.length > 100) {
      newErrors.email = "Email must be less than 100 characters";
    }

    if (formData.subject && formData.subject.length > 200) {
      newErrors.subject = "Subject must be less than 200 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // In development, you might want to use a local backend URL
      // In production, this should be your deployed backend URL
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
      
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrors({ general: data.error || "Failed to send message" });
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrors({ general: "Network error. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-header">
        <span className="eyebrow">Get in touch</span>
        <h2 className="metal-text">Start a conversation</h2>
        <p>
          Have a project in mind? Send me a message and I'll get back to you
          within 24 hours.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="contact-form-success">
          <span className="success-icon">✓</span>
          <h3>Message sent successfully!</h3>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
          <button
            className="btn btn-ghost"
            onClick={() => setSubmitStatus(null)}
          >
            Send another message
          </button>
        </div>
      )}

      {submitStatus !== "success" && (
        <form className="contact-form" onSubmit={handleSubmit}>
          {errors.general && (
            <div className="form-error-general">{errors.general}</div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                placeholder="Your name"
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "error" : ""}
                placeholder="Project inquiry"
                disabled={isSubmitting}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">Select budget range</option>
                <option value="$500-$1,000">$500 - $1,000</option>
                <option value="$1,000-$3,000">$1,000 - $3,000</option>
                <option value="$3,000-$5,000">$3,000 - $5,000</option>
                <option value="$5,000-$10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
                <option value="Not sure">Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              placeholder="Tell me about your project..."
              rows={6}
              disabled={isSubmitting}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
            <span className="char-count">
              {formData.message.length}/2000
            </span>
          </div>

          <button
            type="submit"
            className="btn btn-solid btn-large"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      <div className="contact-form-footer">
        <p>Prefer to reach out directly?</p>
        <div className="contact-alternatives">
          <a href="mailto:episilionservices@gmail.com" className="contact-link">
            <span className="contact-icon">✉</span>
            episilionservices@gmail.com
          </a>
          <a
            href="https://wa.me/@episilionservices"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">💬</span>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
