import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolders = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#folders_svg__a)"
    >
      <path d="M25 14v11.113a.888.888 0 0 1-.887.887H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h5.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H24a1 1 0 0 1 1 1Z" />
      <path d="M25 14v11.113a.888.888 0 0 1-.887.887H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h5.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H24a1 1 0 0 1 1 1Z" />
      <path d="M8 10V7a1 1 0 0 1 1-1h5.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H28a1 1 0 0 1 1 1v11.113a.888.888 0 0 1-.887.887H25" />
    </g>
    <defs>
      <clipPath id="folders_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolders;
