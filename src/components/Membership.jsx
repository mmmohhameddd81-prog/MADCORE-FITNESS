import { useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { plans } from '../data/site';

export default function Membership({ onSelectPlan }) {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="section" id="membership">
      <div className="container">
        <SectionHeading
          eyebrow="Membership"
          title={
            <>
              Invest In <span>Yourself.</span>
            </>
          }
          description="Choose the plan that fits your ambition. Every membership is a step toward a stronger, more confident you."
        />

        <div className="text-center">
          <div className="pricing-toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={billing === 'monthly' ? 'is-active' : ''}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={billing === 'yearly' ? 'is-active' : ''}
              onClick={() => setBilling('yearly')}
            >
              Yearly <span className="save-badge">Save 2 months</span>
            </button>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          {plans.map((plan, index) => {
            const price = billing === 'monthly' ? plan.monthly : plan.yearly;
            const period = billing === 'monthly' ? '/month' : '/year';
            return (
              <div className="col-sm-6 col-lg-3" key={plan.name}>
                <Reveal delay={index * 70} className="h-100">
                  <div
                    className={`plan-card ${plan.popular ? 'plan-card--popular' : ''}`}
                  >
                    {plan.popular && (
                      <span className="plan-card__ribbon">Most Popular</span>
                    )}
                    <h3 className="plan-card__name">{plan.name}</h3>
                    <p className="plan-card__tagline">{plan.tagline}</p>
                    <div className="plan-card__price">
                      <strong>${price}</strong>
                      <span>{period}</span>
                    </div>
                    <ul className="plan-card__features">
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <i className="bi bi-check-circle-fill" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={plan.popular ? 'btn-mad' : 'btn-mad-outline'}
                      onClick={() => onSelectPlan(plan.name)}
                    >
                      Join Now <i className="bi bi-arrow-right" />
                    </button>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
