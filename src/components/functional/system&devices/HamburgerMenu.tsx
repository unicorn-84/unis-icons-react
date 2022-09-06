import * as React from 'react';
import { SVGProps } from 'react';

const SvgHamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.333 8h21.334M5.333 16h21.334M5.333 24h21.334"
    />
  </svg>
);

export default SvgHamburgerMenu;
