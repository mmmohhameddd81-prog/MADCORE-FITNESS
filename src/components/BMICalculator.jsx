import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function getCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', segment: 1, note: 'Aim to build healthy mass with strength training and proper nutrition.' };
  if (bmi < 25) return { label: 'Normal Weight', segment: 2, note: 'Great work — maintain your healthy balance with regular training.' };
  if (bmi < 30) return { label: 'Overweight', segment: 3, note: 'Increase activity and refine nutrition to reach a healthier range.' };
  return { label: 'Obese', segment: 4, note: 'Speak with one of our coaches for a safe, personalized plan.' };
}

export default function BMICalculator() {
  const [values, setValues] = useLocalStorage('madcore_bmi', { height: '', weight: '' });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const update = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const calculate = () => {
    const height = Number(values.height);
    const weight = Number(values.weight);
    const nextErrors = {};

    if (!values.height || Number.isNaN(height) || height < 50 || height > 250) {
      nextErrors.height = 'Enter a valid height between 50 and 250 cm.';
    }
    if (!values.weight || Number.isNaN(weight) || weight < 20 || weight > 400) {
      nextErrors.weight = 'Enter a valid weight between 20 and 400 kg.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setResult(null);
      return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const rounded = Math.round(bmi * 10) / 10;
    const category = getCategory(bmi);
    const position = Math.max(2, Math.min(98, ((bmi - 15) / 25) * 100));
    setResult({ value: rounded, ...category, position });
  };

  return (
    <div className="calc-card">
      <div className="calc-card__head">
        <i className="bi bi-activity" />
        <div>
          <h3>BMI Calculator</h3>
          <p>Body Mass Index estimator</p>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-sm-6">
          <div className="field">
            <label htmlFor="bmi-height">Height (cm)</label>
            <input
              id="bmi-height"
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
        <div className="col-sm-6">
          <div className="field">
            <label htmlFor="bmi-weight">Weight (kg)</label>
            <input
              id="bmi-weight"
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

      <button type="button" className="btn-mad mt-2" onClick={calculate}>
        Calculate BMI <i className="bi bi-arrow-right" />
      </button>

      {result && (
        <div className="calc-result" role="status">
          <div className="calc-result__top">
            <div className="calc-result__value">
              {result.value} <small>BMI</small>
            </div>
            <span className="calc-result__category">{result.label}</span>
          </div>
          <div className="bmi-scale">
            <div className="bmi-scale__bar">
              <span className="s1" /><span className="s2" /><span className="s3" /><span className="s4" />
            </div>
            <div className="bmi-scale__marker">
              <i className="bi bi-caret-down-fill" style={{ left: `${result.position}%` }} />
            </div>
            <div className="bmi-scale__labels">
              <span>Under</span><span>Normal</span><span>Over</span><span>Obese</span>
            </div>
          </div>
          <p className="calc-result__note">{result.note}</p>
        </div>
      )}

      <p className="calc-disclaimer">
        <i className="bi bi-info-circle" />
        BMI is a general screening estimate and does not account for muscle mass, age or
        body composition. It is not medical advice.
      </p>
    </div>
  );
}
