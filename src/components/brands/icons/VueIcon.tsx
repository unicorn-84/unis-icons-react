import * as React from 'react';
import { SVGProps } from 'react';

const SvgVueIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#41B883"
      d="M34.8 8.475H42l-18 31.05L6 8.475h13.77l4.23 7.2 4.14-7.2h6.66Z"
    />
    <path
      fill="#41B883"
      d="m6 8.475 18 31.05 18-31.05h-7.2L24 27.105 13.11 8.475H6Z"
    />
    <path
      fill="#35495E"
      d="M13.11 8.475 24 27.195l10.8-18.72h-6.66l-4.14 7.2-4.23-7.2h-6.66Z"
    />
  </svg>
);

export default SvgVueIcon;
