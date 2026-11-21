import { useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import useLocalStorage from '../hooks/useLocalStorage';
import { contactInfo } from '../data/site';

const EMPTY = { name: '', email: '', phone: '', message: '' };

export default function Contact({ selectedPlan, onPlanHandled }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [, setMessages] = useLocalStorage('madcore_messages', []);
  const [handledPlan, setHandledPlan] = useState(null);

  // Adjust state during render when a plan is chosen elsewhere (React's
  // "derive state from props" pattern) so the enquiry form is pre-filled.
  if (!selectedPlan && handledPlan) {
    setHandledPlan(null);
  }
  if (selectedPlan && selectedPlan !== handledPlan) {
    setHandledPlan(selectedPlan);
    setForm((prev) => ({
      ...prev,
      message: `I’m interested in joining with the ${selectedPlan} membership plan. Please get in touch.`,
    }));
    setSubmitted(false);
  }

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
    setSubmitted(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const nextErrors = {};

    if (form.name.trim().length < 2) nextErrors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (form.phone.replace(/\D/g, '').length < 6) nextErrors.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 10) nextErrors.message = 'Please write a message (at least 10 characters).';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setMessages((prev) => [...prev, { ...form, date: new Date().toISOString() }]);
    setSubmitted(true);
    setForm(EMPTY);
    onPlanHandled?.();
  };

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let’s Get Stronger <span>Together.</span>
            </>
          }
          description="Have a question or ready to start your journey? Send us a message and our team will get back to you."
        />

        <div className="row g-4">
          <div className="col-lg-7">
            <Reveal>
              <div className="contact-card">
                <h3>Send Us a Message</h3>

                {selectedPlan && (
                  <div className="selected-plan-banner">
                    <i className="bi bi-star-fill" /> Interested in the <strong>{selectedPlan}</strong> plan — we’ve pre-filled your message.
                  </div>
                )}

                {submitted && (
                  <div className="alert-mad" role="status">
                    <i className="bi bi-check-circle-fill" />
                    Thank you! Your message has been sent successfully. We’ll be in touch soon.
                  </div>
                )}

                <form onSubmit={submit} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="field">
                        <label htmlFor="c-name">Full Name</label>
                        <input
                          id="c-name"
                          type="text"
                          placeholder="Your full name"
                          className={errors.name ? 'is-invalid-mad' : ''}
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                        />
                        {errors.name && <span className="field-error">{errors.name}</span>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="field">
                        <label htmlFor="c-email">Email Address</label>
                        <input
                          id="c-email"
                          type="email"
                          placeholder="you@example.com"
                          className={errors.email ? 'is-invalid-mad' : ''}
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                        />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="c-phone">Phone Number</label>
                    <input
                      id="c-phone"
                      type="tel"
                      placeholder="+20 155 467 2640"
                      className={errors.phone ? 'is-invalid-mad' : ''}
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="c-message">Message</label>
                    <textarea
                      id="c-message"
                      rows="5"
                      placeholder="Tell us about your goals..."
                      className={errors.message ? 'is-invalid-mad' : ''}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-mad mt-2">
                    Send Message <i className="bi bi-send" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal delay={100}>
              <div className="contact-info">
                <h3>Visit Us</h3>

                <div className="contact-info__item">
                  <i className="bi bi-telephone-fill" />
                  <div>
                    <span>Phone</span>
                    <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="bi bi-whatsapp" />
                  <div>
                    <span>WhatsApp</span>
                    <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">{contactInfo.phone}</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="bi bi-envelope-fill" />
                  <div>
                    <span>Email</span>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="bi bi-github" />
                  <div>
                    <span>GitHub</span>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">mmmohhameddd81-prog</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="bi bi-linkedin" />
                  <div>
                    <span>LinkedIn</span>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">mohamed-adel-153147332</a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="bi bi-geo-alt-fill" />
                  <div>
                    <span>Location</span>
                    <strong>{contactInfo.location}</strong>
                  </div>
                </div>

                <div className="contact-info__hours">
                  <span className="text-accent" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    Working Hours
                  </span>
                  {contactInfo.hours.map((h) => (
                    <div className="row-line" key={h.days}>
                      <span>{h.days}</span>
                      <strong>{h.time}</strong>
                    </div>
                  ))}
                </div>

                <div className="contact-socials">
                  {contactInfo.socials.map((s) => (
                    <a key={s.icon} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      <i className={`bi ${s.icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
