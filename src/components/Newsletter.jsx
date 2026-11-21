import { useState } from 'react';
import Reveal from './Reveal';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [subscribers, setSubscribers] = useLocalStorage('madcore_subscribers', []);

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (subscribers.includes(email.trim().toLowerCase())) {
      setFeedback({ type: 'error', message: 'This email is already subscribed.' });
      return;
    }
    setSubscribers((prev) => [...prev, email.trim().toLowerCase()]);
    setFeedback({ type: 'success', message: 'You’re in! Welcome to the MADCORE community.' });
    setEmail('');
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__inner">
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow__line" /> Newsletter <span className="eyebrow__line" />
          </span>
          <h2 className="newsletter__title">
            Stay Strong. <span>Stay Connected.</span>
          </h2>
          <p className="newsletter__desc">
            Get the latest fitness tips, exclusive offers, and MADCORE updates — delivered
            straight to your inbox.
          </p>
          <form className="newsletter__form" onSubmit={subscribe} noValidate>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className={feedback.type === 'error' ? 'is-invalid-mad' : ''}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFeedback({ type: '', message: '' });
              }}
            />
            <button type="submit" className="btn-mad">
              Subscribe <i className="bi bi-arrow-right" />
            </button>
            {feedback.message && (
              <div className={`newsletter__msg is-${feedback.type}`} role="status">
                <i className={`bi ${feedback.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'}`} />{' '}
                {feedback.message}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
