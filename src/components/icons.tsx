"use client";
import React from "react";

export const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M2 4v16h20V4H2zm18 2v.511l-8 5-8-5V6h16zM4 18V8.489l8 5 8-5V18H4z" />
  </svg>
);

export const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 50 50"
    className="fill-current"
  >
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 50 50"
    className="fill-current"
  >
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);

// export function ReactIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 841.9 595.3"
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="40"
//     >
//       <g>
//         <ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" />
//         <ellipse cx="420.9" cy="296.5" rx="178" ry="74" />
//         <ellipse
//           cx="420.9"
//           cy="296.5"
//           rx="178"
//           ry="74"
//           transform="rotate(60 420.9 296.5)"
//         />
//         <ellipse
//           cx="420.9"
//           cy="296.5"
//           rx="178"
//           ry="74"
//           transform="rotate(120 420.9 296.5)"
//         />
//       </g>
//     </svg>
//   );
// }

export function ReactIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
    
    <ellipse rx="45" ry="11" transform="rotate(0 60 60)" fill="none" stroke="#61DBFB" strokeWidth="1" />
    
    <ellipse rx="45" ry="11" transform="rotate(60 60 60)" fill="none" stroke="#61DBFB" strokeWidth="1" />
    
    <ellipse rx="45" ry="11" transform="rotate(120 60 60)" fill="none" stroke="#61DBFB" strokeWidth="1" />
    
    <circle cx="60" cy="60" r="6" fill="#61DBFB" />
</svg>
  );
}

export function PythonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 255" className={className} fill="currentColor">
      <path d="M126.9 0c-7.5 0-14.7.7-21.6 2.1-19.1 3.8-22.6 11.7-22.6 26.3v19.3h45.2v6.4H65.8c-14.8 0-27.7 8.9-31.8 25.8-4.7 19.4-4.9 31.5 0 51.8 3.6 15.1 12.2 25.8 27 25.8h17.5v-23.3c0-16.9 14.6-31.8 31.8-31.8h45.1c12.6 0 22.6-10.4 22.6-23V28.4c0-12.2-10.3-21.4-22.6-23.7C145.7.9 136.4 0 126.9 0z" />
      <path d="M175.2 54.1v22.7c0 17.6-14.9 32.4-31.8 32.4h-45.1c-12.4 0-22.6 10.6-22.6 23v43.1c0 12.2 10.6 19.4 22.6 23 14.4 4.3 28.2 5.1 45.1 0 11.2-3.2 22.6-9.7 22.6-23v-17.3h-45.1v-6.4h67.7c14.8 0 20.3-10.3 22.6-23 4.9-25.9 4.7-40.3 0-65.1-3.4-18.3-7.8-31.4-22.6-31.4h-13.4z" />
    </svg>
  );
}

export function PHPIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 150" className={className} fill="currentColor">
      <ellipse cx="150" cy="75" rx="140" ry="65" opacity="0.9" />
      <text
        x="150"
        y="95"
        textAnchor="middle"
        fontSize="64"
        fontWeight="700"
        fill="white"
        fontFamily="system-ui, sans-serif"
      >
        PHP
      </text>
    </svg>
  );
}

export function AWSIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="currentColor">
      <path d="M95 120c-22 0-40-16-40-36 0-18 14-32 33-35 5-20 23-35 45-35 18 0 34 9 42 23 4-1 8-2 12-2 22 0 40 16 40 36s-18 36-40 36H95z" />
      <path
        d="M140 150c35 15 85 15 120-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

