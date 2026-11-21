import Reveal from './Reveal';
import SmartImage from './SmartImage';
import { aboutFeatures, images } from '../data/site';

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-copy">
            <span className="eyebrow">
              <span className="eyebrow__line" /> Who We Are <span className="eyebrow__line" />
            </span>
            <h2 className="about-copy__title">
              More Than A Gym.<br />
              It’s A <span>Lifestyle.</span>
            </h2>
            <p className="about-copy__lead">
              Welcome to MADCORE — where strength is built, limits are broken, and
              transformation becomes a way of life.
            </p>
            <p className="about-copy__text">
              We are more than a place to lift weights. We are a community of driven
              individuals united by discipline and ambition. With expert coaching,
              cutting-edge facilities and an environment that demands your best, we
              help you become the strongest version of yourself — inside and out.
            </p>

            <div className="about-mission">
              <strong>Our Mission</strong>
              <p>
                To empower every member with the tools, guidance and mindset to build
                a stronger body, a sharper mind and a lasting lifestyle of health.
              </p>
            </div>
            <div className="about-mission">
              <strong>Our Vision</strong>
              <p>
                To be the region’s premier fitness destination — a brand synonymous
                with excellence, transformation and unmatched member experience.
              </p>
            </div>

            <div className="about-features">
              {aboutFeatures.map((feature) => (
                <div className="about-feature" key={feature.title}>
                  <i className={`bi ${feature.icon}`} />
                  <div>
                    <h5>{feature.title}</h5>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-visual" delay={120}>
            <div className="about-visual__badge">
              <strong>10+</strong>
              <span>Years of Excellence</span>
            </div>
            <SmartImage
              src={images.aboutMain}
              alt="Athlete training with weights inside MADCORE Fitness"
              className="about-visual__main"
            />
            <SmartImage
              src={images.aboutSecondary}
              alt="Modern gym interior with premium equipment"
              className="about-visual__secondary"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
