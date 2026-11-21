import { useEffect, useState } from 'react';
import Logo from './Logo';
import { navLinks, programs, contactInfo } from '../data/site';

const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'At MADCORE FITNESS, we value your privacy. Information you share with us — such as your name, email and phone number — is used only to respond to your enquiries, manage your membership and improve your experience with us.',
      'We do not sell or share your personal information with third parties for marketing purposes. Data submitted through this website is stored locally in your browser for demonstration purposes.',
      `You may contact us at ${contactInfo.email} at any time to request access to, correction of, or removal of your information.`,
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'Membership at MADCORE FITNESS is subject to the rules and policies of the club. Members are expected to train responsibly, respect fellow members and follow all posted facility guidelines.',
      'Membership fees, class schedules and facility availability may change. Pricing shown on this website is indicative and subject to confirmation at sign-up.',
      'Health and fitness results vary from person to person. Calculator results on this website are estimates only and do not constitute medical advice.',
    ],
  },
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [legal, setLegal] = useState(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-cta">
          <div className="footer-cta__text">
            <h3>Ready To Transform?</h3>
            <p>Your journey to a stronger you starts here.</p>
          </div>
          <a href="#membership" className="btn-mad">
            Join MADCORE Now <i className="bi bi-arrow-right" />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Logo />
            <p className="footer-brand__desc">
              Building stronger bodies, stronger minds, and stronger lifestyles. Welcome
              to the MADCORE experience.
            </p>
            <div className="footer-socials">
              {contactInfo.socials.map((s) => (
                <a key={s.icon} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <a href={`#${link.target}`}>
                    <i className="bi bi-chevron-right" /> {link.label === 'Home' ? 'Home' : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              {programs.map((program) => (
                <li key={program.id}>
                  <a href="#programs">
                    <i className="bi bi-chevron-right" /> {program.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a className="footer-contact-line" href={contactInfo.phoneHref}>
              <i className="bi bi-telephone-fill" /> {contactInfo.phone}
            </a>
            <a className="footer-contact-line" href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp
            </a>
            <a className="footer-contact-line" href={`mailto:${contactInfo.email}`}>
              <i className="bi bi-envelope-fill" /> {contactInfo.email}
            </a>
            <a className="footer-contact-line" href={contactInfo.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github" /> GitHub
            </a>
            <a className="footer-contact-line" href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin" /> LinkedIn
            </a>
            <span className="footer-contact-line">
              <i className="bi bi-geo-alt-fill" /> {contactInfo.location}
            </span>
          </div>

          <div className="footer-col">
            <h4>Working Hours</h4>
            {contactInfo.hours.map((h) => (
              <div key={h.days} style={{ marginBottom: 14 }}>
                <div style={{ color: 'var(--text)', fontSize: 13, fontWeight: 600 }}>{h.days}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>{h.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-wrap justify-content-between align-items-center w-100" style={{ gap: 18 }}>
          <p>© 2026 MADCORE FITNESS. ALL RIGHTS RESERVED.</p>
          <div className="footer-bottom__links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); setLegal('privacy'); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); setLegal('terms'); }}>Terms &amp; Conditions</a>
            <a href="#home">Back to Top</a>
          </div>
        </div>
      </div>

      <button className={`back-top ${showTop ? 'is-visible' : ''}`} type="button" onClick={scrollTop} aria-label="Back to top">
        <i className="bi bi-arrow-up" />
      </button>

      {legal && (
        <div className="legal-modal" onClick={() => setLegal(null)} role="presentation">
          <div className="legal-modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" type="button" aria-label="Close" onClick={() => setLegal(null)}>
              <i className="bi bi-x-lg" />
            </button>
            <h3>{LEGAL[legal].title}</h3>
            {LEGAL[legal].body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <button type="button" className="btn-mad mt-3" onClick={() => setLegal(null)}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
}
