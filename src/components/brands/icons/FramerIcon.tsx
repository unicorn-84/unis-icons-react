import * as React from 'react';
import { SVGProps } from 'react';

const SvgFramerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#05F"
      fillRule="evenodd"
      d="M10 30.667h14V44L10 30.667Z"
      clipRule="evenodd"
    />
    <path fill="#0AF" d="M24 17.333H10v13.334h28L24 17.333Z" />
    <path fill="#8DF" d="m10 4 14 13.333h14V4H10Z" />
  </svg>
);

export default SvgFramerIcon;
