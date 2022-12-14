import * as React from 'react';
import { SVGProps } from 'react';

const SvgStatuspageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#statuspage-icon_svg__a)"
      d="M24 38.71a9.354 9.354 0 1 0 0-18.707 9.354 9.354 0 0 0 0 18.708Z"
    />
    <path
      fill="#2684FF"
      d="m4.253 18.548 5.028 5.956a1.073 1.073 0 0 0 1.523.112c8.143-7.301 18.227-7.301 26.392 0a1.073 1.073 0 0 0 1.523-.112l5.029-5.956c.38-.45.324-1.124-.124-1.507-11.794-10.336-27.432-10.336-39.248 0a1.072 1.072 0 0 0-.123 1.507Z"
    />
    <defs>
      <linearGradient
        id="statuspage-icon_svg__a"
        x1={24}
        x2={24}
        y1={35.493}
        y2={18.922}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2684FF" />
        <stop offset={0.82} stopColor="#0052CC" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgStatuspageIcon;
