import * as React from 'react';
import { SVGProps } from 'react';

const SvgPerspective = (props: SVGProps<SVGSVGElement>) => (
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
      d="m25.825 26.788-20-3.638A1 1 0 0 1 5 22.163V9.837a1 1 0 0 1 .825-.987l20-3.638A1 1 0 0 1 27 6.2v19.6a1 1 0 0 1-1.175.988ZM2 16h28"
    />
  </svg>
);

export default SvgPerspective;
