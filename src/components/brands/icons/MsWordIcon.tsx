import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsWordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <rect
      width={24}
      height={28}
      x={16}
      y={10}
      fill="url(#ms-word-icon_svg__a)"
      rx={2}
    />
    <path
      fill="url(#ms-word-icon_svg__b)"
      d="M16 31h24v5a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-5Z"
    />
    <path fill="url(#ms-word-icon_svg__c)" d="M16 24h24v7H16z" />
    <path fill="url(#ms-word-icon_svg__d)" d="M16 17h24v7H16z" />
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
      fill="url(#ms-word-icon_svg__e)"
      rx={2}
    />
    <path
      fill="#fff"
      d="M23 19.014h-1.948l-1.53 6.525L17.85 19h-1.647l-1.687 6.539L13 19.014h-2L13.601 29h1.726L17 22.688 18.673 29H20.4l2.6-9.986Z"
    />
    <defs>
      <linearGradient
        id="ms-word-icon_svg__a"
        x1={16}
        x2={40}
        y1={14.667}
        y2={14.667}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2B78B1" />
        <stop offset={1} stopColor="#338ACD" />
      </linearGradient>
      <linearGradient
        id="ms-word-icon_svg__b"
        x1={16}
        x2={40}
        y1={35.375}
        y2={35.375}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B366F" />
        <stop offset={1} stopColor="#2657B0" />
      </linearGradient>
      <linearGradient
        id="ms-word-icon_svg__c"
        x1={26.5}
        x2={40}
        y1={28}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20478B" />
        <stop offset={1} stopColor="#2D6FD1" />
      </linearGradient>
      <linearGradient
        id="ms-word-icon_svg__d"
        x1={26.5}
        x2={40}
        y1={21}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#215295" />
        <stop offset={1} stopColor="#2E84D3" />
      </linearGradient>
      <linearGradient
        id="ms-word-icon_svg__e"
        x1={8}
        x2={27}
        y1={25}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#223E74" />
        <stop offset={1} stopColor="#215091" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsWordIcon;
