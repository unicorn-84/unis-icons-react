import * as React from 'react';
import { SVGProps } from 'react';

const SvgGoogleScholarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#4285F4" d="M24 34.907 6 20.25 24 6v28.907Z" />
    <path fill="#356AC3" d="M24 34.907 42 20.25 24 6v28.907Z" />
    <path
      fill="#A0C3FF"
      d="M24 42c5.799 0 10.5-4.701 10.5-10.5S29.799 21 24 21s-10.5 4.701-10.5 10.5S18.201 42 24 42Z"
    />
    <path
      fill="#76A7FA"
      d="M14.51 27c1.686-3.547 5.301-6 9.49-6s7.804 2.453 9.49 6H14.51Z"
    />
  </svg>
);

export default SvgGoogleScholarIcon;
