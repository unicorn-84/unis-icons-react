import * as React from 'react';
import { SVGProps } from 'react';

const SvgGhost = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m27 27-3.663-3-3.674 3L16 24l-3.662 3-3.675-3L5 27V15a11 11 0 1 1 22 0v12Z"
    />
  </svg>
);

export default SvgGhost;
