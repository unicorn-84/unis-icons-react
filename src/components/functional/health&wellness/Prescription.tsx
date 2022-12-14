import * as React from 'react';
import { SVGProps } from 'react';

const SvgPrescription = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#prescription_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 16h6a5.5 5.5 0 0 0 0-11H9v19m5-8 11 11m0-7-7 7"
      />
    </g>
    <defs>
      <clipPath id="prescription_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPrescription;
