import * as React from 'react';
import { SVGProps } from 'react';

const SvgTabs = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1 21 2.788-9.287A1 1 0 0 1 4.75 11h10.5a1 1 0 0 1 .962.713L19 21m1-10h1.25a1 1 0 0 1 .962.713L25 21m1-10h1.25a1 1 0 0 1 .962.713L31 21M1 21h30"
    />
  </svg>
);

export default SvgTabs;
