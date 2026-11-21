import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';
import { trainers } from '../data/site';

export default function Trainers() {
  return (
    <section className="section section--alt" id="trainers">
      <div className="container">
        <SectionHeading
          eyebrow="The Team"
          title={
            <>
              Meet The <span>Experts.</span>
            </>
          }
          description="Certified, passionate and relentlessly dedicated. Our coaches bring world-class expertise to every single session."
        />

        <div className="row g-4">
          {trainers.map((trainer, index) => (
            <div className="col-sm-6 col-lg-3" key={trainer.name}>
              <Reveal delay={index * 80}>
                <article className="trainer-card">
                  <div className="trainer-card__media">
                    <SmartImage src={trainer.image} alt={`${trainer.name}, ${trainer.role}`} />
                    <div className="trainer-card__socials">
                      {Object.entries(trainer.socials).map(([network, url]) => (
                        <a
                          key={network}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${trainer.name} on ${network}`}
                        >
                          <i className={`bi bi-${network}`} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="trainer-card__body">
                    <h3>{trainer.name}</h3>
                    <div className="trainer-card__role">{trainer.role}</div>
                    <div className="trainer-card__exp">
                      <i className="bi bi-award" /> {trainer.experience}
                    </div>
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
