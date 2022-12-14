import * as React from 'react';
import { SVGProps } from 'react';

const SvgAppleIcloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#apple-icloud-icon_svg__a)"
      d="M26.937 11.15a10.85 10.85 0 0 0-9.448 5.553 5.953 5.953 0 0 0-2.598-.601 5.952 5.952 0 0 0-5.86 5A8.197 8.197 0 0 0 4 28.662a8.197 8.197 0 0 0 8.2 8.189 8.184 8.184 0 0 0 1.029-.074h22.786c.12.008.24.014.36.017.114-.003.228-.009.342-.017h.546v-.04a7.618 7.618 0 0 0 4.807-2.518 7.686 7.686 0 0 0 1.93-5.09v-.015a7.687 7.687 0 0 0-1.76-4.88 7.622 7.622 0 0 0-4.45-2.634 10.851 10.851 0 0 0-10.853-10.45Z"
    />
    <defs>
      <linearGradient
        id="apple-icloud-icon_svg__a"
        x1={44.121}
        x2={3.985}
        y1={29.149}
        y2={28.596}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3E82F4" />
        <stop offset={1} stopColor="#93DCF7" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgAppleIcloudIcon;
