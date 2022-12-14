import * as React from 'react';
import { SVGProps } from 'react';

const SvgSteamIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#steam-icon_svg__a)"
      d="M3.855 30.04C6.451 38.695 14.482 45 23.987 45 35.592 45 45 35.598 45 24S35.592 3 23.987 3C12.85 3 3.737 11.658 3.018 22.605c0 3.145 0 4.457.837 7.435Z"
    />
    <path
      fill="#fff"
      d="m22.906 18.844-5.142 7.465a5.836 5.836 0 0 0-3.445.954L3.027 22.617s-.26 4.296.828 7.497l7.982 3.292a5.82 5.82 0 0 0 3.442 4.115 5.83 5.83 0 0 0 8.069-5.537l7.538-5.251c4.402 0 7.981-3.587 7.981-7.992 0-4.406-3.578-7.99-7.981-7.99-4.253 0-8.218 3.71-7.98 8.093ZM21.67 33.867a4.5 4.5 0 0 1-5.879 2.425 4.468 4.468 0 0 1-2.314-2.207l2.598 1.077a3.312 3.312 0 0 0 2.546-6.116l-2.686-1.113a4.472 4.472 0 0 1 3.315.05 4.461 4.461 0 0 1 2.428 2.441 4.476 4.476 0 0 1-.008 3.443Zm9.216-9.802a5.328 5.328 0 0 1-5.318-5.325 5.328 5.328 0 0 1 5.318-5.322 5.328 5.328 0 0 1 5.319 5.323 5.328 5.328 0 0 1-5.32 5.324ZM26.9 18.732c0-2.208 1.79-4 3.994-4a3.998 3.998 0 0 1 3.995 4 3.997 3.997 0 0 1-3.995 3.999 3.997 3.997 0 0 1-3.994-3.999Z"
    />
    <defs>
      <linearGradient
        id="steam-icon_svg__a"
        x1={24.009}
        x2={24.009}
        y1={3}
        y2={45}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111D2E" />
        <stop offset={0.212} stopColor="#051839" />
        <stop offset={0.407} stopColor="#0A1B48" />
        <stop offset={0.581} stopColor="#132E62" />
        <stop offset={0.738} stopColor="#144B7E" />
        <stop offset={0.873} stopColor="#136497" />
        <stop offset={1} stopColor="#1387B8" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgSteamIcon;
