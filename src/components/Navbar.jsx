import { useEffect, useState } from 'react';
import Logo from './Logo';
import { navLinks } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.target))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`mad-navbar ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Logo onClick={closeMenu} />

        <ul className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                className={`nav-link-mad ${active === link.target ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-wrap">
            <a href="#membership" className="btn-mad" onClick={closeMenu}>
              Join Now <i className="bi bi-arrow-right" />
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'} />
        </button>
      </div>
    </header>
  );
}
