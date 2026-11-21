import { useEffect, useRef, useState } from 'react';
import { images, stats } from '../data/site';

function CountUp({ value }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame;
    const run = () => {
      const duration = 1700;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.floor(eased * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="hero__overlay" />
      <div className="hero__glow" />

      <div className="container hero__content">
        <div className="row">
          <div className="col-lg-9 col-xl-8">
            <span className="hero__label">Welcome to MADCORE Fitness</span>
            <h1 className="hero__title">
              <span>Build Your</span>
              <span className="accent">Stronger</span>
              <span>Self.</span>
            </h1>
            <p className="hero__desc">
              Push beyond your limits. Build strength, confidence, and discipline with
              expert coaching and world-class fitness facilities.
            </p>
            <div className="hero__actions">
              <a href="#membership" className="btn-mad">
                Start Your Journey <i className="bi bi-arrow-right" />
              </a>
              <a href="#programs" className="btn-mad-outline">
                Explore Programs <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <div className="hero-stat__num">
                <CountUp value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <div className="hero-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">Scroll</div>
    </section>
  );
}
