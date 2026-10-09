import { useState } from "react";
import { ArrowRight, CircleCheckBig, Loader, Mail, MessageCircle, Send } from "lucide-react";
import "./ContactForm.css";

const EMPTY = { name: "", email: "", subject: "", budget: "", message: "" };

const BUDGETS = [
  "₵500 – ₵1,000",
  "₵1,000 – ₵3,000",
  "₵3,000 – ₵5,000",
  "₵5,000 – ₵10,000",
  "₵10,000+",
  "Not sure yet",
];

export function ContactForm() {
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const next = {};

    if (!formData.name.trim()) next.name = "Please tell us your name";
    else if (formData.name.length > 100) next.name = "Name must be under 100 characters";

    if (!formData.email.trim()) next.email = "An email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = "That email looks incomplete";
    else if (formData.email.length > 100) next.email = "Email must be under 100 characters";

    if (formData.subject && formData.subject.length > 200) next.subject = "Subject must be under 200 characters";

    if (!formData.message.trim()) next.message = "Please describe the project";
    else if (formData.message.length > 2000) next.message = "Message must be under 2000 characters";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(EMPTY);
      } else {
        setSubmitStatus("error");
        setErrors({ general: data.error || "Something went wrong sending that. Please try again." });
      }
    } catch {
      setSubmitStatus("error");
      setErrors({ general: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="panel form-success">
        <span className="form-success-icon">
          <CircleCheckBig aria-hidden="true" />
        </span>
        <h3 className="display form-success-title">Message sent</h3>
        <p className="body">
          Thanks for reaching out — you will get a reply within 24 hours. If it is urgent, email
          directly at episilionservices@gmail.com.
        </p>
        <button className="btn btn--ghost" onClick={() => setSubmitStatus(null)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="panel form-card">
      <div className="form-head">
        <h3 className="h3">Project enquiry</h3>
        <p className="body">Fields marked with an asterisk are required.</p>
      </div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        {errors.general && (
          <div className="form-alert" role="alert">
            {errors.general}
          </div>
        )}

        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "has-error" : ""}
              placeholder="Your full name"
              autoComplete="name"
              disabled={isSubmitting}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "has-error" : ""}
              placeholder="you@company.com"
              autoComplete="email"
              disabled={isSubmitting}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "has-error" : ""}
              placeholder="e.g. New web platform"
              disabled={isSubmitting}
            />
            {errors.subject && <span className="field-error">{errors.subject}</span>}
          </div>

          <div className="field">
            <label htmlFor="budget">Budget range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              <option value="">Select a range</option>
              {BUDGETS.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Project details *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "has-error" : ""}
            placeholder="What are you building, who is it for, and when does it need to be live?"
            rows={6}
            disabled={isSubmitting}
          />
          <div className="field-foot">
            {errors.message ? (
              <span className="field-error">{errors.message}</span>
            ) : (
              <span className="field-hint">The more context, the more useful the reply.</span>
            )}
            <span className="field-count">{formData.message.length}/2000</span>
          </div>
        </div>

        <button type="submit" className="btn btn--accent btn--lg btn--block" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader className="spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send aria-hidden="true" />
            </>
          )}
        </button>

        <p className="form-note">
          Prefer email? Write to{" "}
          <a href="mailto:episilionservices@gmail.com">episilionservices@gmail.com</a>
        </p>
      </form>

      <div className="form-alt">
        <a className="form-alt-link" href="mailto:episilionservices@gmail.com">
          <Mail aria-hidden="true" />
          Email us
          <ArrowRight aria-hidden="true" />
        </a>
        <a
          className="form-alt-link"
          href="https://wa.me/@episilionServices"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" />
          WhatsApp
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
