import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsOnenoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#5D29A1" d="M16 31h24v5a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-5Z" />
    <path fill="#7F32CC" d="M16 24h24v7H16z" />
    <path fill="#9A40D6" d="M16 17h24v7H16z" />
    <path
      fill="url(#ms-onenote-icon_svg__a)"
      d="M18 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14V17h8v-5a2 2 0 0 0-2-2H18Z"
    />
    <path
      fill="#000"
      fillOpacity={0.3}
      d="M16 20a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9V20Z"
    />
    <rect
      width={18}
      height={18}
      x={8}
      y={15}
      fill="url(#ms-onenote-icon_svg__b)"
      rx={2}
    />
    <path
      fill="#fff"
      d="M21 29V19h-2.11v5.829L14.962 19H13v10h2.081v-6.043L19.155 29H21Z"
    />
    <defs>
      <linearGradient
        id="ms-onenote-icon_svg__a"
        x1={16}
        x2={32.5}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8C42AC" />
        <stop offset={1} stopColor="#C36DEF" />
      </linearGradient>
      <linearGradient
        id="ms-onenote-icon_svg__b"
        x1={8}
        x2={27}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#44176C" />
        <stop offset={1} stopColor="#621F9C" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsOnenoteIcon;
