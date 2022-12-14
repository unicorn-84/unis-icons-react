import * as React from 'react';
import { SVGProps } from 'react';

const SvgUploadSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.75 10.25 16 5l5.25 5.25M16 19V5m11 14v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7"
    />
  </svg>
);

export default SvgUploadSimple;
