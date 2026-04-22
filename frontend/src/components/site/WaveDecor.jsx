import React from "react";

// Seigaiha / Japanese wave ornament – repeating concentric arcs.
export const SeigaihaPattern = ({ className = "", color = "#F5B700", opacity = 0.9 }) => (
  <svg
    className={className}
    viewBox="0 0 240 120"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="seigaiha" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
        <path
          d="M0 24 A24 24 0 0 1 48 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={opacity}
        />
        <path
          d="M0 24 A16 16 0 0 1 48 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={opacity * 0.8}
          transform="translate(0 4)"
        />
        <path
          d="M0 24 A8 8 0 0 1 48 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={opacity * 0.6}
          transform="translate(0 10)"
        />
        <path
          d="M-24 24 A24 24 0 0 1 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={opacity}
          transform="translate(24 0)"
        />
      </pattern>
    </defs>
    <rect width="240" height="120" fill="url(#seigaiha)" />
  </svg>
);

// Stylised brushstroke cloud - like the small marker next to paragraphs.
export const CloudGlyph = ({ className = "", color = "#F5F5DC" }) => (
  <svg
    className={className}
    viewBox="0 0 64 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 30 C6 22 14 18 20 20 C22 12 34 10 38 18 C46 14 58 20 56 28 C60 30 62 36 56 38 L10 38 C4 38 4 32 6 30 Z"
      fill={color}
      opacity="0.95"
    />
    <path
      d="M14 30 C18 28 24 28 30 30"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

// Minimal katana / sword icon used under nav items and in the header.
export const KatanaIcon = ({ className = "", color = "#F5B700" }) => (
  <svg
    className={className}
    viewBox="0 0 64 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="4" y1="8" x2="46" y2="8" stroke={color} strokeWidth="1.5" />
    <rect x="46" y="5" width="3" height="6" fill={color} />
    <rect x="49" y="3" width="2" height="10" fill={color} />
    <rect x="51" y="6" width="8" height="4" rx="1" fill={color} />
    <circle cx="60" cy="8" r="1.4" fill={color} />
  </svg>
);

// Big wave / ocean crest used at section corners.
export const OceanWave = ({ className = "", flip = false }) => (
  <svg
    className={className}
    viewBox="0 0 400 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ transform: flip ? "scaleX(-1)" : "none" }}
  >
    <path
      d="M0 200 C40 140 90 110 160 130 C220 150 260 120 300 80 C340 40 380 40 400 60 L400 240 L0 240 Z"
      fill="#F5B700"
      opacity="0.95"
    />
    <path
      d="M0 220 C60 170 120 160 180 180 C240 200 300 180 360 150 C380 140 395 140 400 145 L400 240 L0 240 Z"
      fill="#E09A00"
    />
    <path
      d="M20 150 C70 120 120 140 160 150"
      stroke="#FFF5CC"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M200 110 C240 90 270 110 300 130"
      stroke="#FFF5CC"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="120" cy="120" r="4" fill="#FFF5CC" />
    <circle cx="260" cy="85" r="3" fill="#FFF5CC" />
  </svg>
);

// Diagonal stripes background (used behind tech icons).
export const DiagonalStripes = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 400 160"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="stripes" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="11" height="22" fill="#F5EFD6" />
        <rect x="11" width="11" height="22" fill="#EDE4C0" />
      </pattern>
    </defs>
    <rect width="400" height="160" fill="url(#stripes)" />
  </svg>
);
