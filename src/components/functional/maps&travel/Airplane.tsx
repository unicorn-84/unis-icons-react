import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 27-5 2v-4l2-2v-4L3 21v-4l10-5V6a3 3 0 0 1 6 0v6l10 5v4l-10-2v4l2 2v4l-5-2Z"
    />
  </svg>
);

export default SvgAirplane;
