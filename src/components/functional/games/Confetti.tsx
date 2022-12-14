import * as React from 'react';
import { SVGProps } from 'react';

const SvgConfetti = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.737 25.988 6.726-18.513a1 1 0 0 1 1.65-.362l11.774 11.774a1 1 0 0 1-.362 1.65L6.012 27.264a.987.987 0 0 1-1.275-1.276v0ZM21 9s0-3 3-3 3-3 3-3M12.8 24.8l-5.6-5.6M18 2v3m9 9 2 2m-2-6 3-1M9.6 12.6l9.8 9.8"
    />
  </svg>
);

export default SvgConfetti;
