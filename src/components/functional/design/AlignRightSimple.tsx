import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlignRightSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 7v18m-5-14H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default SvgAlignRightSimple;
