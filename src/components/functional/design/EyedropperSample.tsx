import * as React from 'react';
import { SVGProps } from 'react';

const SvgEyedropperSample = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.475 14.475.612.613a2.012 2.012 0 0 1 0 2.825l-.875.875a1 1 0 0 1-1.425 0l-7.575-7.575a1 1 0 0 1 0-1.426l.875-.875a2.012 2.012 0 0 1 2.825 0l.613.613 3.45-3.45c1.35-1.35 3.55-1.425 4.925-.113a3.5 3.5 0 0 1 .075 5.013l-3.5 3.5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.825 17.825-7 7a3.963 3.963 0 0 1-3.863 1.038l-2.925 1.274a.999.999 0 0 1-1.1-.2v0a.712.712 0 0 1-.15-.8l1.35-3.1a3.962 3.962 0 0 1 1.038-3.862l7-7M6.538 20h11.125"
    />
  </svg>
);

export default SvgEyedropperSample;
