import { useState } from 'react';

const fallback = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#181B21"/>
    <path d="M330 400V200h34l66 92 66-92h34v200h-34V265l-66 88-66-88v135z" fill="#FF5A1F" opacity="0.85"/>
    <text x="400" y="500" fill="#A1A1AA" font-family="Arial, sans-serif" font-size="22" letter-spacing="8" text-anchor="middle">MADCORE</text>
  </svg>`
)}`;

// Image with a graceful branded fallback so no broken-image icon is ever shown.
export default function SmartImage({ src, alt = '', className = '', ...rest }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const current = src && src !== failedSrc ? src : fallback;

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailedSrc(src)}
      {...rest}
    />
  );
}
