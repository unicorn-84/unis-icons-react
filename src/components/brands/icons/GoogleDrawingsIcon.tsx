import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleDrawingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#DB4437"
      d="M12.333 4h16.111l10 10v27.222A2.778 2.778 0 0 1 35.667 44H12.333a2.778 2.778 0 0 1-2.777-2.778V6.778A2.778 2.778 0 0 1 12.333 4Z"
    />
    <path
      fill="#3E2723"
      fillOpacity={0.2}
      d="M9.555 40.666a2.778 2.778 0 0 0 2.778 2.778h23.334a2.778 2.778 0 0 0 2.777-2.778v.556A2.778 2.778 0 0 1 35.667 44H12.333a2.778 2.778 0 0 1-2.778-2.778v-.556Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.2}
      d="M12.333 4h16.111v.556h-16.11a2.778 2.778 0 0 0-2.779 2.777v-.555A2.778 2.778 0 0 1 12.333 4Z"
    />
    <path
      fill="url(#google-drawings-icon_svg__a)"
      d="m29 12.889 9.444 9.444V14"
    />
    <path
      fill="#EDA29B"
      d="m28.444 4 10 10h-7.222a2.778 2.778 0 0 1-2.778-2.778V4Z"
    />
    <path
      fill="#F1F1F1"
      d="M26.222 26.222a5.556 5.556 0 1 0-11.11 0 5.556 5.556 0 0 0 11.11 0Zm-5.555 3.333a3.337 3.337 0 0 1-3.334-3.333 3.337 3.337 0 0 1 3.334-3.333A3.337 3.337 0 0 1 24 26.222a3.337 3.337 0 0 1-3.333 3.333Zm7.222-1.11c-.556 2.221-2.222 3.888-3.889 4.444v4.444h8.889v-8.889h-5Z"
    />
    <path
      fill="url(#google-drawings-icon_svg__b)"
      fillOpacity={0.1}
      d="M12.333 4h16.111l10 10v27.222A2.778 2.778 0 0 1 35.667 44H12.333a2.778 2.778 0 0 1-2.777-2.778V6.778A2.778 2.778 0 0 1 12.333 4Z"
    />
    <defs>
      <radialGradient
        id="google-drawings-icon_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(46.5828 0 0 46.5826 10.47 4.799)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="google-drawings-icon_svg__a"
        x1={33.722}
        x2={33.722}
        y1={13.7}
        y2={22.334}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A237E" stopOpacity={0.2} />
        <stop offset={1} stopColor="#1A237E" stopOpacity={0.02} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgGoogleDrawingsIcon;
