import { useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';
import { programs, programCategories } from '../data/site';

export default function Programs() {
  const [category, setCategory] = useState('all');
  const visible =
    category === 'all' ? programs : programs.filter((p) => p.category === category);

  return (
    <section className="section" id="programs">
      <div className="container">
        <SectionHeading
          eyebrow="Fitness Programs"
          title={
            <>
              Find Your <span>Strength.</span>
            </>
          }
          description="Discover a program built around your goals — from raw strength and muscle to endurance, conditioning and expert one-on-one coaching."
        />

        <div className="filter-bar" role="group" aria-label="Filter programs by category">
          {programCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${category === cat.id ? 'is-active' : ''}`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="row g-4" key={category}>
          {visible.map((program, index) => (
            <div className="col-md-6 col-lg-4" key={program.id}>
              <Reveal delay={(index % 3) * 90}>
                <article className="program-card">
                  <div className="program-card__media">
                    <SmartImage src={program.image} alt={program.title} />
                    <span className="program-card__cat">{program.category}</span>
                    <span className="program-card__icon">
                      <i className={`bi ${program.icon}`} />
                    </span>
                  </div>
                  <div className="program-card__body">
                    <span className="program-card__meta">{program.meta}</span>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <a href="#contact" className="link-arrow">
                      Explore Program <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
