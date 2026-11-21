export default function Logo({ compact = false, onClick }) {
  return (
    <a
      className={`mad-logo ${compact ? 'mad-logo--compact' : ''}`}
      href="#home"
      onClick={onClick}
      aria-label="MADCORE FITNESS — home"
    >
      <span className="mad-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50V14h9l13 18 13-18h9v36h-9V29l-13 17-13-17v21z" />
        </svg>
      </span>
      <span className="mad-logo__text">
        <strong>MADCORE</strong>
        <small>FITNESS</small>
      </span>
    </a>
  );
}
