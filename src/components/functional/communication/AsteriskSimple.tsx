import * as React from 'react';
import { SVGProps } from 'react';

const SvgAsteriskSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 5v11M5.538 12.6 16 16m-6.462 8.9L16 16m6.462 8.9L16 16m10.462-3.4L16 16"
    />
  </svg>
);

export default SvgAsteriskSimple;
