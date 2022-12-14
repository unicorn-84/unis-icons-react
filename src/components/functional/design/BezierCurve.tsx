import * as React from 'react';
import { SVGProps } from 'react';

const SvgBezierCurve = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10h11m6 0h11m-14 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm22 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.975 10.412A11.012 11.012 0 0 1 26.825 19m-21.65 0a11.012 11.012 0 0 1 7.85-8.588"
    />
  </svg>
);

export default SvgBezierCurve;
