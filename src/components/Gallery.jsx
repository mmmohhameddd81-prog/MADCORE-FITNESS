import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';
import { gallery } from '../data/site';

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + gallery.length) % gallery.length);
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % gallery.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Inside MADCORE"
          title={
            <>
              The <span>Experience.</span>
            </>
          }
          description="Take a look inside our world — premium facilities, serious training and the energy that keeps us moving."
        />

        <Reveal>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <button
                type="button"
                className="gallery-item"
                key={item.title}
                onClick={() => setActive(index)}
                aria-label={`View ${item.title}`}
              >
                <SmartImage src={item.image} alt={item.title} />
                <span className="gallery-item__overlay">
                  <i className="bi bi-plus-circle" />
                  <strong>{item.title}</strong>
                  <span>{item.category}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)} role="presentation">
          <button className="lightbox__close" type="button" aria-label="Close" onClick={() => setActive(null)}>
            <i className="bi bi-x-lg" />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i - 1 + gallery.length) % gallery.length);
            }}
          >
            <i className="bi bi-chevron-left" />
          </button>
          <SmartImage src={gallery[active].image} alt={gallery[active].title} onClick={(e) => e.stopPropagation()} />
          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i + 1) % gallery.length);
            }}
          >
            <i className="bi bi-chevron-right" />
          </button>
          <div className="lightbox__caption">
            {gallery[active].title} — {gallery[active].category}
          </div>
        </div>
      )}
    </section>
  );
}
