import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 5v22M22 7H10a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm5 11H10a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default SvgAlignLeft;
