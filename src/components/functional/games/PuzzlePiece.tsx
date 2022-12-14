import * as React from 'react';
import { SVGProps } from 'react';

const SvgPuzzlePiece = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 27a1 1 0 0 1-1-1v-5.337a3.45 3.45 0 0 1-1.763.325A3.5 3.5 0 1 1 7 14.338V9a1 1 0 0 1 1-1h5.838a3.45 3.45 0 0 1-.325-1.763A3.5 3.5 0 1 1 20.163 8H26a1 1 0 0 1 1 1v5.338a3.45 3.45 0 0 0-1.762-.325A3.5 3.5 0 1 0 27 20.663V26a1 1 0 0 1-1 1H8Z"
    />
  </svg>
);

export default SvgPuzzlePiece;
