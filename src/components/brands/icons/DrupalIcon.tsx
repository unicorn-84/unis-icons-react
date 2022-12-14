import * as React from 'react';
import { SVGProps } from 'react';

const SvgDrupalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24.5} cy={24.5} r={16.5} fill="#0678BE" />
    <path
      fill="#fff"
      d="M24.5 8C15.411 8 8 15.411 8 24.5S15.411 41 24.5 41 41 33.589 41 24.5C41 15.528 33.472 8 24.5 8Zm0 27c-4.976 0-9-4.024-9-9 0-4.217 2.793-6.869 5.281-9.357 1.65-1.65 3.248-3.863 3.719-5.643.472 1.781 2.043 3.993 3.719 5.643C30.707 19.13 33.5 21.783 33.5 26c0 4.976-4.024 9-9 9Z"
    />
  </svg>
);

export default SvgDrupalIcon;
