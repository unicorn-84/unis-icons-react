import * as React from 'react';
import { SVGProps } from 'react';

const SvgDotsNine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#101828"
      d="M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-17 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgDotsNine;
