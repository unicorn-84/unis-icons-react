import * as React from 'react';
import { SVGProps } from 'react';

const SvgClipboardText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#clipboard-text_svg__a)"
    >
      <path d="M12 19h8m-8-4h8m0-10h5a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      <path d="M11 9V8a5 5 0 0 1 10 0v1H11Z" />
    </g>
    <defs>
      <clipPath id="clipboard-text_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgClipboardText;
