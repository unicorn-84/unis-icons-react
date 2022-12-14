import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirplaneTakeoff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 27h18M2.112 17.55l4.713 4.412a4 4 0 0 0 4.75.538l18.925-11-2.325-2.85a4 4 0 0 0-5.125-.913L17.5 11 10 8.5l-2.063.887a1 1 0 0 0-.275 1.663L11.5 14.5l-3.5 2L4.5 15l-2.1.9a1 1 0 0 0-.288 1.65v0Z"
    />
  </svg>
);

export default SvgAirplaneTakeoff;
