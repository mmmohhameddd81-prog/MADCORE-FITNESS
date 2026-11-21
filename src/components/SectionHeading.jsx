import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="eyebrow__line" />
          {eyebrow}
          <span className="eyebrow__line" />
        </span>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </Reveal>
  );
}
