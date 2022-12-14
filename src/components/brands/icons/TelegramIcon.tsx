import * as React from 'react';
import { SVGProps } from 'react';

const SvgTelegramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={20} fill="url(#telegram-icon_svg__a)" />
    <path
      fill="#fff"
      d="M33.98 15.727c.179-1.15-.915-2.06-1.938-1.61l-20.378 8.947c-.734.322-.68 1.433.08 1.676l4.203 1.338a2.71 2.71 0 0 0 2.371-.36l9.475-6.546c.285-.198.597.209.353.46l-6.82 7.032c-.662.682-.53 1.838.265 2.337l7.636 4.788c.857.537 1.958-.003 2.118-1.037l2.636-17.025Z"
    />
    <defs>
      <linearGradient
        id="telegram-icon_svg__a"
        x1={24}
        x2={24}
        y1={4}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#37BBFE" />
        <stop offset={1} stopColor="#007DBB" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgTelegramIcon;
