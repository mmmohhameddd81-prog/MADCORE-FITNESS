import { useRef } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';
import { testimonials } from '../data/site';

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.testimonial-card');
    const amount = card ? card.getBoundingClientRect().width + 22 : 360;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Member Stories"
          title={
            <>
              Real People. <span>Real Progress.</span>
            </>
          }
          description="Nothing motivates us more than the transformations of the people who train with us every day."
        />

        <Reveal>
          <div className="testimonial-track" ref={trackRef}>
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="testimonial-card__quote">“</div>
                <div className="testimonial-card__stars">
                  {'★'.repeat(item.rating)}
                  {'☆'.repeat(5 - item.rating)}
                </div>
                <p className="testimonial-card__text">{item.text}</p>
                <div className="testimonial-card__author">
                  <SmartImage src={item.image} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="carousel-controls">
          <button className="carousel-arrow" type="button" aria-label="Previous testimonials" onClick={() => scroll(-1)}>
            <i className="bi bi-arrow-left" />
          </button>
          <button className="carousel-arrow" type="button" aria-label="Next testimonials" onClick={() => scroll(1)}>
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
