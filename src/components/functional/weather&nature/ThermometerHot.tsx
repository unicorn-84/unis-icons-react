import * as React from 'react';
import { SVGProps } from 'react';

const SvgThermometerHot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#thermometer-hot_svg__a)"
    >
      <path d="M15 26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-5V6m15.038 4a2.502 2.502 0 0 1-3.538 0 2.5 2.5 0 0 0-3.538 0m7.076 5a2.502 2.502 0 0 1-3.538 0 2.5 2.5 0 0 0-3.538 0" />
      <path d="M11 18.375V6a4 4 0 1 1 8 0v12.375a6.5 6.5 0 1 1-8 0v0Z" />
    </g>
    <defs>
      <clipPath id="thermometer-hot_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgThermometerHot;
