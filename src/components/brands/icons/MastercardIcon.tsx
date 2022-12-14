import * as React from 'react';
import { SVGProps } from 'react';

const SvgMastercardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={15} cy={24} r={13.5} fill="#E80B26" />
    <circle cx={33} cy={24} r={13.5} fill="#F59D31" />
    <path
      fill="#FC6020"
      d="M24 34.062A13.466 13.466 0 0 0 28.5 24c0-3.998-1.738-7.59-4.5-10.062A13.466 13.466 0 0 0 19.5 24c0 3.998 1.738 7.59 4.5 10.062Z"
    />
  </svg>
);

export default SvgMastercardIcon;
