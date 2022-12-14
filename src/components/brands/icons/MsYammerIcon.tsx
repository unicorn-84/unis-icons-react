import * as React from 'react';
import { SVGProps } from 'react';

const SvgMsYammerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#ms-yammer-icon_svg__a)"
      d="M36 24.5c0 5.92-2.765 11.254-7.187 15L13 24.5h23Z"
    />
    <path
      fill="url(#ms-yammer-icon_svg__b)"
      d="M36 24.5H13l15.813-16C33.235 12.496 36 18.186 36 24.5Z"
    />
    <path
      fill="url(#ms-yammer-icon_svg__c)"
      d="M38.833 31.5A24.498 24.498 0 0 0 40 24c0-2.622-.41-5.144-1.167-7.5L13 24.5l25.833 7Z"
    />
    <path
      fill="#000"
      fillOpacity={0.3}
      d="M15 19.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-.257a3 3 0 0 1-2.122-.879L21.5 32.5H18a3 3 0 0 1-3-3v-10Z"
    />
    <rect
      width={18}
      height={18}
      x={8}
      y={14.5}
      fill="url(#ms-yammer-icon_svg__d)"
      rx={2}
    />
    <path
      fill="#fff"
      d="M16.777 22.492 14.419 18.5H12l3.837 6.443V28.5h2.31v-3.557L22 18.5h-2.434l-2.358 3.992h-.431Z"
    />
    <defs>
      <linearGradient
        id="ms-yammer-icon_svg__a"
        x1={22.703}
        x2={32.623}
        y1={29.372}
        y2={35.41}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0E51A3" />
        <stop offset={1} stopColor="#1464B6" />
      </linearGradient>
      <linearGradient
        id="ms-yammer-icon_svg__b"
        x1={20.906}
        x2={32.926}
        y1={20.662}
        y2={13.716}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2292E2" />
        <stop offset={1} stopColor="#2294DB" />
      </linearGradient>
      <linearGradient
        id="ms-yammer-icon_svg__c"
        x1={20.56}
        x2={39.64}
        y1={24.359}
        y2={24.359}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#176FE0" />
        <stop offset={1} stopColor="#2F9FEF" />
      </linearGradient>
      <linearGradient
        id="ms-yammer-icon_svg__d"
        x1={8}
        x2={26}
        y1={23.5}
        y2={23.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#084C8A" />
        <stop offset={1} stopColor="#1572CB" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMsYammerIcon;
