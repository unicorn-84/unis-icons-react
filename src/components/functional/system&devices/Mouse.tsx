import * as React from 'react';
import { SVGProps } from 'react';

const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5 4h-5a7 7 0 0 0-7 7v10a7 7 0 0 0 7 7h5a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7Zm-12 10h19M16 14V4"
    />
  </svg>
);

export default SvgMouse;
