import * as React from 'react';
import { SVGProps } from 'react';

const SvgStarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#10284B"
      d="M42 24c0-9.941-8.059-18-18-18S6 14.059 6 24s8.059 18 18 18 18-8.059 18-18Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M23.46 32.983v-2.706a6.302 6.302 0 0 0 5.847-9.674l-8.705 8.703-1.94 1.94a8.999 8.999 0 0 1 5.878-16.23v2.708a6.301 6.301 0 0 0-5.847 9.674l8.705-8.704 1.94-1.94a8.999 8.999 0 0 1-5.878 16.23Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgStarkIcon;
