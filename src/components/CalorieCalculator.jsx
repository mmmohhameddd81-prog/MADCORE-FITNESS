import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ACTIVITY = [
  { value: '1.2', label: 'Sedentary — little or no exercise' },
  { value: '1.375', label: 'Light — exercise 1–3 days/week' },
  { value: '1.55', label: 'Moderate — exercise 3–5 days/week' },
  { value: '1.725', label: 'Active — exercise 6–7 days/week' },
  { value: '1.9', label: 'Very Active — hard labor / twice daily' },
];

const GENDERS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

export default function CalorieCalculator() {
  const [values, setValues] = useLocalStorage('madcore_calorie', {
    age: '',
    height: '',
    weight: '',
    gender: 'male',
    activity: '1.55',
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const update = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const calculate = () => {
    const age = Number(values.age);
    const height = Number(values.height);
    const weight = Number(values.weight);
    const nextErrors = {};

    if (!values.age || Number.isNaN(age) || age < 15 || age > 100) {
      nextErrors.age = 'Enter an age between 15 and 100.';
    }
    if (!values.height || Number.isNaN(height) || height < 50 || height > 250) {
      nextErrors.height = 'Enter a height between 50 and 250 cm.';
    }
    if (!values.weight || Number.isNaN(weight) || weight < 20 || weight > 400) {
      nextErrors.weight = 'Enter a weight between 20 and 400 kg.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setResult(null);
      return;
    }

    const bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      (values.gender === 'male' ? 5 : -161);
    const tdee = bmr * Number(values.activity);
    setResult({ tdee: Math.round(tdee), bmr: Math.round(bmr) });
  };

  return (
    <div className="calc-card">
      <div className="calc-card__head">
        <i className="bi bi-fire" />
        <div>
          <h3>Daily Calorie Calculator</h3>
          <p>Estimate your daily energy needs</p>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-sm-4">
          <div className="field">
            <label htmlFor="cal-age">Age</label>
            <input
              id="cal-age"
              type="number"
              inputMode="numeric"
              placeholder="e.g. 28"
              className={errors.age ? 'is-invalid-mad' : ''}
              value={values.age}
              onChange={(e) => update('age', e.target.value)}
            />
            {errors.age && <span className="field-error">{errors.age}</span>}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="field">
            <label htmlFor="cal-height">Height (cm)</label>
            <input
              id="cal-height"
              type="number"
              inputMode="decimal"
              placeholder="e.g. 175"
              className={errors.height ? 'is-invalid-mad' : ''}
              value={values.height}
              onChange={(e) => update('height', e.target.value)}
            />
            {errors.height && <span className="field-error">{errors.height}</span>}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="field">
            <label htmlFor="cal-weight">Weight (kg)</label>
            <input
              id="cal-weight"
              type="number"
              inputMode="decimal"
              placeholder="e.g. 78"
              className={errors.weight ? 'is-invalid-mad' : ''}
              value={values.weight}
              onChange={(e) => update('weight', e.target.value)}
            />
            {errors.weight && <span className="field-error">{errors.weight}</span>}
          </div>
        </div>
      </div>

      <div className="field">
        <label>Gender</label>
        <div className="radio-group">
          {GENDERS.map((g) => (
            <label key={g.value} className={values.gender === g.value ? 'is-selected' : ''}>
              <input
                type="radio"
                name="cal-gender"
                value={g.value}
                checked={values.gender === g.value}
                onChange={() => update('gender', g.value)}
              />
              {g.label}
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cal-activity">Activity Level</label>
        <select
          id="cal-activity"
          value={values.activity}
          onChange={(e) => update('activity', e.target.value)}
        >
          {ACTIVITY.map((a) => (
            <option key={a.value} value={a.value}>{a.label}</option>
          ))}
        </select>
      </div>

      <button type="button" className="btn-mad mt-2" onClick={calculate}>
        Calculate Calories <i className="bi bi-arrow-right" />
      </button>

      {result && (
        <div className="calc-result" role="status">
          <div className="calc-result__top">
            <div className="calc-result__value">
              {result.tdee.toLocaleString()} <small>kcal / day</small>
            </div>
            <span className="calc-result__category">Estimated Target</span>
          </div>
          <p className="calc-result__note">
            Basal metabolic rate (BMR): <strong>{result.bmr.toLocaleString()} kcal/day</strong>.
            Your result includes your selected activity level.
          </p>
        </div>
      )}

      <p className="calc-disclaimer">
        <i className="bi bi-info-circle" />
        Results are estimates using the Mifflin-St Jeor equation and are not medical
        advice. Consult a healthcare professional before making dietary changes.
      </p>
    </div>
  );
}
