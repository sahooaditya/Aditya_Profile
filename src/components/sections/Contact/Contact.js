import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { contactCards } from "../../../data/portfolioData";
import { db } from "../../../firebase";
import "./Contact.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.firstName.trim()) nextErrors.firstName = "First name required";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name required";
    if (!form.email.trim()) {
      nextErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Enter valid email";
    }
    if (!form.message.trim()) nextErrors.message = "Message required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await db.collection("contact_details").add({
        First_name: form.firstName,
        Last_name: form.lastName,
        Email: form.email,
        Message: form.message,
        createdAt: new Date().toISOString(),
      });
      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent successfully. I will reply soon." });
    } catch (error) {
      setStatus({ type: "error", message: "Message could not be sent. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section motion-section section-frame" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Have a role, project, or frontend problem? Let us talk."
        text="The form keeps the same Firebase workflow, now with a cleaner interface and better feedback states."
      />
      <div className="contact-grid">
        <div className="contact-panel" data-animate="left">
          <h3>Quick links</h3>
          <p>Available for frontend roles, React dashboards, portfolio work, and production UI improvements.</p>
          {contactCards.map((card) => (
            <a className="contact-card" key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <img src={card.icon} alt="" />
              <span>
                <small>{card.label}</small>
                <strong>{card.value}</strong>
              </span>
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-animate="right">
          <div className="form-row">
            <label>
              <span>First Name</span>
              <input name="firstName" value={form.firstName} onChange={updateField} placeholder="Aditya" />
              {errors.firstName ? <small>{errors.firstName}</small> : null}
            </label>
            <label>
              <span>Last Name</span>
              <input name="lastName" value={form.lastName} onChange={updateField} placeholder="Sahu" />
              {errors.lastName ? <small>{errors.lastName}</small> : null}
            </label>
          </div>
          <label>
            <span>Email</span>
            <input name="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
            {errors.email ? <small>{errors.email}</small> : null}
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell me about the opportunity..." rows="5" />
            {errors.message ? <small>{errors.message}</small> : null}
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <i className="button-loader" /> : <FiSend />}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status.message ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;
