import * as React from 'react';
import { SVGProps } from 'react';

const SvgSyringe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#syringe_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m23 3 6 6M16 6l10 10m-8.5-8.5L6.288 18.712a.987.987 0 0 0-.288.7V26h6.588a.987.987 0 0 0 .7-.288L24.5 14.5m-11.75-2.25L16 15.5m-6.75.25L12.5 19m8.5-8 5-5M6 26l-3 3"
      />
    </g>
    <defs>
      <clipPath id="syringe_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSyringe;
