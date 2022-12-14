import * as React from 'react';
import { SVGProps } from 'react';

const SvgBracketsAngle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5 3 16l7 11M22 5l7 11-7 11"
    />
  </svg>
);

export default SvgBracketsAngle;
